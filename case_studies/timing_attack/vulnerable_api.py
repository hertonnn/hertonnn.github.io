"""
Vulnerable API - Timing Attack Demonstration Lab
Autor: Herton Silveira (hertonnn.github.io)

Este servidor HTTP simula uma API vulnerável a Timing Attacks (Canais Laterais).
O endpoint POST /verify valida um token enviado no cabeçalho 'X-API-Key'
usando uma comparação de strings tradicional vulnerável a vazamento temporal.

AVISO DIDÁTICO:
Em sistemas de produção, a diferença temporal de comparações é na ordem de
nanossegundos ou microssegundos (ciclos de instrução de CPU e cache miss).
Para permitir testes locais práticos e reproduzíveis sem exigir 100.000 requisições
estatísticas para vencer o ruído do escalonador do SO, introduzimos uma escala
proporcional (4ms de overhead base ao acertar o comprimento + 8ms por caractere
inicial correspondido).
"""

import time
import json
from http.server import HTTPServer, BaseHTTPRequestHandler

# Segredo que o exploit tentará extrair via medição temporal
SECRET_TOKEN = "FLAG_SEC_2026"
HOST = "127.0.0.1"
PORT = 8000

# Parâmetros de escala didática
BASE_DELAY = 0.004       # 4ms ao confirmar o comprimento correto
CHAR_DELAY = 0.008       # 8ms por caractere correto correspondido

def vulnerable_compare(provided: str, secret: str) -> bool:
    """
    Comparação INSEGURA vulnerável a Timing Attack:
    1. Vazamento de comprimento: Retorna imediatamente se os comprimentos forem distintos.
    2. Vazamento caractere a caractere (Early-Exit): Interrompe a checagem no primeiro
       caractere diferente. Quanto mais caracteres iniciais estiverem corretos,
       maior é o tempo de execução!
    """
    # 1. Falha prematura por comprimento
    if len(provided) != len(secret):
        return False

    # 2. Conta quantos caracteres do prefixo correspondem (early-exit)
    matched = 0
    for c_prov, c_sec in zip(provided, secret):
        if c_prov == c_sec:
            matched += 1
        else:
            break

    # Custo de execução proporcional aos caracteres validados antes da saída:
    # Tempo = T_base + k * Delta_t
    time.sleep(BASE_DELAY + matched * CHAR_DELAY)

    return matched == len(secret)

class TimingAttackHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/verify":
            api_key = self.headers.get("X-API-Key", "")
            is_valid = vulnerable_compare(api_key, SECRET_TOKEN)

            self.send_response(200 if is_valid else 401)
            self.send_header("Content-Type", "application/json")
            self.end_headers()

            response = {
                "authenticated": is_valid,
                "message": "Acesso concedido!" if is_valid else "Token invalido."
            }
            self.wfile.write(json.dumps(response).encode("utf-8"))
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        # Silencia logs de requisição para manter o terminal limpo durante o ataque
        return

def run_server():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, TimingAttackHandler)
    print("=" * 60)
    print(f"[*] API Vulneravel ativa em http://{HOST}:{PORT}/verify")
    print(f"[*] Alvo configurado: {SECRET_TOKEN} ({len(SECRET_TOKEN)} caracteres)")
    print("[*] Aguardando conexoes... Pressione Ctrl+C para encerrar.")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Servidor encerrado.")
        httpd.server_close()

if __name__ == "__main__":
    run_server()
