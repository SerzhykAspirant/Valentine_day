document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.querySelector('.envelope');
    const card = document.querySelector(".card");
    const audio = document.getElementById('myAudio');

    const toggleCardAndPlayAudio = () => {
        // Піднімає картку
        card.style.transition = "top 0.5s";
        card.style.top = "-90px";

        // Вмикає музику
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
            audio.play();
        }
    };

    // Обробник для кліку та сенсорного натискання
    const handleClickAndTouch = (e) => {
        e.stopPropagation(); // Запобігає розповсюдженню події на батьківські елементи
        toggleCardAndPlayAudio();
    };

    envelope.addEventListener("click", handleClickAndTouch);
    envelope.addEventListener("touchstart", handleClickAndTouch);

    // Додатковий обробник для опускання картки може бути доданий, якщо потрібно
});