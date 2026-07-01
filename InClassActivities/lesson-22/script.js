const fruits = ["banana", "cherry", "cantalope", "strawberry", "mango"];

function generateFruit() {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  const fruit = fruits[randomIndex];

  const output = document.getElementById('fruitDisplay');
  output.innerText = fruit
}

document.getElementById('btn').addEventListener('click', generateFruit)