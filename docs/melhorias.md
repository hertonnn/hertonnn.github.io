# 🚀 Lista de Melhorias do Blog

Aqui está o controle de todas as evoluções técnicas, de usabilidade e infraestrutura planejadas para o blog.

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

---

## ⏳ Pendentes (Não Feitas)

- **Busca:** Implementar um sistema de busca client-side (via JSON index ou bibliotecas como `lunr.js` / `pagefind`), essencial conforme o número de artigos crescer.
- **Dark/Light Mode:** O blog é exclusivamente escuro no momento. Adicionar um toggle claro/escuro respeitando o `prefers-color-scheme` e com persistência via `localStorage`.
- **Navegação Entre Posts:** Adicionar links de "Post Anterior" e "Próximo Post" no rodapé dos artigos para reter e engajar o leitor.
- **Imagens de Capa (`og:image`):** Exibir e configurar globalmente imagens de capa nos metadados para garantir previews visuais atraentes no LinkedIn/Twitter/WhatsApp.
- **Internacionalização (i18n):** O portfólio já suporta inglês e português, mas o blog ainda é mono-idioma. Expandir o suporte para artigos internacionais com detecção de idioma.
- **Cache-Busting no CSS Local:** Adicionar um versionamento dinâmico (ex: `?v={{ site.time | date: '%s' }}`) no link do `style.css` para evitar que leitores recorrentes recebam uma versão antiga cacheada do estilo após alguma atualização de design.
- **Copyright Automático:** Substituir o ano hardcoded no footer ("2024") por uma variável dinâmica do Jekyll (`{{ "now" | date: "%Y" }}`) para manter o rodapé sempre atualizado.
- **Páginas Específicas por Tag:** Embora as tags já sejam visíveis na interface, seria interessante torná-las clicáveis, direcionando para uma página de filtro onde são listados todos os artigos daquela tag específica.
