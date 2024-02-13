document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const body = document.querySelector("body");

    container.addEventListener("mouseenter", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    });

    container.addEventListener("mouseleave", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
    });

    container.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    }, );

    body.addEventListener("click", () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
    }, true);
});
document.addEventListener('DOMContentLoaded', (event) => {
    const envelope = document.querySelector('.envelope');
    const audio = document.getElementById('myAudio');

    envelope.addEventListener('click', (e) => {
        e.stopPropagation();  // Запобігає розповсюдженню події на батьківські елементи
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        }
    });