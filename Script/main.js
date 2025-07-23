document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.button-menu');
    const menu = document.querySelector('.appheader-menu-nav');
    const header = document.getElementById('appheader');
    const subbutton = document.getElementById('button-submenu');
    const submenu = document.querySelector('.submenu');
    const scrollThreshold = 10;

    const toggleBodyScroll = (enable) => {
        document.body.style.overflow = enable ? '' : 'hidden';
    };

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    button.addEventListener('click', function() {   
        this.classList.toggle('active');
        menu.classList.toggle('active');
        toggleBodyScroll(!menu.classList.contains('active'));
    });

    subbutton.addEventListener('click', function() {   
        this.classList.toggle('active');
        submenu.classList.toggle('active');
    });

    document.querySelectorAll('.appheader-menu-nav a').forEach(link => {
        link.addEventListener('click', (e) => {

            menu.classList.remove('active');
            button.classList.remove('active');
            toggleBodyScroll(true);

            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});