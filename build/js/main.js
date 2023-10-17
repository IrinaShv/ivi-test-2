// DOM элементы
const elementContainer = document.querySelector('.container');
const timerElement = document.querySelector('.diamond');
const timerTextElement = document.querySelector('.diamond__text');

// переменная, хранящая интервал
let timerLoop;

// Обработчики событий :
// * запуск таймера при клике на кнопку
timerElement.addEventListener('click', initCountdown, { once: true });

// * меняем цвет фона при наведении на кнопку
['mouseover', 'touchstart'].forEach(event => timerElement.addEventListener(event, () => elementContainer.classList.add('container_highlight')));
['mouseout', 'touchend'].forEach(event => timerElement.addEventListener(event, () => elementContainer.classList.remove('container_highlight')));

// функция, инициирующая первый запуск таймера
function initCountdown() { 
    startCountdown(timerTextElement); 
    timerElement.disabled = true; 
}

// функция, запускающая таймер на кнопке и обновляющая значение в ней
function startCountdown(textEl) {
    let currentCount = 1;
    textEl.innerHTML = currentCount;

    const countdown = setInterval(() => {
        currentCount++;
        if (currentCount > 3) {
            clearInterval(countdown);
            textEl.innerHTML = 'Go!';
            startLoop(3);
        } else {
            textEl.innerHTML = currentCount;
        }
    }, 1000);
}

// функция, управляющая интервалом ( останавливаем / запускаем )
function startLoop(count) {
    clearInterval(timerLoop);

    if (!count) return;

    let loopCount = count;
    timerLoop = setInterval(() => {
        loopCount--;
        if (loopCount < 0) {
            clearInterval(timerLoop);
            startCountdown(timerTextElement)
        }
    }, 1000);
}