# Laboratório Prático: Timing Attacks & Side-Channel

Este repositório contém um ambiente laboratorial executável demonstrando como variações no tempo de resposta (*Side-Channel Timing Attacks*) permitem que um invasor reconstrua segredos criptográficos (como API keys, tokens de autenticação e assinaturas HMAC) sem necessidade de força bruta tradicional.

---

## 1. Arquivos do Laboratório

- **`vulnerable_api.py`**: Servidor HTTP em Python (`http://127.0.0.1:8000/verify`) que implementa comparação insegura com saída prematura (*early-exit*).
- **`exploit.py`**: Script de exploração automatizado que mede latências, aplica filtragem por mínimo (`min`) e *early-stop* adaptativo para reconstruir o segredo caractere a caractere.
- **`secure_api.py`**: Servidor protegido (`http://127.0.0.1:8001/verify`) utilizando comparação em tempo constante (`secrets.compare_digest`), mitigando integralmente o vazamento.

---

## 2. Como Executar

### Pré-requisitos
- Python 3.8+ (apenas biblioteca padrão: `http.server`, `urllib`, `time`, `secrets`, `json`).

### Passo 1: Iniciar a API Vulnerável
Em um terminal:
```bash
python vulnerable_api.py
```
O servidor ficará escutando em `http://127.0.0.1:8000/verify`.

### Passo 2: Disparar o Exploit
Em um segundo terminal:
```bash
python exploit.py
```
O script executará em duas etapas:
1. **Fase 1 (Comprimento):** Testa tamanhos de 1 a 16 e identifica que o segredo possui 13 caracteres.
2. **Fase 2 (Extração):** Descobre cada caractere em tempo real observando os saltos temporais, reconstruindo o token `FLAG_SEC_2026` em menos de 1 minuto!

### Passo 3: Testar a Mitigação em Tempo Constante
Inicie a versão segura:
```bash
python secure_api.py
```
O servidor seguro roda em `http://127.0.0.1:8001/verify`. Apontando o `exploit.py` para a porta `8001`, o ataque falhará integralmente, pois todas as respostas levam rigorosamente o mesmo tempo.

---

## 3. Fundamentação Teórica e a Convenção Didática do Cryptopals

Para manter o rigor técnico, é importante compreender o papel dos parâmetros de delay (`BASE_DELAY = 4ms` e `CHAR_DELAY = 8ms`) presentes em `vulnerable_api.py`:

> **A Convenção Didática:**  
> A inserção de uma pausa proporcional por caractere replica o padrão de treinamento da indústria estabelecido no **[Cryptopals Crypto Challenges — Challenge 31: "Implement and break HMAC-SHA1 with an artificial timing leak"](https://cryptopals.com/sets/4/challenges/31)** e no **[Cryptopals Challenge 32: "Break HMAC-SHA1 with a less artificial timing leak"](https://cryptopals.com/sets/4/challenges/32)**.

### Por que usar essa abordagem em laboratório?
1. **Viabilidade Didática Local:** Em uma comparação pura de strings em memória (`memcmp`), a diferença é de frações de nanossegundos. Vencer o ruído do escalonador do SO para uma string pura exigiria coletar centenas de milhares de amostras por requisição. A calibração didática permite comprovar a lógica algorítmica do ataque em segundos no seu computador.
2. **Representação de Operações Pesadas Reais:** Em aplicações de produção, timing attacks raramente visam um `memcmp` isolado; eles exploram operações que naturalmente consomem milissegundos, como validação de hashes de senha, consultas a banco de dados e operações de criptografia assimétrica.

---

## 4. Escalas de Medição: Nanossegundos vs. Microssegundos vs. Milissegundos

A viabilidade prática de um Timing Attack depende diretamente da posição do atacante em relação ao alvo:

| Nível / Ambiente | Diferença Temporal ($\Delta t$) | Nível de Ruído (*Jitter*) | Viabilidade Prática | Como é Explorado? |
| :--- | :--- | :--- | :--- | :--- |
| **Local (CPU / Hardware)** | **0.3 ns a 10 ns** | Quase nulo (~1 ciclo) | **Totalmente viável** | Instrução assembly `RDTSC`/`RDTSCP` (lê ciclos de clock). Base de ataques como **Spectre** e **Meltdown** (diferencia cache L1 de RAM). Motivou navegadores a reduzirem a precisão do `performance.now()`. |
| **Rede Local (LAN)** | **1 µs a 50 µs** | Médio (10 µs a 100 µs) | **Viável com estatística** | Demonstração clássica de Brumley & Boneh (2003) no OpenSSL. Pela Lei dos Grandes Números ($\sigma / \sqrt{N}$), dezenas de milhares de amostras anulam o jitter de pacotes da rede. |
| **Internet Pública (WAN)** | **Nanossegundos (String pura)** | Elevado (5 ms a 50 ms) | **Complexo, mas Possível** | Exige maior volume amostral e filtros estatísticos para extrair o sinal do jitter, como provado por Crosby et al. (2009). Em ambientes de nuvem (mesma região/VPC), a latência cai para < 1 ms e a exploração torna-se direta. |
| **Internet Pública (WAN)** | **Milissegundos (Crypto / Hashes)** | Baixo relativo | **Altamente Viável** | O sinal supera o ruído da internet. Exemplo: enumeração de usuários por tempo de resposta em hashes de senha ([PortSwigger Web Security Academy Lab](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing)). |

---

## 5. Referências e Leituras Recomendadas

- **Paul Kocher (1996):** [Timing Attacks on Implementations of Diffie-Hellman, RSA, DSS, and Other Systems](https://www.paulkocher.com/doc/TimingAttacks.pdf)
- **David Brumley & Dan Boneh (2003):** [Remote Timing Attacks are Practical (OpenSSL RSA)](https://crypto.stanford.edu/~dabo/papers/ssl-timing.pdf)
- **Scott Crosby, Dan Wallach & Rudolf Riedi (2009):** [Opportunities and Limits of Remote Timing Attacks](https://www.usenix.org/legacy/event/sec09/tech/full_papers/crosby.pdf)
- **Cryptopals Crypto Challenges:** [Challenge 31 (Artificial Timing Leak)](https://cryptopals.com/sets/4/challenges/31) & [Challenge 32 (Realistic Timing Leak)](https://cryptopals.com/sets/4/challenges/32)
- **PortSwigger Web Security Academy:** [Username enumeration via response timing](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-response-timing)
- **Artigo Completo no Blog:** [Timing Attacks na Prática: Da Teoria dos Nanossegundos à Exploração de APIs](https://hertonnn.github.io/blog/timing-attacks/)
