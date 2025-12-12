// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Super Quebrada Honda - Sitio web cargado correctamente');

    // Animación suave al hacer scroll
    const cards = document.querySelectorAll('.pasillo-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // Efecto de parallax suave en el hero
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        const scrolled = window.pageYOffset;
        if (hero && scrolled < 500) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Click en tarjetas de pasillos
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.pasillo-title').textContent;
            console.log(`Navegando a: ${title}`);
            // Aquí se podría agregar navegación a páginas específicas
        });
    });
});