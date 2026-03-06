// Typing Speed Test 

const startState = document.getElementById("startState");
const testState = document.getElementById("testState");
const resultState = document.getElementById("resultState");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const goAgainBtn = document.getElementById("goAgainBtn");

const textBox = document.getElementById("textBox");
const hiddenInput = document.getElementById("hiddenInput");

const wpmEl = document.getElementById("wpm");
const accEl = document.getElementById("accuracy");
const timeEl = document.getElementById("time");

const finalWpmEl = document.getElementById("finalWpm");
const finalAccEl = document.getElementById("finalAcc");
const finalCharsEl = document.getElementById("finalChars");

// 1) Text
const text =
  "The archaeological expedition unearthed artifacts that complicated prevailing theories about Bronze Age trade networks.";

const TEST_SECONDS = 60;

let spans = [];
let index = 0;

let timerId = null;
let secondsLeft = TEST_SECONDS;
let started = false;

let correct = 0;
let wrong = 0;

function showOnly(stateEl) {
  startState.classList.add("hidden");
  testState.classList.add("hidden");
  resultState.classList.add("hidden");
  stateEl.classList.remove("hidden");
}

function formatTime(sec) {
  // 0:60, 0:59 ... 0:00
  return "0:" + String(sec).padStart(2, "0");
}

function renderText() {
  textBox.innerHTML = "";
  spans = [];

  for (let i = 0; i < text.length; i++) {
    const s = document.createElement("span");
    s.className = "ch";
    s.textContent = text[i];
    spans.push(s);
    textBox.appendChild(s);
  }

  if (spans[0]) spans[0].classList.add("current");
}

function resetStats() {
  wpmEl.textContent = "0";
  accEl.textContent = "100%";
  timeEl.textContent = formatTime(TEST_SECONDS);

  finalWpmEl.textContent = "0";
  finalAccEl.textContent = "0%";
  finalCharsEl.textContent = "0/0";
}

function stopTimer() {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  secondsLeft = TEST_SECONDS;
  timeEl.textContent = formatTime(secondsLeft);

  timerId = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = formatTime(secondsLeft);

    if (secondsLeft <= 0) {
      finishTest();
    }
  }, 1000);
}

function setCurrent(i) {
  for (let k = 0; k < spans.length; k++) {
    spans[k].classList.remove("current");
  }
  if (spans[i]) spans[i].classList.add("current");
}

function calcWpm() {
  const elapsedSeconds = TEST_SECONDS - secondsLeft;
  if (elapsedSeconds <= 0) return 0;

  const minutes = elapsedSeconds / 60;
  // classic formula : 5 symbol = 1 word
  return Math.round((correct / 5) / minutes);
}

function calcAccuracy() {
  const total = correct + wrong;
  if (total === 0) return 100;
  return Math.round((correct / total) * 100);
}

function updateStats() {
  wpmEl.textContent = String(calcWpm());
  accEl.textContent = calcAccuracy() + "%";
}

function startTest() {
  started = true;

  index = 0;
  correct = 0;
  wrong = 0;

  resetStats();
  renderText();
  showOnly(testState);

  hiddenInput.value = "";
  hiddenInput.focus();

  startTimer();
}

function finishTest() {
  if (!started) return;
  started = false;

  stopTimer();

  const wpm = calcWpm();
  const acc = calcAccuracy();

  finalWpmEl.textContent = String(wpm);
  finalAccEl.textContent = acc + "%";
  finalCharsEl.textContent = (correct + wrong) + "/" + text.length;

  showOnly(resultState);
}

function handleKey(e) {
  if (!started) return;

  if (e.key === "Backspace") {
    
    return;
  }

  // symbol length = 1
  if (e.key.length !== 1) return;

  if (index >= spans.length) return;

  const expected = text[index];

  if (e.key === expected) {
    spans[index].classList.add("correct");
    correct++;
  } else {
    spans[index].classList.add("wrong");
    wrong++;
  }

  index++;
  setCurrent(index);
  updateStats();

  // if done = finish
  if (index >= spans.length) finishTest();
}

function goAgain() {
  stopTimer();
  started = false;
  resetStats();
  showOnly(startState);
}

// Events
startBtn.addEventListener("click", startTest);
restartBtn.addEventListener("click", startTest);
goAgainBtn.addEventListener("click", goAgain);

// Keybord input
document.addEventListener("keydown", handleKey);

// Init
resetStats();
renderText();
showOnly(startState);