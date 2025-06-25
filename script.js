document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const music = document.getElementById('background-music');
    const muteButton = document.getElementById('mute-button');
    const speechBubble = document.getElementById('speech-bubble');

    const catPhrases = [
        "Хочу кушать...",
        "Окак...",
        "Веришь, нет? Я забыл, когда в последний раз ел.",
        "Мяу?",
        "Интересно, что там, за горизонтом?",
    ];

    // 1. Логика смены дня и ночи при прокрутке
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        if (scrollPercent < 0.4) {
            body.className = 'day';
        } else if (scrollPercent >= 0.4 && scrollPercent < 0.8) {
            body.className = 'sunset';
        } else {
            body.className = 'night';
        }
    });

    // 2. Логика для говорящего кота
    function catSpeaks() {
        // Выбираем случайную фразу
        const phrase = catPhrases[Math.floor(Math.random() * catPhrases.length)];
        speechBubble.textContent = phrase;
        
        // Показываем облачко
        speechBubble.classList.remove('hidden');
        speechBubble.classList.add('visible');

        // Скрываем облачко через 7 секунд
        setTimeout(() => {
            speechBubble.classList.remove('visible');
            speechBubble.classList.add('hidden');
        }, 7000); // Увеличенное время
    }

    // Запускаем речь кота каждые 10-20 секунд
    setInterval(catSpeaks, 10000 + Math.random() * 10000);

    // 3. Управление музыкой
    let musicPlayed = false;
    muteButton.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicPlayed = true;
        } else {
            music.pause();
        }
    });
    
    // Автовоспроизведение при первом действии пользователя
    document.body.addEventListener('click', () => {
        if (!musicPlayed) {
            music.play();
            musicPlayed = true;
        }
    }, { once: true });

});
