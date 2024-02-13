document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const activateCard = () => {
        // Піднімає картку
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";

        // Вмикає музику
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0; // Якщо вам потрібно починати відтворення з початку кожного разу
            audio.play();
        }
    };

    envelope.addEventListener("mouseenter", activateCard);
    envelope.addEventListener("click", (e) => {
        e.stopPropagation(); // Запобігає розповсюдженню події на батьківські елементи
        activateCard();
    });
});