// Menu Mobile
const menuBtn = document.querySelector('.menu-mobile');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Scroll Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.add('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
            }
        }
    });
});

// Atualizar ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animação dos cards de objetivo quando aparecem na tela
const objetivoCards = document.querySelectorAll('.objetivo-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

objetivoCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Garantia que o vídeo comece a tocar mesmo em mobile
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video.objetivos-bg');
    
    videos.forEach(video => {
        const playPromise = video.play();
        
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                video.controls = true;
            });
        }
    });
});

function copyPixKey() {
    const pixKey = document.getElementById("pixKey").innerText;
    navigator.clipboard.writeText(pixKey).then(() => {
        const button = document.querySelector("button");
        button.innerHTML = '<i class="fas fa-check"></i> Chave copiada!';
        button.style.backgroundColor = '#1e7e1e';
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-copy"></i> Copiar chave';
            button.style.backgroundColor = '#32CD32';
        }, 2000);
    }).catch(err => {
        alert("Não foi possível copiar. A chave é: (83) 99995-0378" + pixKey);
    });
}