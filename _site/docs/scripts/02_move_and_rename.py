import os
import shutil

def main():
    base_dir = r"c:\Users\UserOtt\Documents\FACULDADE\hertonnn.github.io"
    
    moves = [
        # Folders
        ("Jogo da vida", "projects/game_of_life"),
        ("surpresa", "projects/surprise"),
        
        # HTML files
        ("api_financas.html", "case_studies/finance_api.html"),
        ("rede_neural.html", "case_studies/neural_network.html"),
        ("sistema_login.html", "case_studies/login_system.html"),
        ("IHC.html", "case_studies/hci_lifecycle.html"),
        ("projetos.html", "case_studies/projects.html"),
        
        # CSS files
        ("IHC.css", "assets/css/IHC.css"),
        ("celular.css", "assets/css/celular.css"),
        ("projetos.css", "assets/css/projetos.css"),
        ("style.css", "assets/css/style.css"),
        ("style_antigo.css", "assets/css/style_antigo.css"),
        ("tablet.css", "assets/css/tablet.css"),
        ("variaiveis.css", "assets/css/variaiveis.css"),
        
        # JS files
        ("IHC.js", "assets/js/IHC.js"),
        ("main.js", "assets/js/main.js"),
        ("script.js", "assets/js/script.js")
    ]
    
    # Image folders
    img_folders = {
        "imag": "assets/images/global",
        "img": "assets/images/global",
        "imagens_projeto1": "assets/images/projects/projeto1",
        "imagens_projeto2": "assets/images/projects/projeto2",
        "imagens_projeto3": "assets/images/projects/projeto3"
    }

    for src, dest in moves:
        src_path = os.path.join(base_dir, src)
        dest_path = os.path.join(base_dir, dest)
        if os.path.exists(src_path):
            shutil.move(src_path, dest_path)
            print(f"Moved: {src} -> {dest}")
            
    for src, dest in img_folders.items():
        src_path = os.path.join(base_dir, src)
        dest_path = os.path.join(base_dir, dest)
        if os.path.exists(src_path):
            os.makedirs(dest_path, exist_ok=True)
            for item in os.listdir(src_path):
                s = os.path.join(src_path, item)
                d = os.path.join(dest_path, item)
                shutil.move(s, d)
            os.rmdir(src_path)
            print(f"Moved contents of {src} -> {dest}")

if __name__ == "__main__":
    main()
