const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let intervalId
  return (seconds) => {
    if(intervalId) clearInterval(intervalId)
    intervalId = setInterval(() => {

      const formatted = new Date(seconds * 1000).toISOString().slice(11, 19);
      timerEl.innerHTML = formatted

      seconds -= 1
      
      if(!seconds) clearInterval(intervalId)
    }, 1000)
    
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^0-9\.]/g, '');
  
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});