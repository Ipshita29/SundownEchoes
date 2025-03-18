document.addEventListener("DOMContentLoaded", () => {
    const playPauseButton = document.getElementById("playPauseButton");
    const music = document.getElementById("music");
    const sun = document.querySelector(".sun");

    let isPlaying = false;

    playPauseButton.addEventListener("click", () => {
        if (isPlaying) {
            music.pause();
            playPauseButton.textContent = "Play Music";
            sun.style.animationPlayState = "paused";
        } else {
            music.play();
            playPauseButton.textContent = "Pause Music";
            sun.style.animationPlayState = "running";
        }
        isPlaying = !isPlaying;
    });

    music.addEventListener("ended", () => {
        playPauseButton.textContent = "Play Music";
        isPlaying = false;
        sun.style.animationPlayState = "paused";
    });
});

