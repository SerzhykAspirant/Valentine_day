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
    document.addEventListener("DOMContentLoaded", () => {
        const container = document.querySelector(".container");
        const card = document.querySelector(".card");
    
        // Функція для підняття листа
        const raiseCard = () => {
            card.style.transition = "top 0.5s";
            card.style.top = "-90px"; // Відрегулюйте це значення за потреби
        };
    
        // Функція для опускання листа
        const lowerCard = () => {
            card.style.transition = "top 0.5s";
            card.style.top = "0px"; // Відрегулюйте це значення за потреби
        };
    
        container.addEventListener("mouseenter", raiseCard);
        container.addEventListener("mouseleave", lowerCard);
    
        // Додайте обробник події кліку до container
        container.addEventListener("click", raiseCard);
    
        // Якщо вам потрібно опустити лист при кліку на інший елемент,
        // вам потрібно додати обробник події кліку до цього елемента. 
        // Наприклад, клік за межами container:
        // document.addEventListener("click", lowerCard);
    });