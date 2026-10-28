
const flashcards = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets"
  },
  {
    question: "What is JavaScript used for?",
    answer: "Making websites interactive and dynamic."
  },
  {
    question: "What is a variable?",
    answer: "A named container used to store data."
  },
  {
    question: "What is an array?",
    answer: "A collection of values stored in one variable."
  },
  {
    question: "What does DOM stand for?",
    answer: "Document Object Model"
  },
  {
    question: "What is a function?",
    answer: "A reusable block of code that performs a task."
  },
  {
    question: "What is an object in JavaScript?",
    answer: "A collection of properties stored as key-value pairs."
  },
  {
    question: "What does CSS flexbox do?",
    answer: "It helps arrange elements in rows or columns."
  },
  {
    question: "What is responsive web design?",
    answer: "Design that adapts to different screen sizes."
  }
];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const cardNumber = document.getElementById("cardNumber");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const flipBtn = document.getElementById("flipBtn");
const cardContainer = document.getElementById("cardContainer");

function displayCard() {
  const card = flashcards[currentIndex];

  question.textContent = card.question;
  answer.textContent = card.answer;

  const total = flashcards.length;
  const progress = ((currentIndex + 1) / total) * 100;

  cardNumber.textContent =
    `Card ${currentIndex + 1} of ${total}`;

  progressPercent.textContent = `${Math.round(progress)}%`;
  progressFill.style.width = `${progress}%`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === total - 1;

  // Show the question side when changing cards
  flashcard.classList.remove("flipped");
}

function flipCard() {
  flashcard.classList.toggle("flipped");
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    displayCard();
  }
}

function previousCard() {
  if (currentIndex > 0) {
    currentIndex--;
    displayCard();
  }
}

cardContainer.addEventListener("click", flipCard);
flipBtn.addEventListener("click", flipCard);
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", previousCard);

displayCard();
