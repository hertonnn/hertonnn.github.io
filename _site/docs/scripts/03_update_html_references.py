import os

def main():
    base_dir = r"c:\Users\UserOtt\Documents\FACULDADE\hertonnn.github.io"
    
    mappings = {
        "api_financas.html": "case_studies/finance_api.html",
        "rede_neural.html": "case_studies/neural_network.html",
        "sistema_login.html": "case_studies/login_system.html",
        "IHC.html": "case_studies/hci_lifecycle.html",
        "projetos.html": "case_studies/projects.html",
        
        "img/": "assets/images/global/",
        "imag/": "assets/images/global/",
        "./imag/": "assets/images/global/",
        "imagens_projeto1/": "assets/images/projects/projeto1/",
        "imagens_projeto2/": "assets/images/projects/projeto2/",
        "imagens_projeto3/": "assets/images/projects/projeto3/",
        
        "style.css": "assets/css/style.css",
        "style_antigo.css": "assets/css/style_antigo.css",
        "projetos.css": "assets/css/projetos.css",
        "celular.css": "assets/css/celular.css",
        "tablet.css": "assets/css/tablet.css",
        "variaiveis.css": "assets/css/variaiveis.css",
        "IHC.css": "assets/css/IHC.css",
        
        "script.js": "assets/js/script.js",
        "main.js": "assets/js/main.js",
        "IHC.js": "assets/js/IHC.js"
    }

    target_files = []
    for root, dirs, files in os.walk(base_dir):
        if '.git' in root or 'docs' in root:
            continue
        for file in files:
            if file.endswith(('.html', '.js', '.css')):
                target_files.append(os.path.join(root, file))

    for filepath in target_files:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        rel_path = os.path.relpath(filepath, base_dir)
        # Normalize rel_path to use forward slashes
        rel_path_fwd = rel_path.replace('\\', '/')
        depth = rel_path_fwd.count('/')
        prefix = "../" * depth if depth > 0 else ""

        new_content = content
        
        for old, new in mappings.items():
            if old.endswith('/'):
                new_content = new_content.replace(f'"{old}', f'"{prefix}{new}')
                new_content = new_content.replace(f"'{old}", f"'{prefix}{new}")
                new_content = new_content.replace(f'url({old}', f'url({prefix}{new}')
                new_content = new_content.replace(f'url("{old}', f'url("{prefix}{new}')
                new_content = new_content.replace(f"url('{old}", f"url('{prefix}{new}")
            else:
                new_content = new_content.replace(f'href="{old}"', f'href="{prefix}{new}"')
                new_content = new_content.replace(f"href='{old}'", f"href='{prefix}{new}'")
                new_content = new_content.replace(f'src="{old}"', f'src="{prefix}{new}"')
                new_content = new_content.replace(f"src='{old}'", f"src='{prefix}{new}'")
                new_content = new_content.replace(f'"{old}"', f'"{prefix}{new}"')
                new_content = new_content.replace(f"'{old}'", f"'{prefix}{new}'")

        # Specific for index.html from inside subfolders
        if depth > 0:
            new_content = new_content.replace('href="index.html"', f'href="{prefix}index.html"')
            new_content = new_content.replace('href="en.html"', f'href="{prefix}en.html"')

        if content != new_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated references in: {rel_path}")

if __name__ == "__main__":
    main()
