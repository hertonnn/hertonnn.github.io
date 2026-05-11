# Walkthrough da Refatoração do Portfólio

Toda a refatoração, tanto *macro* quanto *micro*, foi concluída com sucesso! Os scripts automatizados rodaram no seu diretório para garantir que a transição ocorresse de maneira consistente, sem quebrar os caminhos dos recursos.

## O que mudou?

### 1. Macrorefatoração: Nova Estrutura de Pastas
Seu repositório agora tem uma arquitetura profissional e altamente escalável para crescimento:

*   **`assets/`**: Todas as suas imagens, CSS e JavaScript foram extraídos e organizados aqui.
    *   `assets/images/global/` agora abriga o conteúdo que estava em `img/` e `imag/`.
    *   `assets/images/projects/` unifica suas antigas pastas `imagens_projeto1`, `2` e `3`.
*   **`projects/`**: Projetos estáticos puramente Front-End.
    *   O `Jogo da vida` foi movido e renomeado para `projects/game_of_life/`.
    *   A pasta `surpresa` foi movida para `projects/surprise/`.
*   **`case_studies/`**: Seus HTMLs antigos de documentação (`rede_neural.html`, `api_financas.html`, etc.) foram movidos para cá com nomes em inglês (`neural_network.html`, `finance_api.html`, etc.).

### 2. Microrefatoração: Extração de Código "Intuxado"
Criamos e rodamos o script `04_extract_inline_code.py`. Ele varreu suas antigas páginas de projeto e moveu blocos gigantes de `<style>` e `<script>` embutidos no HTML para os respectivos arquivos separados em `assets/css/` e `assets/js/`. Isso limpará o seu HTML e permitirá o reaproveitamento de estilos.

### 3. Exemplo Prático do Jekyll (A Base do seu Futuro Blog)
Como conversamos, a melhor forma de escalar um blog no GitHub Pages é com o **Jekyll**. Criei a estrutura mínima para você começar a brincar com ele:

*   **`_config.yml`**: Este arquivo atua como o painel de controle do site Jekyll. É nele que configuramos coisas como o título e a URL base.
*   **`_layouts/post.html`**: É aqui que está o "esqueleto" visual de um artigo (HTML, Navbar, `<head>`). Em vez de copiar e colar esse HTML para cada novo post, você escreve apenas uma vez aqui.
*   **`blog/_posts/`** e **`blog/en/_posts/`**: Aqui estão os artigos. Criei um artigo de teste (`2026-05-11-carreira-em-computacao.md`). Repare que é um arquivo `.md` (Markdown), focado 100% na escrita. O GitHub Pages pegará esse texto, colocará dentro do seu `_layouts/post.html`, e gerará a página HTML automaticamente!

> [!TIP]
> Quando você commitar e fizer o `push` para o GitHub, ele magicamente fará a compilação do Jekyll e sua página Markdown de teste estará visível em:
> `https://hertonnn.github.io/blog/carreira-em-computacao/`

## Scripts Criados
Na pasta `docs/scripts/`, você encontrará os 5 scripts em Python que fizeram essa mágica (do `01` ao `05`). Eles ficam lá para registro histórico do que foi feito e como a migração aconteceu.
Você já pode verificar o seu diretório atual para ver a nova arquitetura limpa e pronta para uso!
