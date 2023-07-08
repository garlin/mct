const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timerInterval;
let timerCount = 0;

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
  timerCount = 0;
  updateTimer();
}

function updateTimer() {
  timerCount++;
  timerElement.innerText = padDigits(timerCount, 3);
}

function padDigits(number, digits) {
  return String(number).padStart(digits, "0");
}