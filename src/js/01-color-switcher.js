function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

const handleStartClick = () => {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = randomColor;
    }, 1000);
}

startBtn.addEventListener('click', handleStartClick);

const handleStopClick = () => {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
}

stopBtn.addEventListener('click', handleStopClick);