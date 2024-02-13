document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const raiseCard = () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    };

    envelope.addEventListener("mouseenter", () => {
        raiseCard();
        if (audio.paused) {
            audio.play();
        }
    });

    envelope.addEventListener("click", () => {
        raiseCard();
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});