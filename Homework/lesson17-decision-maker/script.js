const userInput = prompt("Do you want to watch an action, a comedy, a thriller, a drama, or a romance?")

let toWatch = ""

if (userInput.toLowerCase() === "action") {
  toWatch = "You should watch Mission Impossible."
} else if (userInput.toLowerCase() === "comedy") {
  toWatch = "You should watch White Chicks."
} else if (userInput.toLowerCase() === "thriller") {
  toWatch = "You should watch A Quiet Place."
} else if (userInput.toLowerCase() === "drama") {
  toWatch = "You should watch Five Feet Apart."
} else if (userInput.toLowerCase() === "romance") {
  toWatch = "You should watch 10 Things I Hate About You."
} else {
  toWatch = "You should probably just watch National Treasure because it is fabulous!"
}

alert(toWatch)