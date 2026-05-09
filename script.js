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
        image: "img/WhatsApp Image 2025-11-13 at 10.12.05.jpeg" 
    },

    {
        title: "Iris Flower Dataset, grafos e métricas de Machine Learning",
        category: "Data Science & Algorithms",
        description: "Implementação de clustering baseado em grafos (em C) aplicada ao dataset Iris, com análise crítica de métricas.",
        tech: ["Python", "C", "Matplotlib", "TEC"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/48f44e99bb4f739ff70fa2e769810e3a33ac10da/TEG%20-%20Teoria%20dos%20Grafos/Trabalhos/Grafo%20%C3%8Dris",
        image: "img/Gemini_Generated_Image_5tgyd65tgyd65tgy.png"
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
        title: "API Finance",
        category: "Software Architecture",
        description: "Aplicação desktop robusta para gestão financeira, aplicando rigorosos padrões de POO e persistência PostgreSQL.",
        tech: ["Java", "PostgreSQL", "POO"],
        type: "dev",
        link: "https://www.youtube.com/watch?v=W3SZnzQo-sg&t=79s",
        image: "imag/Thunb_projeto3.png"
    },
    {
        title: "Modelagem de sistema de trânsito utilizando autômatos",
        category: "Simulation & Modeling",
        description: "Simulação de tráfego complexo via Autômatos Finitos e com Pilha, modelando fluxos e estados de cruzamentos.",
        tech: ["Python", "POO", "LFA"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/f69d092a873219270d94ab1de8f510da709bd37c/LFA%20-%20Linguagens%20Formais%20de%20Aut%C3%B4matos/Trabalho%20final/Simula%C3%A7%C3%A3o-Tr%C3%A2nsito-2024",
        image: "img/Gemini_Generated_Image_b275s1b275s1b275.png"
    },
    {
        title: "Sistema Jurídico",
        category: "Backend & Database Architecture",
        description: "Sistema centralizado para gestão de dados jurídicos, otimizando o fluxo documental com backend Java e SQL.",
        tech: ["Java", "PostgreSQL", "BAN1"],
        type: "dev",
        link: "https://github.com/hertonnn/Sistema-Juridico-BD",
        image: "img/Gemini_Generated_Image_lnj79ilnj79ilnj7.png"
    },
    {
        title: "Complexidade algorítmica de operações em árvores",
        category: "Advanced Data Structures & Analysis",
        description: "Análise comparativa de performance e Big-O entre árvores AVL, Rubro-Negra e B em operações de manipulação.",
        tech: ["Python", "Matplotlib", "EDA2"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/285d32a6088c53ad5143f2d941b4fedf65ad44f7/EDA%20II%20-%20Estrutura%20de%20Dados%202/Trabalho%20Final",
        image: "img/Gemini_Generated_Image_7gwhuc7gwhuc7gwh.png"
    },
    {
        title: "Programação de Redes Neurais aplicada a jogos",
        category: "Basic Learning IA",
        description: "Meu primeiro projeto envolvendo Redes Neurais Artificiais. Escrevi do zero, treinei e apliquei no jogo Pong.",
        tech: ["Python", "Matplotlib", "Numpy", "Pygame"],
        type: "dev",
        link: "rede_neural.html",
        image: "imag/Thunb_Projeto1.png"
    },
    {
        title: "Sistema Login",
        category: "Basic Learning",
        description: "Meu primeiro projeto 🥺. Sistema Login em Python, com uma interface gráfica e conexão ao banco de dados MySQL.",
        tech: ["Python", "MySQL", "Tkinter"],
        type: "dev",
        link: "sistema_login.html",
        image: "imagens_projeto1/Interface.png"
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
        image: "img/WhatsApp Image 2025-11-13 at 10.12.05.jpeg" 
    },
    {
        title: "Iris Flower Dataset, graphs and ML metrics",
        category: "Data Science & Algorithms",
        description: "Implementation of graph-based clustering (in C) applied to the Iris dataset, with critical analysis of metrics.",
        tech: ["Python", "C", "Matplotlib", "TEC"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/48f44e99bb4f739ff70fa2e769810e3a33ac10da/TEG%20-%20Teoria%20dos%20Grafos/Trabalhos/Grafo%20%C3%8Dris",
        image: "img/Gemini_Generated_Image_5tgyd65tgyd65tgy.png"
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
        title: "Finance API",
        category: "Software Architecture",
        description: "Robust desktop application for financial management, applying strict OOP patterns and PostgreSQL persistence.",
        tech: ["Java", "PostgreSQL", "POO"],
        type: "dev",
        link: "https://www.youtube.com/watch?v=W3SZnzQo-sg&t=79s",
        image: "imag/Thunb_projeto3.png"
    },
    {
        title: "Traffic system modeling using automata",
        category: "Simulation & Modeling",
        description: "Simulation of complex traffic via Finite and Pushdown Automata, modeling flows and intersection states.",
        tech: ["Python", "POO", "LFA"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/f69d092a873219270d94ab1de8f510da709bd37c/LFA%20-%20Linguagens%20Formais%20de%20Aut%C3%B4matos/Trabalho%20final/Simula%C3%A7%C3%A3o-Tr%C3%A2nsito-2024",
        image: "img/Gemini_Generated_Image_b275s1b275s1b275.png"
    },
    {
        title: "Legal System",
        category: "Backend & Database Architecture",
        description: "Centralized system for legal data management, optimizing the document flow with a Java and SQL backend.",
        tech: ["Java", "PostgreSQL", "BAN1"],
        type: "dev",
        link: "https://github.com/hertonnn/Sistema-Juridico-BD",
        image: "img/Gemini_Generated_Image_lnj79ilnj79ilnj7.png"
    },
    {
        title: "Algorithmic complexity of tree operations",
        category: "Advanced Data Structures & Analysis",
        description: "Comparative performance and Big-O analysis between AVL, Red-Black and B trees in manipulation operations.",
        tech: ["Python", "Matplotlib", "EDA2"],
        type: "research",
        link: "https://github.com/hertonnn/UDESC-Computacao/tree/285d32a6088c53ad5143f2d941b4fedf65ad44f7/EDA%20II%20-%20Estrutura%20de%20Dados%202/Trabalho%20Final",
        image: "img/Gemini_Generated_Image_7gwhuc7gwhuc7gwh.png"
    },
    {
        title: "Neural Network Programming applied to games",
        category: "Basic Learning IA",
        description: "My first project involving Artificial Neural Networks. I wrote it from scratch, trained it and applied it to the game Pong.",
        tech: ["Python", "Matplotlib", "Numpy", "Pygame"],
        type: "dev",
        link: "rede_neural.html",
        image: "imag/Thunb_Projeto1.png"
    },
    {
        title: "Login System",
        category: "Basic Learning",
        description: "My first project 🥺. Login System in Python, with a graphical interface and MySQL database connection.",
        tech: ["Python", "MySQL", "Tkinter"],
        type: "dev",
        link: "sistema_login.html",
        image: "imagens_projeto1/Interface.png"
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
    renderProjects('all'); // Default filter
    lucide.createIcons(); // Init icons
});
