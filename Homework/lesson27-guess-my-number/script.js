const begin = document.getElementById("begin");
const guessContainer = document.getElementById("guessContainer");
const guessInput = document.getElementById("guess");
const guessBtn = document.getElementById("submitGuess");
const guessFeedback = document.getElementById("guessFeedback");
const resetBtn = document.getElementById("resetBtn");
const timerDisplay = document.getElementById("timerDisplay");
const guesses = document.getElementById("guesses");
const previousGuesses = document.getElementById("previousGuesses");

let guessList = [];

let timerInterval = null;
let timePassed = 0;
let randomNumber = null;

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function checkGuess() {
  guessFeedback.classList.remove("hidden");
  previousGuesses.classList.remove("hidden");

  const userGuess = Number(guessInput.value);

  console.log("User Guess: ", userGuess);

  if (randomNumber === userGuess) {
    guessFeedback.innerText = `You guessed correct!! It was ${userGuess}!! You found the answer in ${formatTime(timePassed)} with ${guessList.length + 1} guesses!`;
    clearInterval(timerInterval);
  } else if (userGuess < randomNumber && userGuess > 0) {
    guessFeedback.innerText = `Your guess of ${userGuess} is too low. Guess again!`;
    guessList.push(`${userGuess} was too low`);
  } else if (userGuess > randomNumber && userGuess <= 100) {
    guessFeedback.innerText = `Your guess of ${userGuess} is too high. Guess again!`;
    guessList.push(`${userGuess} was too high`);
  } else if ( userGuess < 0 || userGuess > 100) {
    guessFeedback.innerText = `Please choose a number between 1 and 100.`;
  }

  guesses.innerHTML = "";

  guessList.forEach((value) => {
    const guessItem = document.createElement("li");
    guessItem.innerText = `${value}`;

    guesses.appendChild(guessItem);
  });

  guessInput.value = "";
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed++;
    console.log("Time Passed: ", timePassed);
    timerDisplay.innerHTML = formatTime(timePassed);
  }, 1000);
}

function beginGame() {
  begin.classList.add("hidden");
  guessContainer.classList.remove("hidden");
  resetBtn.classList.remove("hidden");

  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random Number: ", randomNumber);

  isPlaying = true;
  // checkGuess()
  startTimer();
}

function reset() {
  guessFeedback.classList.add("hidden");
  previousGuesses.classList.add("hidden");
  timePassed = 0;
  timerInterval = null;
  guessList = [];
  beginGame();
}

begin.addEventListener("click", beginGame);
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", reset);
