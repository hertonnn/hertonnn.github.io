# Laboratório prático: timing attacks e canais laterais

Ambiente executável demonstrando como variações no tempo de resposta (timing attacks de canal lateral) permitem recuperar segredos como chaves de API, tokens e assinaturas HMAC sem força bruta tradicional.

## 1. Arquivos do laboratório

- `vulnerable_api.py`: servidor HTTP em Python (`http://127.0.0.1:8000/verify`) com comparação insegura por saída antecipada (early exit).
- `exploit.py`: script de exploração que mede latências, filtra pelo menor tempo (`min`) e usa parada antecipada adaptativa para recuperar o segredo caractere a caractere.
- `secure_api.py`: servidor protegido (`http://127.0.0.1:8001/verify`) com comparação em tempo constante (`secrets.compare_digest`).

## 2. Como executar

### Pré-requisitos
- Python 3.8+ (biblioteca padrão: `http.server`, `urllib`, `time`, `secrets`, `json`).

### Passo 1: iniciar a API vulnerável
Em um terminal:
```bash
python vulnerable_api.py
```
O servidor escuta em `http://127.0.0.1:8000/verify`.

### Passo 2: executar o exploit
Em um segundo terminal:
```bash
python exploit.py
```
O script executa em duas etapas:
1. Tamanho do segredo: testa comprimentos de 1 a 16 e identifica 13 caracteres.
2. Extração de caracteres: testa o conjunto de caracteres e recupera o token `FLAG_SEC_2026` observando os degraus de tempo de resposta.

### Passo 3: testar a mitigação em tempo constante
Inicie a versão segura:
```bash
python secure_api.py
```
O servidor seguro roda em `http://127.0.0.1:8001/verify`. Apontando o `exploit.py` para a porta 8001, as respostas levam o mesmo tempo e a extração falha.

## 3. Fundamentação teórica e convenção do Cryptopals

Os parâmetros de atraso (`BASE_DELAY = 4ms` e `CHAR_DELAY = 8ms`) em `vulnerable_api.py` seguem o modelo didático do [Cryptopals Crypto Challenges, Challenge 31: "Implement and break HMAC-SHA1 with an artificial timing leak"](https://cryptopals.com/sets/4/challenges/31) e do [Cryptopals Challenge 32: "Break HMAC-SHA1 with a less artificial timing leak"](https://cryptopals.com/sets/4/challenges/32).

Essa calibragem atende a dois pontos:
1. Viabilidade em ambiente local: uma comparação em memória (`memcmp`) varia em frações de nanossegundos. Medir isso pela pilha do sistema operacional exigiria centenas de milhares de requisições. O atraso calibrado permite validar a lógica do ataque em segundos na máquina local.
2. Operações naturalmente lentas: em produção, canais laterais temporais frequentemente atingem rotas que processam operações custosas, como cálculo de hashes de senha, consultas a bancos de dados ou operações com chaves assimétricas.

## 4. Escalas de medição: nanossegundos, microssegundos e milissegundos

A viabilidade de um ataque temporal varia conforme a posição do invasor e a operação executada:

| Ambiente | Diferença temporal (Δt) | Nível de ruído (jitter) | Viabilidade | Mecanismo |
| :--- | :--- | :--- | :--- | :--- |
| Local (CPU / hardware) | 0.3 ns a 10 ns | Quase nulo (~1 ciclo) | Viável | Instruções como `RDTSC`/`RDTSCP` leem ciclos de clock diretamente. Base de ataques como Spectre e Meltdown (diferença entre cache L1 e RAM). Levou navegadores a reduzirem a precisão de `performance.now()`. |
| Rede local (LAN) | 1 µs a 50 µs | Médio (10 µs a 100 µs) | Viável com amostragem | Demonstração de Brumley e Boneh (2003) no OpenSSL. Pela Lei dos Grandes Números (σ / √N), a média de milhares de amostras anula o ruído de rede. |
| Internet pública (WAN, strings curtas) | Nanossegundos | Elevado (5 ms a 50 ms) | Requer grande volume amostral | Exige filtros estatísticos para isolar o sinal do ruído de rede (Crosby et al., 2009). Em nuvem compartilhada (mesma região/VPC), a latência cai abaixo de 1 ms e reduz o ruído. |
| Internet pública (WAN, operações custosas) | Milissegundos | Baixo relativo | Alta viabilidade | O tempo da operação supera o ruído da rede. Exemplo: enumeração de usuários por tempo de resposta no hash de senhas ([PortSwigger Web Security Academy](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing)). |

## 5. Referências

- Paul Kocher (1996): [Timing Attacks on Implementations of Diffie-Hellman, RSA, DSS, and Other Systems](https://www.paulkocher.com/doc/TimingAttacks.pdf)
- David Brumley e Dan Boneh (2003): [Remote Timing Attacks are Practical (OpenSSL RSA)](https://crypto.stanford.edu/~dabo/papers/ssl-timing.pdf)
- Scott Crosby, Dan Wallach e Rudolf Riedi (2009): [Opportunities and Limits of Remote Timing Attacks](https://www.usenix.org/legacy/event/sec09/tech/full_papers/crosby.pdf)
- Cryptopals Crypto Challenges: [Challenge 31 (Artificial Timing Leak)](https://cryptopals.com/sets/4/challenges/31) e [Challenge 32 (Realistic Timing Leak)](https://cryptopals.com/sets/4/challenges/32)
- PortSwigger Web Security Academy: [Username enumeration via response timing](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing)
- Artigo no blog: [Timing Attacks na Prática: Da Teoria dos Nanossegundos à Exploração de APIs](https://hertonnn.github.io/blog/timing-attacks/)
