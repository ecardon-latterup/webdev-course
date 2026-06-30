function sendAlert() {
  alert("Oh no!!! You pressed a button!")
}

function addNumbers() {
  const num1 = Number(prompt("Enter a number..."))
  const num2 = Number(prompt("Enter another number..."))

  const sum = num1 + num2
  alert(`${num1} + ${num2} = ${sum}`)
}

function favColor() {
  alert("My favorite color is green.")
}

document.getElementById('alert').addEventListener('click', sendAlert)

document.getElementById('addition').addEventListener('click', addNumbers);

document.getElementById('favColor').addEventListener('click', favColor);