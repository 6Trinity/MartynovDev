document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button-menu');
    const menu = document.querySelector('.appheader-menu-nav');
    const header = document.getElementById('appheader');
    const scrollThreshold = 10;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } 
        else {
            header.classList.remove('scrolled');
        }
    });
    
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
        

        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
});

document.querySelectorAll('.appheader-menu-nav a').forEach(link => {
    link.addEventListener('click', (e) => {

        document.querySelector('.appheader-menu-nav').classList.remove('active');
        document.querySelector('.button-menu').classList.remove('active');

        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});