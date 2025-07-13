document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.Button-menu');
    const menu = document.querySelector('.AppHeader-Menu');
    
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
});