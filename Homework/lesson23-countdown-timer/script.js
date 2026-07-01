function beginCountdown() {
  const countdown = document.getElementById("countdownDisplay");

  const timer = document.getElementById("timerStart");
  const timerValue = Number(timer.value);

  let pause = 0;

  for (let i = timerValue; i >= 0; i--) {
    setTimeout(() => {
      console.log(i);
      countdown.innerText = i;
    }, 1000 * pause);

    pause++;
  }
  timer.value = "";
}

document
  .getElementById("beginCountdown")
  .addEventListener("click", beginCountdown);
