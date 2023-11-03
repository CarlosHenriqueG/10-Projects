const dataQuiz = [
  {
    question: "Em que ano o PHP foi criado?",
    answers: [
      { text: "1998", correct: false },
      { text: "1995", correct: false },
      { text: "1994", correct: true },
      { text: "1996", correct: false }
    ]
  },
  {
    question: "Quem foi o criador do PHP?",
    answers: [
      { text: "Robert Griesemer", correct: false },
      { text: "Rasmus Lerdof", correct: true },
      { text: "Steve jobs", correct: false },
      { text: "James Gosling", correct: false }
    ]
  },
  {
    question: "O que significa a sigla PHP?",
    answers: [
      { text: "HyperText Markup Language", correct: false },
      { text: "Prototype hyper Processor", correct: false },
      { text: "Processor hypertext", correct: false },
      { text: "Hypertext Preprocessor", correct: true }
    ]
  },
  {
    question: "Qual era o nome antigo do PHP?",
    answers: [
      { text: "Personal Home Page", correct: true },
      { text: "Prompt Home Program", correct: false },
      { text: "Program Home Page", correct: false },
      { text: "Program Hyper processor", correct: false }
    ]
  },
];

const question = document.getElementById('question');
const answerInputs = document.querySelectorAll('.answer');
const answerTexts = document.querySelectorAll('[id$="_text"]');
const submitBtn = document.getElementById('submit');
const scoreDisplay = document.getElementById('score');

let score = 0;
let currentQuiz = 0;

function loadQuiz() {
  const currentDataQuiz = dataQuiz[currentQuiz];
  question.innerText = currentDataQuiz.question;

  for (let i = 0; i < answerTexts.length; i++) {
    answerTexts[i].innerText = currentDataQuiz.answers[i].text;
  }
}
loadQuiz();

submitBtn.addEventListener('click', () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) {
    return;
  }

  const selectedAnswerId = selectedAnswer.id;
  const currentDataQuiz = dataQuiz[currentQuiz];

  const selectedAnswerIndex = ['a', 'b', 'c', 'd'].indexOf(selectedAnswerId);

  if (currentDataQuiz.answers[selectedAnswerIndex].correct) {
    score++;
  }

  currentQuiz++;

  if (currentQuiz < dataQuiz.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>Quiz Finished</h2><p>Your score: ${score}/${dataQuiz.length}</p>`;
  }

  selectedAnswer.checked = false;

  scoreDisplay.innerText = `Score: ${score}`;
});