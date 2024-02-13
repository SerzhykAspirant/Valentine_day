document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const raiseCard = () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    };

    const lowerCard = () => {
        card.style.transition = "top 0.5s";
        card.style.top = "0";
    };

    envelope.addEventListener("mouseenter", raiseCard);
    envelope.addEventListener("mouseleave", lowerCard);

    envelope.addEventListener("click", (e) => {
        e.stopPropagation(); // Запобігає розповсюдженню події на батьківські елементи
        raiseCard();

        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    });

    // Додатковий обробник для опускання картки тільки якщо клік відбувся поза конвертом
    document.addEventListener("click", (e) => {
        if (!envelope.contains(e.target)) {
            lowerCard();
        }
    }, true);
});