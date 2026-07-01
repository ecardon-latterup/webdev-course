const animals = ["dog", "cat", "elephant", "lion", "tiger", "bear", "monkey", "zebra", "giraffe", "kangaroo", "panda", "penguin", "dolphin", "whale", "eagle", "wolf", "fox", "deer", "rabbit", "koala", "sloth", "turtle", "frog", "horse", "pig"];

const parentList = document.getElementById('listContainer')

for (let i = 0; i < animals.length; i++) {
  const newAnimal = document.createElement('li')
  newAnimal.innerText = animals[i]
  parentList.appendChild(newAnimal)
}