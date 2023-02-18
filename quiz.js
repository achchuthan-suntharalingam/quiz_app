const quizData = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Jupiter", "Saturn", "Uranus"],
    answer: "Jupiter",
  },
  {
    question: "What is the tallest mammal?",
    choices: ["Giraffe", "Elephant", "Hippopotamus"],
    answer: "Giraffe",
  },
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submit");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  questionEl.textContent = quizData[currentQuestion].question;
  choicesEl.innerHTML = "";
  quizData[currentQuestion].choices.forEach((choice) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => {
      if (choice === quizData[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
      } else {
        showScore();
      }
    });
    choicesEl.appendChild(li);
  });
}

function showScore() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  choicesEl.innerHTML = "";
  submitBtn.style.display = "none";
  scoreEl.style.display = "block";
}

loadQuestion();
submitBtn.addEventListener("click", showScore);
