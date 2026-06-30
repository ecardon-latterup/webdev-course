const userAnswer = prompt("If you are running in a race and you pass the runner in 4th place, what place will you be in?")

if (userAnswer === "4th" || userAnswer === "fourth" || userAnswer === "Fourth") {
  alert(`Correct!`)
} else {
  alert('Wrong...')
}