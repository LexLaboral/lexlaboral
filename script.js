// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header efecto scroll (cambia opacidad/fondo cuando haces scroll)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(14, 77, 146, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #0E4D92 0%, #1a5ba8 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-up, .fade-slide').forEach(el => {
    observer.observe(el);
});

// Cambiar color de borde en las tarjetas de paquetes al pasar el mouse
document.querySelectorAll('.paquete').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderTop = '6px solid #25D366';
    });
    card.addEventListener('mouseleave', function() {
        this.style.borderTop = '6px solid #0E4D92';
    });
});

// Botón de WhatsApp (solo ejemplo para tracking en consola)
const whatsappBtn = document.querySelector('.whatsapp-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', function () {
        console.log('WhatsApp button clicked');
    });
}

// Menú hamburguesa para móviles
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinks.classList.toggle("show");
        toggle.classList.toggle("active");
    });

    document.addEventListener("click", () => {
        navLinks.classList.remove("show");
        toggle.classList.remove("active");
    });

    navLinks.addEventListener("click", (e) => {
        e.stopPropagation();
    });
}
