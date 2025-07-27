document.addEventListener('DOMContentLoaded', function() {

    const button = document.getElementById('button-menu-header');
    const menu = document.querySelector('.menu-nav');
    const header = document.querySelector('.appsection-appheader');
    const subbutton = document.getElementById('button-submenu-social');
    const submenu = document.querySelector('.submenu-box-nav');
    const scrollThreshold = 10;
    const themeSwitcher = document.querySelector('.theme-switcher');
    const savedTheme = localStorage.getItem('theme') || 'light';

    const toggleBodyScroll = (enable) => {
        document.body.style.overflow = enable ? '' : 'hidden';
    };

    document.documentElement.setAttribute('data-theme', savedTheme);

    themeSwitcher.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const theme = e.target.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
    });
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

    document.querySelectorAll('.menu-nav a').forEach(link => {
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