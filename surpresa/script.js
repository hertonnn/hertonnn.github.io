document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            // Exibir a mensagem de volume após a tela de carregamento desaparecer
            const volumeHint = document.getElementById('volume-hint');
            volumeHint.classList.remove('hidden-message'); // Remove a classe para tornar visível
            volumeHint.style.opacity = '1'; // Faz aparecer suavemente
        }, 500);
    }, 5000);

    // Smooth Scroll
    document.querySelector('.start-btn').addEventListener('click', () => {
        // Tenta reproduzir a música
        if (backgroundMusic) {
            // Reseta o tempo da música
            backgroundMusic.currentTime = 15;
            
            // Tenta reproduzir
            let playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    console.log('Música iniciada com sucesso');
                }).catch(error => {
                    console.error('Erro ao iniciar música:', error);
                    // Tenta novamente após um pequeno delay
                    setTimeout(() => {
                        backgroundMusic.play().catch(e => console.error('Segunda tentativa falhou:', e));
                    }, 1000);
                });
            }
        }
        
        // Esconde a mensagem de volume
        const volumeHint = document.getElementById('volume-hint');
        if (volumeHint) {
            volumeHint.style.opacity = '0';
            volumeHint.addEventListener('transitionend', () => {
                if (volumeHint.style.opacity === '0') {
                    volumeHint.style.display = 'none';
                }
            }, { once: true });
        }
        
        // Rola para a próxima seção
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });

    // Carousel
    const carousel = document.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;
    const autoSlideInterval = 3000; // 3 segundos
    let slideTimer;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function startAutoSlide() {
        // Limpa qualquer timer existente para evitar duplicação
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }, autoSlideInterval);
    }

    // Inicia o auto-slide quando a página carrega
    startAutoSlide();

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideTimer); // Para o auto-slide ao interagir
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
        startAutoSlide(); // Reinicia o auto-slide após a interação
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideTimer); // Para o auto-slide ao interagir
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
        startAutoSlide(); // Reinicia o auto-slide após a interação
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Hearts Animation e nova mensagem
    document.getElementById('love-button').addEventListener('click', () => {
        createHearts();
        playStitchSound();

        const finalMessageText = document.querySelector('.final-text');
        const loveButton = document.getElementById('love-button');
        const surpriseMessage = document.getElementById('surprise-message');

        // Esconder a mensagem antiga e o botão
        finalMessageText.style.opacity = '0';
        loveButton.style.opacity = '0';
        loveButton.style.pointerEvents = 'none'; // Desabilita cliques após o fade out

        // Após a transição, esconde completamente os elementos antigos e mostra a nova mensagem
        setTimeout(() => {
            finalMessageText.style.display = 'none';
            loveButton.style.display = 'none';
            
            // Exibir a nova mensagem surpresa
            surpriseMessage.style.display = 'block'; // Garante que esteja visível
            surpriseMessage.classList.add('visible'); // Adiciona a classe para animar
        }, 800); // Tempo para esperar o fade out da mensagem e botão antigos
    });

    function createHearts() {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    function playStitchSound() {
        const audio = new Audio('resources/stitch-ohana.mp3');
        audio.play().catch(() => {
            console.log('Audio play failed - user interaction required');
        });
    }

    // Declara a variável da música em um escopo mais abrangente para ser acessível
    let backgroundMusic;

    window.onload = function() {
        window.scrollTo(0, 0);
        
        // Inicializa a música
        backgroundMusic = new Audio('resources/musica.mp3');
        backgroundMusic.loop = true;
        backgroundMusic.volume = 0.5;
        backgroundMusic.currentTime = 15;
        
        // Adiciona evento de carregamento da música
        backgroundMusic.addEventListener('canplaythrough', function() {
            console.log('Música carregada e pronta para tocar');
        });

        // Adiciona evento de erro
        backgroundMusic.addEventListener('error', function(e) {
            console.error('Erro ao carregar música:', e);
        });
    };

    // Também adicionar para quando a página for recarregada
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
}); 