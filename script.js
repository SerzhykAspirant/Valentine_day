document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const toggleCard = () => {
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";
    };

    const playAudio = () => {
        if (audio.paused) {
            audio.play().catch(error => console.error("Помилка відтворення аудіо:", error));
        }
    };

    envelope.addEventListener("click", (e) => {
        e.stopPropagation(); // Запобігає розповсюдженню події на батьківські елементи
        toggleCard();
        playAudio();
    });
});