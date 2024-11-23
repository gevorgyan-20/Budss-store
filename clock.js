let intervalId = null;

function updateClock() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  const hourDeg = 30 * (hours % 12) + 0.5 * minutes;
  const minuteDeg = 6 * minutes + 0.1 * seconds;
  const secondDeg = 6 * seconds;

  document.querySelector('.hour').style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.querySelector('.second').style.transform = `rotate(${secondDeg}deg)`;
}

function startClock() {
  if (!intervalId) {
    updateClock();
    intervalId = setInterval(updateClock, 1000);
  }
}

function pauseClock() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

document.getElementById('startButton').addEventListener('click', startClock);
document.getElementById('pauseButton').addEventListener('click', pauseClock);
