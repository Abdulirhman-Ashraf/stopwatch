//declare buttons
let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let deleteBtn = document.getElementById("deleteAll");

// declare timer
let minutes = document.querySelector("#minutes");
let sec = document.querySelector("#sec");
let milSec = document.querySelector("#milSec");
// declare list
let list = document.querySelector("#lap-list");
minutesTimer = 0;
secTimer = 0;
milSecTimer = 0;
let interval;
let index = 0;
// BTn function
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
deleteBtn.addEventListener("click", deleteAll);
// startTimer function
function startTimer() {
  interval = setInterval(updateTimer, 10);
  startBtn.disabled = true;
  index++;
  stopBtn.disabled = false;
}
// stopTimer function
function stopTimer() {
  if (milSecTimer === 0 && secTimer === 0 && milSecTimer === 0) {
  } else {
    clearInterval(interval);
    lap();
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
}
// pauseTimer function

function pauseTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}
// resetTimer function
function resetTimer() {
  minutesTimer = 0;
  secTimer = 0;
  milSecTimer = 0;
  display();
  clearInterval(interval);
  startBtn.disabled = false;
}
// display function
function display() {
  minutes.textContent = padTime(minutesTimer);
  sec.textContent = padTime(secTimer);
  milSec.textContent = padTime(milSecTimer);
}
// updateTimer function
function updateTimer() {
  milSecTimer++;
  if (milSecTimer === 100) {
    milSecTimer = 0;
    secTimer++;
    if (secTimer === 60) {
      secTimer = 0;
      minutesTimer++;
    }
  }
  display();
}
// lap function
function lap() {
  list.innerHTML += `
                        <li><span>lap${index}</span> ${padTime(
    minutesTimer
  )} : ${padTime(secTimer)} : ${padTime(milSecTimer)}</li>

    `;
}

//delete All function
function deleteAll() {
  list.innerHTML = `
    
    `;
  index = 0;
  minutesTimer = 0;
  secTimer = 0;
  milSecTimer = 0;
}
// padTime function
function padTime(time) {
  return time.toString().padStart(2, "0");
}
