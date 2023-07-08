const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timerInterval;
let minutes = 0;
let seconds = 0;

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  updateTimer();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timerElement.innerText = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
  return `${minutes}:${padDigits(seconds, 2)}`;
}

function padDigits(number, digits) {
  return String(number).padStart(digits, "0");
}