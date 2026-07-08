let timePassed = 0;
let isPlaying = false;

const feedback = document.getElementById("feedback");
feedback.innerText = "Please guess a number between 1 and 100.";

function beginGame() {
  const guessContainer = document.getElementById('guessContainer')

  const guessInput = document.createElement("input");
  guessInput.id = "guess";

  const submitGuessBtn = document.createElement("button");
  submitGuessBtn.id = "submitGuess";
  submitGuessBtn.innerText = "Guess";

  guessContainer.appendChild(guessInput)
  guessContainer.appendChild(submitGuessBtn)
}

const begin = document
  .getElementById("begin")
  .addEventListener("click", beginGame);
