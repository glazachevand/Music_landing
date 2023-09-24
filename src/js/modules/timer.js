export function downTimer() {
  let timerId = null;
  const timer = document.querySelector('.timer');
  const daysEl = timer.querySelector('.timer__days');
  const hoursEl = timer.querySelector('.timer__hours');
  const minutesEl = timer.querySelector('.timer__minutes');
  const secondsEl = timer.querySelector('.timer__seconds');

  // конечная дата
  const deadline = new Date(2023, 10, 1, 15, 0, 0);
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    daysEl.textContent = days < 10 ? '0' + days : days;
    hoursEl.textContent = hours < 10 ? '0' + hours : hours;
    minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
  }
}
