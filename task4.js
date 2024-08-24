document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioPlayer = button.nextElementSibling;
            if (audioPlayer.paused) {
                audioPlayer.play();
                button.textContent = 'Pause Audio';
            } else {
                audioPlayer.pause();
                button.textContent = 'Play Audio';
            }
        });
    });
});
