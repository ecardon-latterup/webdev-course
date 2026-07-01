const names = [];

function addName() {
  const newName = document.getElementById("name");
  console.log(newName.value);
  names.push(newName.value);

  newName.value = ''

  const enteredNames = document.getElementById("enteredNames");
  let numNames = names.length

  if (numNames === 1) {
    enteredNames.innerText = `${numNames} name has been entered.`
  } else {
    enteredNames.innerText = `${numNames} names have been entered.`
  }
}

function displayWinner() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const name = names[randomIndex];

  const winnerField = document.getElementById('winnerDisplay')
  winnerField.innerText = `And the winner is - ${name}!`
}

document.getElementById("addBtn").addEventListener("click", addName);
document.getElementById("winnerBtn").addEventListener("click", displayWinner);
