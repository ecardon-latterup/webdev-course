const questions = [
  [
    "Which animal is the largest mammal in the world?",
    "African Elephant",
    "Blue Whale",
    "Giraffe",
    "Hippopotamus",
    "Blue Whale",
  ],
];

let i = 0;

function askQuestion() {
  if (i < questions.length) {
    console.log("Question: ", questions[i]);
    startBtn.style.display = "none";
    quizQuestion.innerText = questions[i][0];
    aA.innerText = questions[i][1];
    aB.innerText = questions[i][2];
    aC.innerText = questions[i][3];
    aD.innerText = questions[i][4];
  }
}

function beginQuiz() {
  const startBtn = document.getElementById("startBtn");
  const quizQuestion = document.getElementById("quizQuestion");
  const aA = document.getElementById("aA");
  const aB = document.getElementById("aB");
  const aC = document.getElementById("aC");
  const aD = document.getElementById("aD");

  askQuestion();
}

document.getElementById("startBtn").addEventListener("click", beginQuiz);

// Which animal is the largest mammal in the world?
// A. African Elephant
// B. Blue Whale ✅
// C. Giraffe
// D. Hippopotamus

// Correct Answer: B. Blue Whale

// What is the fastest land animal?
// A. Lion
// B. Horse
// C. Cheetah ✅
// D. Grey Wolf

// Correct Answer: C. Cheetah

// Which animal is known for changing its color to blend into its surroundings?
// A. Octopus
// B. Chameleon ✅
// C. Gecko
// D. Iguana

// Correct Answer: B. Chameleon

// Which bird is unable to fly?
// A. Eagle
// B. Penguin ✅
// C. Hawk
// D. Falcon

// Correct Answer: B. Penguin

// What do pandas primarily eat?
// A. Fish
// B. Grass
// C. Bamboo ✅
// D. Fruit

// Correct Answer: C. Bamboo

// Which animal is famous for carrying its babies in a pouch?
// A. Rabbit
// B. Kangaroo ✅
// C. Deer
// D. Fox

// Correct Answer: B. Kangaroo

// Which animal is the tallest living animal?
// A. Camel
// B. Ostrich
// C. Giraffe ✅
// D. Moose

// Correct Answer: C. Giraffe

// Which sea creature has eight arms?
// A. Jellyfish
// B. Squid
// C. Starfish
// D. Octopus ✅

// Correct Answer: D. Octopus
