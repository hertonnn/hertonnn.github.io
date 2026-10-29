---
layout: post
title: "JusDigital: Interface Web e IA com Linguagem Natural"
date: 2026-08-18 11:00:00 -0300
categories: [projeto]
tags: [Java, HTML, CSS, JavaScript, FastAPI, LLM, Ollama, IA, PostgreSQL]
image: assets/images/projects/projeto4/index_arte.jpg
---

Há um tempo atrás, [escrevi no meu blog](https://hertonnn.github.io/blog/SistemaJuridico/) a respeito de um projeto que nasceu de uma disciplina de Banco de Dados na UDESC. Naquele post, eu cobri a parte que talvez seja a menos glamourosa, mas sem dúvida a mais importante de qualquer sistema: a **modelagem relacional**. Tabelas, chaves, cardinalidades, gatilhos. O alicerce invisível que segura tudo de pé.

Agora é hora de contar o que veio depois.

Se no primeiro post o assunto era "como organizar dados jurídicos num banco relacional", neste aqui a pergunta é diferente: **como um ser humano normal interage com esses dados?** Porque não adianta ter o banco mais bem modelado do mundo se o usuário final precisa abrir um terminal e digitar SQL para descobrir o status de um processo.

Este post cobre duas frentes que completam o sistema:

1. **Uma interface web** pensada para ser limpa, navegável e útil — chamada JusDigital.
2. **Uma API com IA** que traduz linguagem natural em SQL, e que gera resumos processuais compreensíveis para qualquer pessoa.

Vamos por partes.

---

## A Interface: JusDigital

### A decisão de ir para a web

O projeto original tinha uma interface de linha de comando (CLI) com menu numerado — aquele estilo clássico de projeto acadêmico. Funcionava, mas era o tipo de coisa que só quem desenvolveu consegue usar sem perder a paciência.

A alternativa óbvia seria um frontend web, e foi exatamente o que fizemos. **HTML puro, CSS puro, JavaScript vanilla.** O servidor? O próprio `com.sun.net.httpserver.HttpServer` que já vem embutido no Java.

O resultado é que quando você roda `java -jar Run.jar` e digita `20` no menu, o servidor sobe na porta 8081 e você acessa `http://localhost:8081/` no navegador. Sem instalação de nada além do Java.

### A arquitetura do front

O front-end é composto por **13 páginas HTML** que se comunicam com o servidor Java via `fetch()`. Não tem SPA, não tem routing do lado do cliente. Cada página é um arquivo `.html` independente que faz suas próprias requisições e renderiza o resultado com manipulação direta do DOM.

A estrutura:

```
src/view/
├── style.css                    # Design system completo
├── auth.js                      # Módulo de sessão (localStorage)
├── index.html                   # Landing page + busca global
├── login.html                   # Autenticação
├── cadastro.html                # Registro de usuários
├── processos.html               # Tabela de processos
├── visualizar_processo.html     # Detalhe + resumo por IA
├── busca.html                   # Busca unificada
├── advogados.html               # Catálogo de advogados
├── perfil_advogado.html         # Perfil individual
├── jurisprudencia.html          # Base de leis
├── acordao.html                 # Detalhe de lei + processos que a citam
├── diarios.html                 # Diários oficiais (DJe)
└── modelos.html                 # Modelos de petições
```

É muito código? Não. Cada arquivo tem entre 70 e 200 linhas. Sem build step, sem transpilação. Você abre no bloco de notas e entende.

### Design: o que guiou as decisões visuais

Nos inspiramos bastante no [JusBrasil](https://www.jusbrasil.com.br/) — tanto na organização da informação quanto na experiência de uso. A ideia era criar algo que um profissional da área jurídica já se sentisse familiarizado ao abrir.

A fonte é a **Inter** (Google Fonts), que é basicamente a fonte padrão de qualquer interface que quer parecer profissional sem chamar atenção pra si mesma. As cores seguem uma paleta sóbria: azul institucional (`#1a56db`) como cor primária, cinzas para texto e fundo, e badges de status com semântica visual — verde para concluído, azul para em andamento, amarelo para suspenso.

O CSS usa variáveis `:root` como design system. Nenhuma cor, tamanho de fonte ou espaçamento é hardcoded nos componentes. Tudo referencia tokens. Isso é uma decisão que parece perfumaria até o dia que você precisa mudar o tom de azul do sistema inteiro.

```css
:root {
    --primary-color: #1a56db;
    --text-color: #1f2937;
    --bg-color: #f9fafb;
    /* ... */
}
```


### As telas que importam

**Página inicial** — Uma busca global no topo e três cards de acesso rápido: Processos, Diários Oficiais, e Modelos de Documentos. Sem menu hamburguer, sem sidebar, sem tutorial de onboarding. Você abre e sabe o que fazer.

![Página inicial do JusDigital - hero com busca e cards de acesso rápido](/assets/images/projects/projeto4/index_img.png)

**Autenticação** — Login e cadastro com formulários simples. O back-end Java valida contra uma tabela `Usuario` no banco. A sessão é gerenciada com `localStorage` — quando logado, o botão "Entrar" do header vira "Olá, {nome}" com opção de sair. O `auth.js` roda em todas as páginas no `DOMContentLoaded`.

![Página de login](/assets/images/projects/projeto4/login_img.png)

**Lista de processos** — Uma tabela que consome `/api/processos` e renderiza número, tipo, assunto e status com badges coloridas. Cada linha tem um botão "Visualizar" que leva ao detalhe.
![Lista de processos com badges de status](/assets/images/projects/projeto4/processos_img.png)

**Detalhe do processo** — Essa é a tela mais rica. Mostra o número do processo, a vara, as partes envolvidas (autor, réu), e uma **linha do tempo** com todo o histórico de trâmites. Mas o destaque é a seção "Resumo Inteligente", que conecta o front com a API de IA. Mais sobre isso adiante.
![Detalhe do processo — partes e histórico de trâmites](/assets/images/projects/projeto4/processo1_detalhes.png)
![Gerando resumo inteligente do processo](/assets/images/projects/projeto4/processo1_detalhes_gerando_resumo.png)
![Resumo inteligente gerado pela IA](/assets/images/projects/projeto4/processo1_detalhes_resumo_gerado.png)


**Busca unificada** — A busca da página inicial redireciona para `busca.html?query=...`, que dispara `Promise.all` contra três endpoints (`/api/processos`, `/api/advogados`, `/api/leis`) e filtra os resultados no cliente. É uma busca fulltext bruta — sem Elasticsearch, sem índices especiais. Funciona porque o volume de dados é pequeno, e a simplicidade compensa.

![Busca unificada com resultados de processos, advogados e leis](/assets/images/projects/projeto4/busca_resultados.png)

**Advogados** — Um grid responsivo com cards mostrando nome, OAB e área de atuação. Clicar em "Ver Perfil" leva a uma página com sidebar contendo os dados pessoais e a lista de processos em que o advogado atua.

![Catálogo de advogados em grid](/assets/images/projects/projeto4/advogados_img.png)



**Jurisprudência e Acórdãos** — A página de jurisprudência lista as leis cadastradas. Clicar em uma lei abre a tela de acórdão, que além de mostrar o texto da lei, lista automaticamente todos os processos que a citam — com link direto para cada um.

![Jurisprudência](/assets/images/projects/projeto4/jurisprudencia_img.png)



**Modelos de documentos** — Petições e contratos prontos com um botão "Copiar Texto" que usa a Clipboard API. Copiou? O botão vira "Copiado! ✓" por dois segundos e volta ao normal. Micro-interação simples que faz diferença.

![Modelos de peças judiciais](/assets/images/projects/projeto4/modelos_pecas_judiciais.png)

![Diários eletrônicos](/assets/images/projects/projeto4/diarios_eletronicos.png)
### O servidor por trás: Java puro, sem Spring

O `ServidorWeb.java` é provavelmente a parte mais incomum da stack. Em vez de usar Spring Boot ou Javalin, o servidor HTTP é o `com.sun.net.httpserver.HttpServer` — uma classe que existe no JDK desde o Java 6 e que quase ninguém usa em produção, mas que é perfeita para projetos acadêmicos e protótipos.

O servidor expõe 9 rotas:

| Endpoint | Método | Descrição |
|---|---|---|
| `/` | GET | Serve `index.html` e arquivos estáticos |
| `/api/processos` | GET | Lista todos os processos |
| `/api/processo?id=N` | GET | Detalhe de um processo (partes, trâmites, vara) |
| `/api/advogados` | GET | Lista todos os advogados |
| `/api/advogado?id=N` | GET | Perfil do advogado e seus processos |
| `/api/leis` | GET | Lista todas as leis |
| `/api/lei?id=N` | GET | Detalhe da lei e processos que a citam |
| `/api/login` | POST | Autenticação |
| `/api/cadastro` | POST | Registro de novo usuário |

Cada handler é uma inner class que recebe a `Connection` JDBC no construtor e monta o JSON manualmente com `StringBuilder`. Sim, sem Jackson, sem Gson. Cada campo é escapado na mão. É feio? Um pouco. Funciona? Perfeitamente.

---

## A IA: Quando o Usuário Não Sabe SQL

### O problema real

Vamos ser honestos: o front-end resolve o problema de navegação. Se você quer ver a lista de processos, clica em "Processos". Se quer detalhes, clica em "Visualizar". Mas e quando a pergunta é mais sofisticada?

- *"Quais ações de despejo foram abertas contra o Adriano em 2026?"*
- *"Liste os processos da Fazenda Estadual com valor acima de 50 mil"*
- *"Resumo do processo 0001234-55.2026.8.26.0001"*

Essas perguntas existem na cabeça do usuário em **linguagem natural**. Para respondê-las, alguém teria que escrever SQL. A ideia da API com IA é eliminar essa tradução manual.

### A stack: FastAPI + LiteLLM + Ollama

A API foi construída em Python com **FastAPI** e roda na porta 8000. A comunicação com o modelo de linguagem usa **LiteLLM** como camada de abstração, o que significa que trocar de provedor (Ollama local → OpenAI → OpenRouter) é questão de mudar uma variável de ambiente.

O modelo padrão é o **Qwen 2.5 (3B)** rodando localmente via **Ollama**. Sim, 3 bilhões de parâmetros. Roda na CPU de um notebook comum. Não é GPT-4, mas para gerar SQL a partir de queries simples, funciona surpreendentemente bem.

```
LLM-Juridica/
├── main.py            # FastAPI, rotas e CORS
├── llm_service.py     # Lógica das 3 camadas de IA
├── prompts.py         # Todos os prompts centralizados
├── schemas.py         # Modelos Pydantic (request/response)
├── config.py          # Settings com Pydantic + .env
├── test_client.py     # Script de testes
└── pyproject.toml     # Dependências (uv)
```

### O pipeline: 3 camadas de IA

Essa é a parte que mais me interessou no desenvolvimento. Em vez de jogar a pergunta do usuário direto para o modelo e torcer para sair um SQL válido, o sistema usa um **pipeline de três estágios**, cada um com seu próprio prompt e responsabilidade:

#### Camada 1 — NER (Reconhecimento de Entidades)

A primeira camada recebe a pergunta em linguagem natural e extrai entidades estruturadas. O modelo retorna um JSON com campos como `tipo_acao`, `autor`, `reu`, `ano`, `numero_processo`, `valor_causa`, `comarca`.

**Prompt (simplificado):**
> "Você é um especialista em extração de entidades jurídicas. Analise a consulta e retorne APENAS um JSON válido. Use null para campos não encontrados."

**Entrada:** `"Ação de despejo do Condomínio Edifício Central contra o Adriano em 2026"`

**Saída:**
```json
{
  "tipo_acao": "despejo",
  "autor": "Condomínio Edifício Central",
  "reu": "Adriano",
  "ano": 2026,
  "numero_processo": null,
  "valor_causa": null,
  "comarca": null,
  "extras": {}
}
```

O parsing da resposta é robusto: usa regex para extrair o bloco `{...}` mesmo se o modelo embrulhar em markdown, e valida contra um schema Pydantic. Se o JSON vier malformado, retorna HTTP 502 com mensagem clara.

#### Camada 2 — Geração de SQL

A segunda camada recebe as entidades extraídas + o schema do banco (opcionalmente enviado pelo cliente) e gera uma query PostgreSQL `SELECT`.

O ponto mais interessante aqui é a **injeção de contexto do banco**. O cliente pode enviar no request um `db_context` com as tabelas, colunas e até dados de exemplo:

```json
{
  "tables": {
    "processos": ["id", "numero_cnj", "tipo_acao", "ano_distribuicao", "autor_id", "reu_id"],
    "partes": ["id", "nome", "cpf_cnpj"]
  },
  "sample_data": {
    "processos": [{"id": 1, "tipo_acao": "despejo", "ano_distribuicao": 2026}]
  }
}
```

Isso faz o modelo usar os **nomes exatos** de tabelas e colunas do banco real, em vez de inventar. É a diferença entre gerar um SQL que roda e um que dá erro de "tabela não encontrada".

**Regras do prompt:**
- Apenas `SELECT` (leitura).
- `ILIKE` para buscas textuais (case-insensitive).
- `JOIN` entre tabelas relacionadas.
- `LIMIT 100` sempre.

#### Camada 3 — Resumo Jurídico

A terceira camada é independente das duas primeiras. Ela recebe dados brutos de um processo (número, vara, partes, trâmites) e gera um **resumo em linguagem acessível** para o público geral.

Essa é a camada que o front-end do JusDigital consome quando o usuário clica em "Gerar Resumo" na tela de detalhe do processo. O JavaScript coleta todas as informações visíveis na página, formata em texto, e faz um `POST` para `http://localhost:8000/summary`.

### Uma validação básica contra SQL destrutivo

Quando um LLM gera SQL, a pergunta natural é: *"e se ele gerar um DROP TABLE?"*. Implementamos uma validação simples com regex em `llm_service.py`, na função `validate_sql_safety()`:

```python
_DANGEROUS_PATTERN = re.compile(
    r"\b(DROP|DELETE|UPDATE|INSERT|TRUNCATE|ALTER|CREATE|GRANT|REVOKE|EXEC|EXECUTE)\b",
    re.IGNORECASE,
)

def validate_sql_safety(sql: str) -> None:
    if not _SELECT_START_PATTERN.match(sql):
        raise HTTPException(status_code=422, detail="Query não começa com SELECT")
    match = _DANGEROUS_PATTERN.search(sql)
    if match:
        raise HTTPException(status_code=422, detail=f"Palavra proibida: {match.group()}")
```

Duas checagens básicas:
1. A query **deve** começar com `SELECT`.
2. A query **não pode** conter nenhuma das 11 palavras destrutivas.

Se qualquer uma falhar, a API retorna HTTP 422 e a query nunca chega ao banco. Não é uma solução robusta de segurança — é uma checagem mínima com regex que, combinada com o prompt que instrui o modelo a gerar apenas `SELECT`, já evita os cenários mais óbvios para o contexto desse projeto.

### Os endpoints

| Endpoint | Método | O que faz |
|---|---|---|
| `/health` | GET | Health check (`{"status": "ok"}`) |
| `/search` | POST | Pipeline NER + SQL Gen. Recebe `query` + `db_context` opcional |
| `/summary` | POST | Resumo jurídico. Recebe `process_data` (texto bruto) |

A documentação automática está em `/docs` (Swagger) e `/redoc`.

### Configuração: troque o modelo em 1 linha

O `config.py` usa `pydantic-settings` com `.env`. Cada camada pode usar um modelo diferente:

```env
NER_MODEL=ollama/qwen2.5:3B
NER_API_BASE=http://localhost:11434

SQL_MODEL=ollama/qwen2.5:3B
SQL_API_BASE=http://localhost:11434

SUMMARY_MODEL=ollama/qwen2.5:3B
SUMMARY_API_BASE=http://localhost:11434
```

Quer usar GPT-4 para a geração de SQL e manter o Ollama local para NER? Muda duas linhas:

```env
SQL_MODEL=gpt-4o
SQL_API_KEY=sk-...
```

O LiteLLM cuida do resto. Sem alterar uma linha de código.

---

## Como Rodar Tudo

### Pré-requisitos

- **Java 17+** (para o servidor web e a API de dados)
- **PostgreSQL** (com o banco `sistema_juridico` configurado)
- **Python 3.12+** (para a API com IA)
- **Ollama** (para rodar o modelo de linguagem localmente)

### 1. Banco de Dados

Garanta que o PostgreSQL está rodando e execute os scripts de criação e população na ordem:

```bash
# Conecte ao PostgreSQL e execute:
psql -U seu_usuario -d sistema_juridico -f refs/Script_BD.sql
psql -U seu_usuario -d sistema_juridico -f refs/PopularBanco.sql
```

### 2. Servidor Web (Java)

```bash
# Compilar (se necessário)
javac -d out src/*.java src/bean/*.java src/controller/*.java src/db/*.java src/model/*.java

# Empacotar
jar cfm Run.jar MANIFEST.MF -C out .

# Rodar
java -jar Run.jar
```

No menu, digite `20` para iniciar o servidor web. Acesse `http://localhost:8081/`.

![Terminal com a opção 20 — servidor web rodando](/assets/images/projects/projeto4/servidor_api_opcao_20.png)

### 3. API com IA

```bash
# Instalar Ollama (se ainda não tem)
# https://ollama.com/download

# Baixar o modelo
ollama pull qwen2.5:3b

# Instalar dependências da API
cd LLM-Juridica
pip install -r requirements.txt
# ou, se usar uv:
uv sync

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o .env se necessário

# Rodar a API
uvicorn main:app --reload
```

A API estará disponível em `http://localhost:8000/`. Documentação Swagger em `http://localhost:8000/docs`.

![Swagger UI da API com IA](/assets/images/projects/projeto4/Swagger_api_local.png)

### 4. Testando a integração Front + IA

Com os dois servidores rodando (Java na 8081 e Python na 8000):

1. Acesse `http://localhost:8081/`
2. Navegue até um processo
3. Clique em "Gerar Resumo"
4. O front faz o request para a API de IA e exibe o resumo processual

![Detalhe do processo (exemplo 2)](/assets/images/projects/projeto4/processo2_detalhes.png)

![Gerando resumo pela IA (exemplo 2)](/assets/images/projects/projeto4/processo2_detalhes_gerando_resumo.png)

![Resumo gerado pela IA (exemplo 2)](/assets/images/projects/projeto4/processo2_detalhes_resumo_gerado.png)

Para testar a API de IA isoladamente:

```bash
cd LLM-Juridica
python test_client.py
```

![Retorno da API — teste 1 (entidades extraídas)](/assets/images/projects/projeto4/retorno_api_teste1.png)

![Retorno da API — teste 2 (SQL gerado)](/assets/images/projects/projeto4/retorno_api_teste2.png)

![Retorno da API — teste 3 (resumo)](/assets/images/projects/projeto4/retorno_api_teste3.png)

---

## Diagrama de Integração

```
┌─────────────────────────────────────────────────────────┐
│                    USUÁRIO (Navegador)                  │
│                  http://localhost:8081                  │
└────────────┬──────────────────────────┬─────────────────┘
             │ fetch("/api/...")        │ fetch("localhost:8000/summary")
             ▼                          ▼
┌────────────────────────┐  ┌──────────────────────────────┐
│   ServidorWeb.java     │  │     FastAPI (LLM-Juridica)   │
│   HttpServer :8081     │  │     Uvicorn :8000            │
│                        │  │                              │
│  ┌─ /api/processos     │  │  ┌─ POST /search             │
│  ├─ /api/processo?id=  │  │  │  ├─ Camada 1: NER         │
│  ├─ /api/advogados     │  │  │  ├─ Camada 2: SQL Gen     │
│  ├─ /api/leis          │  │  │  └─ validate_sql_safety() │
│  ├─ /api/login         │  │  │                           │
│  └─ /api/cadastro      │  │  └─ POST /summary            │
│                        │  │     └─ Camada 3: Resumo      │
└────────────┬───────────┘  └──────────────┬───────────────┘
             │                             │
             ▼                             ▼
┌────────────────────────┐  ┌──────────────────────────────┐
│      PostgreSQL        │  │     Ollama (Qwen 2.5 3B)     │
│   sistema_juridico     │  │     http://localhost:11434   │
└────────────────────────┘  └──────────────────────────────┘
```

---

## O Que Eu Aprendi

Esse projeto começou como uma tarefa de faculdade sobre modelagem relacional e foi crescendo. Cada etapa adicionou uma camada de complexidade, mas também de utilidade real. Algumas reflexões:

**Sobre LLMs para SQL**: O pipeline de dois estágios (NER → SQL) é significativamente mais confiável do que jogar a pergunta direto para o modelo e pedir SQL. A extração de entidades primeiro cria uma representação intermediária estruturada que o segundo estágio usa como input bem definido. É o mesmo princípio de compiladores: tokenizar primeiro, parsear depois.

**Sobre rodar IA localmente**: O Qwen 2.5 3B via Ollama é surpreendentemente capaz para tarefas focadas como geração de SQL. Não precisa de GPU dedicada, não depende de API externa, não tem custo por token. Para prototipagem, é imbatível.

**Sobre segurança de LLMs**: A validação de SQL com regex não é um WAF. Mas a combinação de instruções no prompt ("apenas SELECT") + validação hard-coded no código ("deve começar com SELECT, não pode conter DROP/DELETE/...") cria uma defesa em profundidade razoável para um projeto desse porte.

---

O código completo está disponível no [repositório do GitHub](https://github.com/hertonnn/Sistema-Juridico-BD).

**Disciplina:** Banco de Dados II  
**Instituição:** Universidade do Estado de Santa Catarina (UDESC) - CCT  
**Autores:** Herton Silveira, Arthur Bertoli Silva  
**Ano:** 2025/2026  

<div class="mb-5">
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Java</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>HTML/CSS/JS</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>FastAPI</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>LiteLLM</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>Ollama</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>PostgreSQL</strong>
    </span>
    <span class="d-inline-block px-2 py-1 bg-light text-dark rounded small">
        <strong>UDESC</strong>
    </span>
</div>
