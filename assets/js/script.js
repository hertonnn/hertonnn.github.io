// --- CONFIG: TECH LINKS ---
const repoLinks = {
    "POO": "https://github.com/hertonnn/UDESC-Computacao/tree/master/POO%20-%20Programa%C3%A7%C3%A3o%20Orientada%20a%20Objetos",
    "BAN1": "https://github.com/hertonnn/UDESC-Computacao/tree/master/BAN1%20-%20Banco%20de%20Dados%20I",
    "LFA": "https://github.com/hertonnn/UDESC-Computacao/tree/master/LFA%20-%20Linguagens%20Formais%20de%20Aut%C3%B4matos",
    "EDA2": "https://github.com/hertonnn/UDESC-Computacao/tree/master/EDA%20II%20-%20Estrutura%20de%20Dados%202",
    "TEC": "https://github.com/hertonnn/UDESC-Computacao/tree/master/TEC%20-%20Teoria%20da%20Computa%C3%A7%C3%A3o",
    "COM": "https://github.com/hertonnn/UDESC-Computacao/tree/master/COM%20-%20Compiladores"
};


// --- DATA: PROJECTS ---
const projectsPt = [
    {
        title: "Far.IA Agent",
        category: "Generative AI & LLM Agents",
        description: "Estágio Ottimizza - Agente autônomo para extração contábil complexa.",
        tech: ["Python", "LangChain", "OpenAI API", "Vector DB"],
        type: "dev",
        link: "https://www.linkedin.com/in/herton-silveira-70509a243",
        image: "assets/images/global/WhatsApp Image 2025-11-13 at 10.12.05.jpeg"
    },
    {
        title: "JusDigital — Front-End & IA",
        category: "Full-Stack & Generative AI",
        description: "Interface web completa para o Sistema Jurídico + API com IA que traduz linguagem natural em SQL e gera resumos processuais usando LLM local (Ollama).",
        tech: ["HTML", "CSS", "JavaScript", "FastAPI", "Ollama"],
        type: "dev",
        link: "blog/SistemaJuridico-FrontEnd-IA/",
        image: "assets/images/projects/projeto4/index_arte.jpg"
    },
    {
        title: "Iris Flower Dataset, grafos e métricas de Machine Learning",
        category: "Data Science & Algorithms",
        description: "Implementação de clustering baseado em grafos (em C) aplicada ao dataset Iris, com análise crítica de métricas.",
        tech: ["Python", "C", "Matplotlib", "TEC"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/TEG%20-%20Teoria%20dos%20Grafos/Trabalhos/Grafo%20%C3%8Dris",
        image: "assets/images/global/project-cover-1.png"
    },
    {
        title: "Descomplicando um Compilador!",
        category: "Compiler Design & Engineering",
        description: "Desenvolvimento de um compilador em Haskell para geração de bytecodes JVM. Engenharia de linguagens na prática.",
        tech: ["Haskell", "Java", "Shell", "Jasmim", "COM"],
        type: "research",
        link: "https://github.com/hertonnn/Compilador-Java",
        image: "https://optim.tildacdn.net/tild6638-3234-4266-b630-646530643738/-/resize/760x/-/format/webp/compiler.jpg.webp"
    },
    {
        title: "Ciclo de Vida em Estrela",
        category: "Human-Computer Interaction",
        description: "Trabalho da disciplina IHC - Interação Humano Computador sobre o Ciclo de Vida em Estrela, validada com o professor e colegas de turma.",
        tech: ["HTML", "CSS", "JavaScript", "IHC"],
        type: "research",
        link: "https://hertonnn.github.io/case_studies/hci_lifecycle",
        image: "assets/images/global/ihc_estrela.png"
    },
    {
        title: "API Finance",
        category: "Software Architecture",
        description: "Aplicação desktop robusta para gestão financeira, aplicando rigorosos padrões de POO e persistência PostgreSQL.",
        tech: ["Java", "PostgreSQL", "POO"],
        type: "dev",
        link: "https://www.youtube.com/watch?v=W3SZnzQo-sg&t=79s",
        image: "assets/images/global/Thunb_projeto3.png"
    },
    {
        title: "Modelagem de sistema de trânsito utilizando autômatos",
        category: "Simulation & Modeling",
        description: "Simulação de tráfego complexo via Autômatos Finitos e com Pilha, modelando fluxos e estados de cruzamentos.",
        tech: ["Python", "POO", "LFA"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/LFA%20-%20Linguagens%20Formais%20de%20Aut%C3%B4matos/Trabalho%20final/Simula%C3%A7%C3%A3o-Tr%C3%A2nsito-2024",
        image: "assets/images/global/project-cover-2.png"
    },
    {
        title: "Sistema Jurídico",
        category: "Backend & Database Architecture",
        description: "Sistema centralizado para gestão de dados jurídicos, otimizando o fluxo documental com backend Java e SQL.",
        tech: ["Java", "PostgreSQL", "BAN1"],
        type: "dev",
        link: "https://hertonnn.github.io/blog/SistemaJuridico/",
        image: "assets/images/global/project-cover-3.png"
    },
    {
        title: "Complexidade algorítmica de operações em árvores",
        category: "Advanced Data Structures & Analysis",
        description: "Análise comparativa de performance e Big-O entre árvores AVL, Rubro-Negra e B em operações de manipulação.",
        tech: ["Python", "Matplotlib", "EDA2"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/EDA%20II%20-%20Estrutura%20de%20Dados%202/Trabalho%20Final",
        image: "assets/images/global/project-cover-4.png"
    },
    {
        title: "Programação de Redes Neurais aplicada a jogos",
        category: "Basic Learning IA",
        description: "Meu primeiro projeto envolvendo Redes Neurais Artificiais. Escrevi do zero, treinei e apliquei no jogo Pong.",
        tech: ["Python", "Matplotlib", "Numpy", "Pygame"],
        type: "dev",
        link: "case_studies/neural_network.html",
        image: "assets/images/global/Thunb_Projeto1.png"
    },
    {
        title: "Sistema Login",
        category: "Basic Learning",
        description: "Meu primeiro projeto 🥺. Sistema Login em Python, com uma interface gráfica e conexão ao banco de dados MySQL.",
        tech: ["Python", "MySQL", "Tkinter"],
        type: "dev",
        link: "case_studies/login_system.html",
        image: "assets/images/projects/projeto1/Interface.png"
    }
];

const projectsEn = [
    {
        title: "Far.IA Agent",
        category: "Generative AI & LLM Agents",
        description: "Ottimizza Internship - Autonomous agent for complex accounting extraction.",
        tech: ["Python", "LangChain", "OpenAI API", "Vector DB"],
        type: "dev",
        link: "https://www.linkedin.com/in/herton-silveira-70509a243",
        image: "assets/images/global/WhatsApp Image 2025-11-13 at 10.12.05.jpeg"
    },
    {
        title: "JusDigital — Front-End & AI",
        category: "Full-Stack & Generative AI",
        description: "Full web interface for the Legal System + AI-powered API that translates natural language into SQL and generates case summaries using a local LLM (Ollama).",
        tech: ["HTML", "CSS", "JavaScript", "FastAPI", "Ollama"],
        type: "dev",
        link: "/en/blog/SistemaJuridico-FrontEnd-IA/",
        image: "assets/images/projects/projeto4/index_arte.jpg"
    },
    {
        title: "Iris Flower Dataset, graphs and ML metrics",
        category: "Data Science & Algorithms",
        description: "Implementation of graph-based clustering (in C) applied to the Iris dataset, with critical analysis of metrics.",
        tech: ["Python", "C", "Matplotlib", "TEC"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/TEG%20-%20Teoria%20dos%20Grafos/Trabalhos/Grafo%20%C3%8Dris",
        image: "assets/images/global/project-cover-1.png"
    },
    {
        title: "Uncomplicating a Compiler!",
        category: "Compiler Design & Engineering",
        description: "Development of a compiler in Haskell for generating JVM bytecodes. Language engineering in practice.",
        tech: ["Haskell", "Java", "Shell", "Jasmim", "COM"],
        type: "research",
        link: "https://github.com/hertonnn/Compilador-Java",
        image: "https://optim.tildacdn.net/tild6638-3234-4266-b630-646530643738/-/resize/760x/-/format/webp/compiler.jpg.webp"
    },
    {
        title: "Star Lifecycle",
        category: "Human-Computer Interaction",
        description: "Work for the HCI - Human-Computer Interaction course about the Star Lifecycle, validated with the professor and classmates.",
        tech: ["HTML", "CSS", "JavaScript", "IHC"],
        type: "research",
        link: "https://hertonnn.github.io/case_studies/hci_lifecycle",
        image: "assets/images/global/ihc_estrela.png"
    },
    {
        title: "Finance API",
        category: "Software Architecture",
        description: "Robust desktop application for financial management, applying strict OOP patterns and PostgreSQL persistence.",
        tech: ["Java", "PostgreSQL", "POO"],
        type: "dev",
        link: "https://www.youtube.com/watch?v=W3SZnzQo-sg&t=79s",
        image: "assets/images/global/Thunb_projeto3.png"
    },
    {
        title: "Traffic system modeling using automata",
        category: "Simulation & Modeling",
        description: "Simulation of complex traffic via Finite and Pushdown Automata, modeling flows and intersection states.",
        tech: ["Python", "POO", "LFA"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/LFA%20-%20Linguagens%20Formais%20de%20Aut%C3%B4matos/Trabalho%20final/Simula%C3%A7%C3%A3o-Tr%C3%A2nsito-2024",
        image: "assets/images/global/project-cover-2.png"
    },
    {
        title: "Legal System",
        category: "Backend & Database Architecture",
        description: "Centralized system for legal data management, optimizing the document flow with a Java and SQL backend.",
        tech: ["Java", "PostgreSQL", "BAN1"],
        type: "dev",
        link: "https://hertonnn.github.io/en/blog/SistemaJuridico/",
        image: "assets/images/global/project-cover-3.png"
    },
    {
        title: "Algorithmic complexity of tree operations",
        category: "Advanced Data Structures & Analysis",
        description: "Comparative performance and Big-O analysis between AVL, Red-Black and B trees in manipulation operations.",
        tech: ["Python", "Matplotlib", "EDA2"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/main/EDA%20II%20-%20Estrutura%20de%20Dados%202/Trabalho%20Final",
        image: "assets/images/global/project-cover-4.png"
    },
    {
        title: "Neural Network Programming applied to games",
        category: "Basic Learning IA",
        description: "My first project involving Artificial Neural Networks. I wrote it from scratch, trained it and applied it to the game Pong.",
        tech: ["Python", "Matplotlib", "Numpy", "Pygame"],
        type: "dev",
        link: "case_studies/neural_network.html",
        image: "assets/images/global/Thunb_Projeto1.png"
    },
    {
        title: "Login System",
        category: "Basic Learning",
        description: "My first project 🥺. Login System in Python, with a graphical interface and MySQL database connection.",
        tech: ["Python", "MySQL", "Tkinter"],
        type: "dev",
        link: "case_studies/login_system.html",
        image: "assets/images/projects/projeto1/Interface.png"
    }
];

const isEnglish = document.documentElement.lang === 'en';
const projects = isEnglish ? projectsEn : projectsPt;

// --- DOM ELEMENTS ---
const navbar = document.getElementById('navbar');
const projectsGrid = document.getElementById('projects-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// --- NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-slate-800', 'py-4');
        navbar.classList.remove('bg-transparent', 'py-6');
    } else {
        navbar.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'shadow-lg', 'border-b', 'border-slate-800', 'py-4');
        navbar.classList.add('bg-transparent', 'py-6');
    }
});

// --- RENDER PROJECTS FUNCTION ---
function renderProjects(filterType) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = ''; // Clear existing content

    const filtered = projects.filter(p => filterType === 'all' || p.type === filterType);

    filtered.forEach(project => {
        // Create Card Element
        const card = document.createElement('div');
        card.className = "group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all hover:shadow-2xl hover:shadow-orange-900/20";

        // Badge Icon Logic
        const badgeIcon = project.type === 'research' ? 'book-open' : 'cpu';
        const badgeText = project.type === 'research' ? (isEnglish ? 'Research' : 'Pesquisa') : 'Dev';
        const badgeColor = project.type === 'research' ? 'bg-blue-600/90' : 'bg-orange-600/90';

        // --- NOVA LÓGICA DO PIN ---
        // Cria o HTML do pin se o status for 'pin', caso contrário deixa vazio
        const pinHtml = project.status === 'pin'
            ? `<span class="bg-orange-400 text-white text-xs px-2 py-1 rounded backdrop-blur flex items-center gap-1 shadow-sm">
                 <i data-lucide="pin" class="w-3 h-3 fill-white"></i>
               </span>`
            : '';

        // Tech Stack HTML (Lógica Atualizada)
        const techStackHtml = project.tech.map(t => {
            // Verifica se existe um link definido para essa tecnologia
            const link = repoLinks[t];

            // Classes originais mantidas
            const baseClass = "text-xs bg-slate-900 text-slate-300 px-2 py-1 rounded border border-slate-700";

            if (link) {
                // Se tiver link: Renderiza <a> com as mesmas classes visuais + hover effect
                return `<a href="${link}" target="_blank" class="${baseClass} hover:border-orange-500 hover:text-white transition-colors cursor-pointer decoration-0">${t}</a>`;
            } else {
                // Se não tiver link: Mantém o <span> original exato
                return `<span class="${baseClass}">${t}</span>`;
            }
        }).join('');

        card.innerHTML = `
            <div class="h-48 overflow-hidden relative">
                <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                <div class="absolute top-4 right-4 z-20 flex gap-2">
                    ${pinHtml} <span class="${badgeColor} text-white text-xs px-2 py-1 rounded backdrop-blur flex items-center gap-1">
                        <i data-lucide="${badgeIcon}" class="w-3 h-3"></i> ${badgeText}
                    </span>
                </div>
            </div>

            <div class="p-6">
                <div class="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-2">${project.category}</div>
                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">${project.title}</h3>
                <p class="text-slate-400 text-sm mb-6 line-clamp-6">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-6">
                    ${techStackHtml}
                </div>

                <a href="${project.link || '#'}" target="_blank" class="inline-flex items-center text-sm font-bold text-white hover:text-orange-500 transition-colors">
                    ${isEnglish ? 'View Details' : 'Ver Detalhes'} <i data-lucide="external-link" class="w-3 h-3 ml-2"></i>
                </a>
            </div>
        `;

        // Torna o card inteiro clicável, ignorando links aninhados
        card.classList.add('cursor-pointer');
        card.addEventListener('click', (e) => {
            if (!e.target.closest('a') && project.link && project.link !== '#') {
                window.open(project.link, '_blank');
            }
        });

        projectsGrid.appendChild(card);
    });

    // Re-initialize icons for newly added elements
    lucide.createIcons();
}

// --- FILTER BUTTON LOGIC ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active classes from all buttons
        filterBtns.forEach(b => {
            b.classList.remove('bg-orange-600', 'text-white', 'shadow-lg');
            b.classList.add('text-slate-400', 'hover:text-white');
        });

        // Add active class to clicked button
        btn.classList.remove('text-slate-400', 'hover:text-white');
        btn.classList.add('bg-orange-600', 'text-white', 'shadow-lg');

        // Render projects
        renderProjects(btn.dataset.filter);
    });
});

// --- INITIAL RENDER ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof projectsGrid !== 'undefined' && projectsGrid) {
        renderProjects('all'); // Default filter
    }
    renderProjects('all'); // Default filter
    lucide.createIcons(); // Init icons
});


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('main-content');
    const tocList = document.getElementById('toc-list');

    // Se não houver conteúdo ou container do ToC, não faz nada
    if (!content || !tocList) return;

    // 1. Encontra todos os títulos H2 e H3 dentro do conteúdo do post
    const headings = content.querySelectorAll('h2, h3');

    if (headings.length === 0) {
        document.getElementById('toc-container').style.display = 'none';
        return; // Esconde o menu se não houver títulos
    }

    // 2. Constrói a lista do menu lateral
    headings.forEach(heading => {
        // O Jekyll (Kramdown) costuma gerar IDs automaticamente, mas garantimos um aqui caso não tenha
        if (!heading.id) {
            heading.id = heading.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-');
        }

        const li = document.createElement('li');

        // Se for um subtítulo (H3), empurra um pouco para a direita (como na sua imagem)
        if (heading.tagName.toLowerCase() === 'h3') {
            li.classList.add('ml-4');
        }

        const a = document.createElement('a');
        a.href = `#${heading.id}`;
        a.textContent = heading.innerText.replace('#', '').trim();
        // Estilo padrão: cor opaca. Transição suave ao passar o mouse.
        a.className = 'toc-link block hover:text-orange-500 transition-colors duration-300';
        a.dataset.target = heading.id; // Salva a referência para o ScrollSpy

        li.appendChild(a);
        tocList.appendChild(li);
    });

    // 3. Lógica do ScrollSpy (Acender o item ativo)
    const observerOptions = {
        root: null,
        // Configuração crucial: A margem superior negativa faz com que o título 
        // só seja considerado "ativo" quando passar da metade superior da tela.
        rootMargin: '0px 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tira o destaque de todos os links
                document.querySelectorAll('.toc-link').forEach(link => {
                    link.classList.remove('text-orange-500', 'font-bold');
                    link.classList.add('text-slate-400');
                });

                // Dá destaque ao link correspondente ao título que está na tela
                const activeLink = document.querySelector(`.toc-link[data-target="${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.remove('text-slate-400');
                    activeLink.classList.add('text-orange-500', 'font-bold');
                }
            }
        });
    }, observerOptions);

    // Coloca o "olheiro" em todos os títulos
    headings.forEach(h => observer.observe(h));
});
