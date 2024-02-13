document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const toggleCard = () => {
        card.style.transition = "top 0.5s";
        card.style.top = card.style.top === "0px" ? "-90px" : "0px";
    };

    envelope.addEventListener("click", (e) => {
        e.stopPropagation(); // запобігає розповсюдженню події на батьківські елементи

        toggleCard();

        // Спроба відтворити аудіо
        if (audio.paused) {
            audio.play().catch(error => console.error("Помилка відтворення аудіо:", error));
        } else {
            audio.currentTime = 0;
        }
    });

    // Додатково: Якщо ви хочете, щоб картка опускалася, коли користувач клікає деінде
    document.addEventListener("click", () => {
        if (card.style.top === "-90px") {
            toggleCard();
        }
    });
});