const questions = [
  [
    "Which animal is the largest mammal in the world?",
    "African Elephant",
    "Blue Whale",
    "Giraffe",
    "Hippopotamus",
    "Blue Whale",
  ],
  [
    "Which is the fastest land animal?",
    "Lion",
    "Horse",
    "Cheetah",
    "Gray Wolf",
    "Cheetah",
  ],
  [
    "Which animal is known for changing its color to blend into its surroundings?",
    "Octopus",
    "Chameleon",
    "Gecko",
    "Iguana",
    "Chameleon",
  ],
  [
    "Which bird is unable to fly?",
    "Penguin",
    "Eagle",
    "Hawk",
    "Falcon",
    "Penguin",
  ],
  [
    "What do pandas primarily eat?",
    "Fish",
    "Grass",
    "Bamboo",
    "Fruit",
    "Bamboo",
  ],
  [
    "Which animal is famous for carrying its babies in a pouch?",
    "Rabbit",
    "Kangaroo",
    "Deer",
    "Fox",
    "Kangaroo",
  ],
  [
    "Which animal is the tallest living animal?",
    "Camel",
    "Ostrich",
    "Moose",
    "Giraffe",
    "Giraffe",
  ],
  [
    "Which sea creature has eight arms?",
    "Octopus",
    "Jellyfish",
    "Squid",
    "Starfish",
    "Octopus",
  ],
];

let i = 0;
let score = 0;
let answer = "";

function checkAnswer(e) {
  console.log("Answer: ", e.target.innerText);
  let feedback = document.getElementById("feedback");

  if (e.target.innerText === answer) {
    console.log("Correct");
    score += 10;

    const scoreDisplay = document.getElementById("score");
    scoreDisplay.innerText = `Score: ${score}`;
    feedback.style.color = "green";
    feedback.innerText = `${e.target.innerText} is correct!`;
    setTimeout(function () {
      feedback.style.color = "#3b3b3b";
      feedback.innerText = "";
      i++;
      askQuestion();
    }, 3000);
  } else {
    console.log("Wrong");
    feedback.style.color = "red";
    feedback.innerText = `${e.target.innerText} is incorrect! The correct answer is ${answer}.`;
    setTimeout(function () {
      feedback.style.color = "#3b3b3b";
      feedback.innerText = "";
      i++;
      askQuestion();
    }, 3000);
  }

}

function askQuestion() {
  if (i < questions.length) {
    console.log("Question: ", questions[i]);
    startBtn.style.display = "none";
    quizQuestion.innerText = questions[i][0];
    aA.innerText = questions[i][1];
    aB.innerText = questions[i][2];
    aC.innerText = questions[i][3];
    aD.innerText = questions[i][4];
    answer = questions[i][5];

    document.getElementById("aA").addEventListener("click", checkAnswer);
    document.getElementById("aB").addEventListener("click", checkAnswer);
    document.getElementById("aC").addEventListener("click", checkAnswer);
    document.getElementById("aD").addEventListener("click", checkAnswer);
  } else {
    quiz.style.display = "none";
    feedback.style.fontSize = "1.5rem";

    if (score >= 70) {
      feedback.innerText = `Great job! You scored ${score} / ${questions.length * 10} points.`;
      feedback.style.textShadow = "0px 3px 10px green";
    } else if (score >= 40) {
      feedback.innerText = `You did okay! You scored ${score} / ${questions.length * 10} points.`;
    } else {
      feedback.innerText = `You need to brush up on your animal facts! You scored ${score} / ${questions.length * 10} points.`;
      feedback.style.textShadow = "0px 3px 10px red";
    }
  }
}

function beginQuiz() {
  const startBtn = document.getElementById("startBtn");
  const quizQuestion = document.getElementById("quizQuestion");
  const gameTitle = document.getElementById("gameTitle");
  const quiz = document.getElementById("quiz");
  const aA = document.getElementById("aA");
  const aB = document.getElementById("aB");
  const aC = document.getElementById("aC");
  const aD = document.getElementById("aD");

  gameTitle.style.display = "none";
  quiz.style.visibility = "visible";
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
