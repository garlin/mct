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
  const timerContainers = document.getElementsByClassName("timer-container");
  for (let i = 0; i < timerContainers.length; i++) {
    timerContainers[i].style.display = "none";
  }
  document.getElementById(timerContainerId).style.display = "block";
}

// Function to reset the page to initial state
function resetPage() {
  const timerContainers = document.getElementsByClassName("timer-container");
  for (let i = 0; i < timerContainers.length; i++) {
    timerContainers[i].style.display = "none";
  }
  document.getElementById("timer-buttons").style.display = "block";
}

// Timer Button Click Event Listeners
document.getElementById("timer1-btn").addEventListener("click", function () {
  showTimer("timer1-container");
});
document.getElementById("timer2-btn").addEventListener("click", function () {
  showTimer("timer2-container");
});
document.getElementById("timer3-btn").addEventListener("click", function () {
  showTimer("timer3-container");
});

// New Round Button Click Event Listener
document.getElementById("new-round-btn").addEventListener("click", function () {
  resetPage();
});
