document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    function hideLoader() {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
            content.classList.add('show');
        }, 1000);
    }

    function showLoader() {
        loader.style.display = 'flex';
        loader.classList.remove('fade-out');
    }

    // Simular que el contenido está listo
    setTimeout(hideLoader, 900);

    // Efecto Glitch
    setInterval(() => {
        const glitchOverlay = document.getElementById('vhs-glitch-overlay');
        glitchOverlay.style.animation = 'glitch-effect 3s infinite';
    }, 3000);

    // Pantallazos negros
    setInterval(() => {
        const blackFlash = document.getElementById('black-flash');
        blackFlash.style.opacity = Math.random() > 0.9 ? '1' : '0';
    }, 10000);

    // Mostrar imágenes aleatorias
    const images = [
        'Img1.PNG',
        'Img2.PNG',
        'Img3.PNG',
        'Img4.PNG',
        'Img5.PNG',
        'Img6.PNG'
    ];

    function showRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = document.getElementById('random-image');
        randomImage.src = images[randomIndex];

        const imageOverlay = document.getElementById('random-image-overlay');
        imageOverlay.style.opacity = '1';

        setTimeout(() => {
            imageOverlay.style.opacity = '0';
        }, 700); // Duración de la aparición de la imagen
    }

    setInterval(showRandomImage, 4000); // Cambia cada 15 segundos
});