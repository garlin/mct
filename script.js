// Timer 1 Variables
let timer1Running = false;
let timer1Interval;
let timer1Time = 0;
let timer1LabelIndex = 0;
const timer1Labels = [
  "Fifty-Ten",
  "Countdown",
  "Round 1, Exercise 1, Rest",
  "Round 1, Exercise 2, Rest",
  "Round 1, Exercise 3, Rest",
  "Round 1, Exercise 4, Rest",
  "Round 2, Exercise 1, Rest",
  "Round 2, Exercise 2, Rest",
  "Round 2, Exercise 3, Rest",
  "Round 2, Exercise 4, Rest",
  "Round 3, Exercise 1, Rest",
  "Round 3, Exercise 2, Rest",
  "Round 3, Exercise 3, Rest",
  "Round 3, Exercise 4, Rest",
  "Round 4, Exercise 1, Rest",
  "Round 4, Exercise 2, Rest",
  "Round 4, Exercise 3, Rest",
  "Round 4, Exercise 4, Rest",
  "End"
];

// Timer 2 Variables
let timer2Running = false;
let timer2Interval;
let timer2Time = 0;
let timer2LabelIndex = 0;
const timer2Labels = [
  "Tabata",
  "Countdown",
  "Exercise 1, Set 1, Rest",
  "Exercise 1, Set 2, Rest",
  "Exercise 1, Set 3, Rest",
  "Exercise 1, Set 4, Rest",
  "Exercise 1, Set 5, Rest",
  "Exercise 1, Set 6, Rest",
  "Exercise 1, Set 7, Rest",
  "Exercise 1, Set 8, Rest",
  "Exercise 2, Set 1, Rest",
  "Exercise 2, Set 2, Rest",
  "Exercise 2, Set 3, Rest",
  "Exercise 2, Set 4, Rest",
  "Exercise 2, Set 5, Rest",
  "Exercise 2, Set 6, Rest",
  "Exercise 2, Set 7, Rest",
  "Exercise 2, Set 8, Rest",
  "Exercise 3, Set 1, Rest",
  "Exercise 3, Set 2, Rest",
  "Exercise 3, Set 3, Rest",
  "Exercise 3, Set 4, Rest",
  "Exercise 3, Set 5, Rest",
  "Exercise 3, Set 6, Rest",
  "Exercise 3, Set 7, Rest",
  "Exercise 3, Set 8, Rest",
  "Exercise 4, Set 1, Rest",
  "Exercise 4, Set 2, Rest",
  "Exercise 4, Set 3, Rest",
  "Exercise 4, Set 4, Rest",
  "Exercise 4, Set 5, Rest",
  "Exercise 4, Set 6, Rest",
  "Exercise 4, Set 7, Rest",
  "Exercise 4, Set 8, Rest",
  "End"
];

// Timer 3 Variables
let timer3Running = false;
let timer3Interval;
let timer3Time = 0;

// Function to show timer container and hide others
function showTimer(timerContainerId) {
  const timerContainers = document.getElementsByClassName

// Timer 1 logic
// Implement the logic for Timer 1 using JavaScript
// Timer 1 - Interval Timer
const timer1Label = document.getElementById('timer1-label');
const timer1Time = document.getElementById('timer1-time');
const timer1StartBtn = document.getElementById('timer1-start');
const timer1PauseBtn = document.getElementById('timer1-pause');
const timer1ResetBtn = document.getElementById('timer1-reset');

let intervalTimer;
let round = 1;
let exercise = 1;
let roundInProgress = false;

function startTimer1() {
  timer1StartBtn.disabled = true;
  timer1PauseBtn.disabled = false;
  timer1ResetBtn.disabled = true;
  roundInProgress = true;

  countdown(10, () => {
    countdown(50, () => {
      timer1Label.textContent = `Round ${round}, Exercise ${exercise}, Rest`;
      exercise++;
      if (exercise > 4) {
        exercise = 1;
        round++;
        if (round > 4) {
          endTimer1();
          return;
        }
      }
      countdown(10, startTimer1);
    });
  });
}

function pauseTimer1() {
  clearInterval(intervalTimer);
  timer1StartBtn.disabled = false;
  timer1PauseBtn.disabled = true;
}

function resetTimer1() {
  clearInterval(intervalTimer);
  timer1Time.textContent = '0:00';
  timer1Label.textContent = '';
  round = 1;
  exercise = 1;
  roundInProgress = false;
  timer1StartBtn.disabled = false;
  timer1PauseBtn.disabled = true;
  timer1ResetBtn.disabled = true;
}

function endTimer1() {
  clearInterval(intervalTimer);
  timer1Time.textContent = '0:00';
  timer1Label.textContent = 'End';
  roundInProgress = false;
  timer1StartBtn.disabled = false;
  timer1PauseBtn.disabled = true;
  timer1ResetBtn.disabled = false;
}

function countdown(duration, callback) {
  let timer = duration, minutes, seconds;
  intervalTimer = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer1Time.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(intervalTimer);
      callback();
    }
  }, 1000);
}

timer1StartBtn.addEventListener('click', startTimer1);
timer1PauseBtn.addEventListener('click', pauseTimer1);
timer1ResetBtn.addEventListener('click', resetTimer1);
  
// Timer 2 logic
// Implement the logic for Timer 2 using JavaScript
// Timer 2 - Interval Timer
const timer2Label = document.getElementById('timer2-label');
const timer2Time = document.getElementById('timer2-time');
const timer2StartBtn = document.getElementById('timer2-start');
const timer2PauseBtn = document.getElementById('timer2-pause');
const timer2ResetBtn = document.getElementById('timer2-reset');

let intervalTimer2;
let exercise2 = 1;
let set = 1;
let intervalInProgress = false;

function startTimer2() {
  timer2StartBtn.disabled = true;
  timer2PauseBtn.disabled = false;
  timer2ResetBtn.disabled = true;
  intervalInProgress = true;

  countdown(10, () => {
    countdown(20, () => {
      timer2Label.textContent = `Exercise ${exercise2}, Set ${set}, Rest`;
      set++;
      if (set > 8) {
        set = 1;
        exercise2++;
        if (exercise2 > 4) {
          endTimer2();
          return;
        }
      }
      countdown(10, startTimer2);
    });
  });
}

function pauseTimer2() {
  clearInterval(intervalTimer2);
  timer2StartBtn.disabled = false;
  timer2PauseBtn.disabled = true;
}

function resetTimer2() {
  clearInterval(intervalTimer2);
  timer2Time.textContent = '0:00';
  timer2Label.textContent = '';
  exercise2 = 1;
  set = 1;
  intervalInProgress = false;
  timer2StartBtn.disabled = false;
  timer2PauseBtn.disabled = true;
  timer2ResetBtn.disabled = true;
}

function endTimer2() {
  clearInterval(intervalTimer2);
  timer2Time.textContent = '0:00';
  timer2Label.textContent = 'End';
  intervalInProgress = false;
  timer2StartBtn.disabled = false;
  timer2PauseBtn.disabled = true;
  timer2ResetBtn.disabled = false;
}

timer2StartBtn.addEventListener('click', startTimer2);
timer2PauseBtn.addEventListener('click', pauseTimer2);
timer2ResetBtn.addEventListener('click', resetTimer2);
  
// Timer 3 logic
// Implement the logic for Timer 
