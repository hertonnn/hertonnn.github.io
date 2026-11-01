"""
Secure API - Constant Time Implementation
Autor: Herton Silveira (hertonnn.github.io)

Implementação protegida contra Timing Attacks utilizando comparação em
tempo constante (Constant-Time Comparison).
"""

import json
import secrets
from http.server import HTTPServer, BaseHTTPRequestHandler

SECRET_TOKEN = "FLAG_SEC_2026"
HOST = "127.0.0.1"
PORT = 8001

def secure_compare(provided: str, secret: str) -> bool:
    """
    Comparação Segura em Tempo Constante.
    Utiliza secrets.compare_digest (ou hmac.compare_digest).
    
    A função interna percorre todos os bytes independente de onde
    ocorra a divergência, sem nenhum early-exit baseado em valor.
    """
    return secrets.compare_digest(provided, secret)

class SecureTimingHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == "/verify":
            api_key = self.headers.get("X-API-Key", "")
            
            # Validação segura em tempo constante
            is_valid = secure_compare(api_key, SECRET_TOKEN)
            
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
        return

def run_server():
    server_address = (HOST, PORT)
    httpd = HTTPServer(server_address, SecureTimingHandler)
    print("=" * 60)
    print(f"[*] API Segura (Constant-Time) rodando em http://{HOST}:{PORT}/verify")
    print(f"[*] Segredo configurado: {SECRET_TOKEN}")
    print("[*] Pressione Ctrl+C para encerrar.")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[!] Servidor encerrado.")
        httpd.server_close()

if __name__ == "__main__":
    run_server()
