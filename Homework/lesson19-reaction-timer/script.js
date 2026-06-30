let clickCount = 0;
let timer = 10;
let countdownInterval = null;

function startCountdown() {
  if (countdownInterval !== null) {
    return
  }

  countdownInterval = setInterval(() => {
    timer--
  }, 1000)
}

function addAPress() {
  if (timer === 10) {
    startCountdown()
    clickCount++;
  } else if (timer > 0) {
    clickCount++;
    console.log(clickCount);
    console.log(timer);
  } else {
    alert(`You clicked the button ${clickCount} times in 10 seconds.`);
    clearInterval(countdownInterval);
    clickCount = 0;
    timer = 10;
    countdownInterval = null
  }
}

document.getElementById("pressMe").addEventListener("click", addAPress);
