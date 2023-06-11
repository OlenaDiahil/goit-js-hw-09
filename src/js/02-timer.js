import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];
        
        if (selectedDate <= new Date()) {
            window.alert('Please choose a date in the future');
            startBtn.disabled = true;
        } else {
            startBtn.disabled = false;
            const handleStartClick = () => {
                timerId = setInterval(() => {
                    const currentTime = new Date();
                    const difference = selectedDate - currentTime;
                    if (difference <= 0) {
                        clearInterval(timerId);
                        daysEl.textContent = '00';
                        hoursEl.textContent = '00';
                        minutesEl.textContent = '00';
                        secondsEl.textContent = '00';
                        startBtn.disabled = false;
                    } else {
                        const { days, hours, minutes, seconds } = convertMs(difference);
                        daysEl.textContent = addLeadingZero(days);
                        hoursEl.textContent = addLeadingZero(hours);
                        minutesEl.textContent = addLeadingZero(minutes);
                        secondsEl.textContent = addLeadingZero(seconds);
                    }
                }, 1000);
            }

            startBtn.addEventListener('click', handleStartClick);
        }
    }
};

flatpickr(datetimePicker, options);



