// Timer 1 - Fifty-Ten
const timer1StartButton = document.getElementById('timer1-start');
const timer1ResetButton = document.getElementById('timer1-reset');
const timer1Label = document.getElementById('timer1-label');
const timer1Time = document.getElementById('timer1-time');

let timer1Interval;
let timer1TimeLeft = 10;
let timer1Round = 0;
let timer1State = 'paused';

function startTimer1() {
  if (timer1State === 'paused') {
    timer1State = 'running';
    timer1StartButton.textContent = 'Pause';
    timer1Interval = setInterval(updateTimer1, 1000);
  } else {
    timer1State = 'paused';
    timer1StartButton.textContent = 'Resume';
    clearInterval(timer1Interval);
  }
}

function resetTimer1() {
  clearInterval(timer1Interval);
  timer1State = 'paused';
  timer1StartButton.textContent = 'Start';
  timer1Label.textContent = 'Countdown';
  timer1Time.textContent = '10';
  timer1TimeLeft = 10;
  timer1Round = 0;
}

function updateTimer1() {
  if (timer1TimeLeft === 0) {
    timer1Round++;
    if (timer1Round > 16) {
      clearInterval(timer1Interval);
      timer1State = 'paused';
      timer1StartButton.textContent = 'Start';
      timer1Label.textContent = 'End';
      return;
    }
    if (timer1Round === 1) {
      timer1Label.textContent = 'Round 1, Exercise 1, Rest';
    } else {
      timer1Label.textContent = `Round ${timer1Round}, Exercise ${timer1Round}, Rest`;
    }
    timer1TimeLeft = 60;
  }

  timer1TimeLeft--;
  timer1Time.textContent = timer1TimeLeft;
}

timer1StartButton.addEventListener('click', startTimer1);
timer1ResetButton.addEventListener('click', resetTimer1);


// Timer 2 - Tabata
const timer2StartButton = document.getElementById('timer2-start');
const timer2ResetButton = document.getElementById('timer2-reset');
const timer2Label = document.getElementById('timer2-label');
const timer2Time = document.getElementById('timer2-time');

let timer2Interval;
let timer2TimeLeft = 10;
let timer2Set = 0;
let timer2State = 'paused';

function startTimer2() {
  if (timer2State === 'paused') {
    timer2State = 'running';
    timer2StartButton.textContent = 'Pause';
    timer2Interval = setInterval(updateTimer2, 1000);
  } else {
    timer2State = 'paused';
    timer2StartButton.textContent = 'Resume';
    clearInterval(timer2Interval);
  }
}

function resetTimer2() {
  clearInterval(timer2Interval);
  timer2State = 'paused';
  timer2StartButton.textContent = 'Start';
  timer2Label.textContent = 'Countdown';
  timer2Time.textContent = '10';
  timer2TimeLeft = 10;
  timer2Set = 0;
}

function updateTimer2() {
  if (timer2TimeLeft === 0) {
    timer2Set++;
    if (timer2Set > 32) {
      clearInterval(timer2Interval);
      timer2State = 'paused';
      timer2StartButton.textContent = 'Start';
      timer2Label.textContent = 'End';
      return;
    }
    const exercise = Math.floor((timer2Set - 1) / 8) + 1;
    const set = (timer2Set - 1) % 8 + 1;
    timer2Label.textContent = `Exercise ${exercise}, Set ${set}, Rest`;
    timer2TimeLeft = 30;
  }

  timer2TimeLeft--;
  timer2Time.textContent = timer2TimeLeft;
}

timer2StartButton.addEventListener('click', startTimer2);
timer2ResetButton.addEventListener('click', resetTimer2);


// Timer 3 - Stopwatch
const timer3StartButton = document.getElementById('timer3-start');
const timer3StopButton = document.getElementById('timer3-stop');
const timer3Label = document.getElementById('timer3-label');

let timer3Interval;
let timer3Time = 0;
let timer3State = 'stopped';

function startTimer3() {
  if (timer3State === 'stopped') {
    timer3State = 'running';
    timer3StartButton.disabled = true;
    timer3Interval = setInterval(updateTimer3, 1000);
  }
}

function stopTimer3() {
  if (timer3State === 'running') {
    timer3State = 'stopped';
    timer3StartButton.disabled = false;
    clearInterval(timer3Interval);
  }
}

function updateTimer3() {
  timer3Time++;
  const seconds = timer3Time % 60;
  const minutes = Math.floor(timer3Time / 60) % 60;
  const hours = Math.floor(timer3Time / 3600);
  timer3Label.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

timer3StartButton.addEventListener('click', startTimer3);
timer3StopButton.addEventListener('click', stopTimer3);