# 🚀 Lista de Melhorias do Blog

Aqui está o controle de todas as evoluções técnicas, de usabilidade e infraestrutura planejadas para o blog.

## Post

- Um post só sobre as experiências em CGR.

---

## ✅ Feitas (Concluídas)

- **SEO Básico Integrado:** Adicionadas tags `<meta>` (Open Graph, Twitter Cards) e `canonical URL` para melhorar o compartilhamento em redes sociais.
- **Remoção de Tailwind via CDN:** O projeto agora utiliza um build local com purge para gerar um CSS mínimo (~5-10KB), melhorando radicalmente a performance e evitando FOUC (Flash of Unstyled Content).
- **Limpeza de Scripts Duplicados:** Removidas chamadas duplicadas do Tailwind e ícones (Lucide) nos layouts.
- **RSS Feed:** Implementado `jekyll-feed`, gerando automaticamente `/feed.xml` e ativando o auto-discovery nos cabeçalhos HTML.
- **Categorias e Tags Dinâmicas:** A badge hardcoded foi substituída. Agora as categorias e as tags definidas no frontmatter (`[Java, HTML, CSS]`) são lidas dinamicamente e exibidas de forma elegante na interface do post.
- **Tipografia e Legibilidade Refinadas:** 
  - Aumento do espaçamento entre linhas (`line-height: 1.8`) no corpo do texto para leitura longa mais confortável.
  - Ajuste inteligente do tamanho e formato das tags (pills) para mobile, garantindo que ocupem menos espaço visual, além de omiti-las no cabeçalho superior quando visualizado via smartphone.
  - Ajuste da largura do contêiner (padding lateral) para leitura fluida no mobile, garantindo aproveitamento máximo da tela sem encostar fisicamente nas bordas.
  - Otimização das margens verticais ("above the fold") para garantir que o leitor veja o primeiro parágrafo assim que a página carregar no celular, sem precisar rolar a tela.
- **Tempo de Leitura Estimado:** Lógica adicionada para calcular e exibir dinamicamente o tempo de leitura com base no número de palavras do artigo.
- **Correção do Type do Favicon:** O atributo `type` da tag `<link rel="icon">` foi ajustado de forma semântica correta (`image/x-icon`).
- **Sistema de Comentários Integrado:** O blog agora possui o *Giscus* (baseado no GitHub Discussions) ativo no rodapé dos posts, permitindo comentários nativos, sem anúncios e com login via GitHub.
- **Copyright Automático:** Substituído o ano hardcoded no footer ("2024") pela variável dinâmica do Jekyll (`{{ "now" | date: "%Y" }}`), mantendo o rodapé sempre atualizado.
- **Imagens de Capa (`og:image`):** Adicionada uma imagem de fallback global (do início do portfólio) para todas as páginas (index, blog, en e posts). Agora qualquer link compartilhado no WhatsApp/LinkedIn terá um preview visual atraente, mesmo que o post não tenha imagem própria.
- **Internacionalização (i18n) — Correções Estruturais:**
  - Corrigido o highlight do dropdown de idiomas no `en.html` (agora destaca "English" corretamente).
  - Traduzida a label "Idioma" para "Language" no menu mobile do `en.html`.
  - Corrigidos os links quebrados da navbar no `en.html` (`/#home` → `#home`), evitando redirecionamento para a versão em português.
  - Ajustado o link do dropdown de português para usar a raiz (`/`) em vez de `index.html` em todos os arquivos (index, en, layouts).
  - Removido o bloco duplicado de `#mobile-menu` no `en.html`.
  - Removido o Tailwind CDN residual do `en.html`, unificando o CSS com o build local otimizado.
- **Tradução dos Posts do Blog:** Todos os 5 posts foram traduzidos para inglês e salvos em `blog/_posts_en/`, mantendo imagens, links e blocos de código intactos.
- **Blog Bilíngue Integrado:** Posts em inglês agora têm sua própria coleção e listagem em `/en/blog/`. O layout `default.html` do blog foi atualizado para ser sensível ao idioma (usando `page.lang == 'en'`), garantindo que a navegação, labels (HOME, ABOUT) e o botão de troca de idioma mudem para o idioma correspondente do post e os links mantenham o usuário na mesma página ao trocar o idioma.

---

## ⏳ Pendentes (Não Feitas)

- **Refinamentos de UI/UX e Design:**
  - **Call-to-Action Fantasma:** Na seção "Sobre", o título "Você tem Brio?" contém um link para o YouTube, mas visualmente não parece clicável. Adicionar um ícone de 'play' e efeito de hover para aumentar os cliques.
- **Limpeza de Repositório e Performance:**
  - **Nomes de Imagens:** Renomear arquivos não padronizados (`Captura de tela 2025-12-13 105731.png` e `Fundo_Branco_Colorido__RGB.png`) para manter o repositório organizado (ex: `herton-closeup.png`, `udesc-logo.png`).
- **Busca:** Implementar um sistema de busca client-side (via JSON index ou bibliotecas como `lunr.js` / `pagefind`), essencial conforme o número de artigos crescer.
- **Dark/Light Mode:** O blog é exclusivamente escuro no momento. Adicionar um toggle claro/escuro respeitando o `prefers-color-scheme` e com persistência via `localStorage`.
- Tons #f8f0d9 (principal e navbar), #eddec2 (tags)
- **Navegação Entre Posts:** Adicionar links de "Post Anterior" e "Próximo Post" no rodapé dos artigos para reter e engajar o leitor.
- **Cache-Busting no CSS Local:** Adicionar um versionamento dinâmico (ex: `?v={{ site.time | date: '%s' }}`) no link do `style.css` para evitar que leitores recorrentes recebam uma versão antiga cacheada do estilo após alguma atualização de design.
- **Páginas Específicas por Tag:** Embora as tags já sejam visíveis na interface, seria interessante torná-las clicáveis, direcionando para uma página de filtro onde são listados todos os artigos daquela tag específica.

