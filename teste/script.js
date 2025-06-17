// Forçar scroll para o topo quando a página carregar
window.onload = function() {
    window.scrollTo(0, 0);
};

// Também adicionar para quando a página for recarregada
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

document.addEventListener('DOMContentLoaded', () => {
    // Loading Screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 500);
    }, 2000);

    // Smooth Scroll
    document.querySelector('.start-btn').addEventListener('click', () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });

    // Carousel
    const carousel = document.querySelector('.carousel-container');
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateCarousel();
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

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

    // Hearts Animation
    document.getElementById('love-button').addEventListener('click', () => {
        createHearts();
        playStitchSound();
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
}); 