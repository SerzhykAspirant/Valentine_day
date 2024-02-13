document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const toggleCardAndPlayAudio = () => {
        // Піднімає картку
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";

        // Вмикає музику
        const playAudio = () => {
            if (audio.paused) {
                audio.play().catch(e => console.error("Аудіо не відтворюється:", e));
            }
        };

        playAudio();
    };

    const handleClickAndTouch = (e) => {
        e.stopPropagation();
        toggleCardAndPlayAudio();
    };

    envelope.addEventListener("click", handleClickAndTouch);
    envelope.addEventListener("touchstart", handleClickAndTouch);
});