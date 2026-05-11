import os
import re

def main():
    base_dir = r"c:\Users\UserOtt\Documents\FACULDADE\hertonnn.github.io"
    
    # We will search in case_studies mostly
    target_dirs = [
        os.path.join(base_dir, "case_studies"),
        base_dir # for index.html if needed
    ]

    for search_dir in target_dirs:
        if not os.path.exists(search_dir):
            continue
        for file in os.listdir(search_dir):
            if not file.endswith('.html'):
                continue
                
            filepath = os.path.join(search_dir, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            basename = os.path.splitext(file)[0]
            
            # Find inline styles
            style_matches = re.finditer(r'<style>(.*?)</style>', content, re.DOTALL | re.IGNORECASE)
            style_content = ""
            for match in style_matches:
                if len(match.group(1).strip()) > 10: # Only extract if there's substantial code
                    style_content += match.group(1) + "\n"
                    content = content.replace(match.group(0), f'<link rel="stylesheet" href="../assets/css/{basename}_inline.css">')

            if style_content:
                css_path = os.path.join(base_dir, "assets", "css", f"{basename}_inline.css")
                with open(css_path, 'w', encoding='utf-8') as f:
                    f.write(style_content.strip())
                print(f"Extracted inline CSS from {file} -> {css_path}")

            # Find inline scripts (without src attribute)
            script_matches = re.finditer(r'<script(?![^>]*src=)[^>]*>(.*?)</script>', content, re.DOTALL | re.IGNORECASE)
            script_content = ""
            for match in script_matches:
                inner = match.group(1).strip()
                if len(inner) > 10 and "cdn" not in inner and "tailwind" not in inner:
                    script_content += inner + "\n"
                    content = content.replace(match.group(0), f'<script src="../assets/js/{basename}_inline.js"></script>')

            if script_content:
                js_path = os.path.join(base_dir, "assets", "js", f"{basename}_inline.js")
                with open(js_path, 'w', encoding='utf-8') as f:
                    f.write(script_content.strip())
                print(f"Extracted inline JS from {file} -> {js_path}")

            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)

if __name__ == "__main__":
    main()
