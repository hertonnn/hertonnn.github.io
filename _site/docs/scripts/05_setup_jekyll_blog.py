import os

def main():
    base_dir = r"c:\Users\UserOtt\Documents\FACULDADE\hertonnn.github.io"
    
    # 1. Create _config.yml
    config_content = """title: Herton Silveira | Blog
description: "Meu espaço para escrever sobre carreira e projetos de computação."
baseurl: ""
url: "https://hertonnn.github.io"
markdown: kramdown
theme: minima
"""
    with open(os.path.join(base_dir, "_config.yml"), 'w', encoding='utf-8') as f:
        f.write(config_content)

    # 2. Create Layout
    layout_content = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>{{ page.title }} | Herton Silveira</title>
    <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body class="bg-slate-950 text-slate-200">
    <nav class="p-6">
        <a href="/" class="text-orange-500 font-bold text-xl">← Voltar para o Portfólio</a>
    </nav>
    <main class="container mx-auto px-6 py-12 max-w-3xl prose prose-invert">
        <h1 class="text-4xl font-bold text-white mb-4">{{ page.title }}</h1>
        <p class="text-slate-400 mb-8">{{ page.date | date: "%d/%m/%Y" }}</p>
        
        {{ content }}
    </main>
</body>
</html>
"""
    with open(os.path.join(base_dir, "_layouts", "post.html"), 'w', encoding='utf-8') as f:
        f.write(layout_content)

    # 3. Create Sample Post in PT
    post_content_pt = """---
layout: post
title: "Como planejo minha carreira em Computação"
date: 2026-05-11
categories: [carreira, computacao]
---

## Olá, mundo!

Este é o meu primeiro artigo utilizando o **Jekyll** no GitHub Pages.
Agora eu posso escrever meus artigos apenas usando Markdown, e o GitHub vai gerar as páginas HTML automaticamente.

### Por que isso é incrível?
- Não preciso duplicar `<head>`, `<body>`, ou a navbar. Tudo fica no `_layouts/post.html`.
- Foco apenas no conteúdo do texto.
- Escalável para 100, 1.000 ou 10.000 artigos.

Bem-vindo ao meu blog!
"""
    with open(os.path.join(base_dir, "blog", "_posts", "2026-05-11-carreira-em-computacao.md"), 'w', encoding='utf-8') as f:
        f.write(post_content_pt)

    # 4. Create Sample Post in EN
    post_content_en = """---
layout: post
title: "How I plan my career in Computer Science"
date: 2026-05-11
categories: [career, computer-science]
---

## Hello, World!

This is my first article using **Jekyll** on GitHub Pages.
Now I can write my articles just using Markdown, and GitHub will generate the HTML pages automatically.

### Why is this awesome?
- I don't need to duplicate `<head>`, `<body>`, or the navbar. Everything is in `_layouts/post.html`.
- I can focus solely on the content.
- Scalable for 100, 1,000, or 10,000 articles.

Welcome to my blog!
"""
    with open(os.path.join(base_dir, "blog", "en", "_posts", "2026-05-11-career-in-computer-science.md"), 'w', encoding='utf-8') as f:
        f.write(post_content_en)
        
    print("Jekyll blog example structure created successfully!")

if __name__ == "__main__":
    main()
