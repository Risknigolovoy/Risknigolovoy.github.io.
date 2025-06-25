document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');

    // Настройка кнопки включения/выключения музыки
    muteButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });

    // Плавное появление элементов при загрузке
    const container = document.querySelector('.container');
    container.style.opacity = 0;
    setTimeout(() => {
        container.style.transition = 'opacity 1.5s';
        container.style.opacity = 1;
    }, 100);
});
