# hertonnn.github.io

Portfólio pessoal e blog de Herton Silveira — Desenvolvedor & Pesquisador Científico.

Criado com a intenção de expor meus projetos.

---

## Rodando localmente

### Pré-requisitos

- [Ruby](https://www.ruby-lang.org/pt/downloads/) (versão 2.7 ou superior)
- [Bundler](https://bundler.io/) (gerenciador de dependências do Ruby)

### Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/hertonnn/hertonnn.github.io.git
   cd hertonnn.github.io
   ```

2. **Instale o Bundler** (caso ainda não tenha):

   ```bash
   gem install bundler
   ```

3. **Instale as dependências do projeto:**

   ```bash
   bundle install
   ```

### Subindo o servidor local

```bash
bundle exec jekyll serve
```

O site estará disponível em: **[http://localhost:4000](http://localhost:4000)**


### Opções úteis

| Comando | Descrição |
|---|---|
| `bundle exec jekyll serve --livereload` | Recarrega o navegador automaticamente ao salvar |
| `bundle exec jekyll serve --port 3000` | Usa uma porta diferente (ex: 3000) |
| `bundle exec jekyll build` | Gera o site estático em `_site/` sem iniciar o servidor |

