document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.Button-menu');
    const menu = document.querySelector('.AppMain-Menu');
    const video = document.getElementById('myVideo');
    const videoContainer = document.querySelector('.video-container');
    
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');

        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });
});