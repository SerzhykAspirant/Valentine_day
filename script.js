document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const playAudio = () => {
        if (audio.paused) {
            audio.play().catch(error => console.error("Помилка відтворення аудіо:", error));
        }
    };

    const toggleCard = () => {
        const currentTop = card.style.top;
        card.style.transition = "top 0.5s";
        card.style.top = currentTop === "0px" || currentTop === "" ? "-90px" : "0px";
    };

    envelope.addEventListener("click", () => {
        toggleCard();
        playAudio();
    });
});