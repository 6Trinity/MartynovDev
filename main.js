document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.Button-menu');
    const menu = document.querySelector('.AppMain-Menu');
    
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');

        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
});

