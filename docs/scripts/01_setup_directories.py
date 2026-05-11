import os

def main():
    base_dir = r"c:\Users\UserOtt\Documents\FACULDADE\hertonnn.github.io"
    
    directories = [
        "assets/css",
        "assets/js",
        "assets/images/global",
        "assets/images/projects",
        "projects",
        "case_studies",
        "blog/_posts",
        "blog/en/_posts",
        "_layouts",
        "docs/scripts"
    ]
    
    for d in directories:
        path = os.path.join(base_dir, d)
        os.makedirs(path, exist_ok=True)
        print(f"Created directory: {path}")

if __name__ == "__main__":
    main()
