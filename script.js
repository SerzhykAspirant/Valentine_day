document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const toggleCard = (isRaised) => {
        card.style.transition = "top 0.5s";
        card.style.top = isRaised ? "-90px" : "0";
    };

    envelope.addEventListener("mouseenter", () => toggleCard(true));
    envelope.addEventListener("mouseleave", () => toggleCard(false));

    envelope.addEventListener("click", (e) => {
        e.stopPropagation(); // Запобігає розповсюдженню події на батьківські елементи

        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        }
    });

    document.addEventListener("click", () => toggleCard(false), true);
});