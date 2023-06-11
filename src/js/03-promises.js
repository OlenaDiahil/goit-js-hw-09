function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const formEl = document.querySelector('.form');

const handleSubmit = (event) => {
  event.preventDefault()
  const delayInput = document.querySelector('[name="delay"]');
  const stepInput = document.querySelector('[name="step"]');
  const amountInput = document.querySelector('[name="amount"]');
  const delay = +delayInput.value;
  const step = +stepInput.value;
  const amount = +amountInput.value;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

formEl.addEventListener('submit', handleSubmit)

