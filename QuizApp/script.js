const questions = [
  {
    question: "Who is the largest animal in the world ?",
    answers:[
      {text: "Human", correct: false},
      {text: "Blue whale", correct: true},
      {text: "Shark", correct: false},
      {text: "Elephant", correct: false}
    ]
  },
  {
    question: "Which is the largest desert in the world ?",
    answers:[
      {text: "Kalahari", correct: false},
      {text: "Gobi", correct: false},
      {text: "Shahara", correct: false},
      {text: "Antarctica", correct: true}
    ]
  },
  {
    question: "Which is the smallest continent in the world ?",
    answers:[
      {text: "Asia", correct: false},
      {text: "Arctic", correct: false},
      {text: "Africa", correct: false},
      {text: "Australia", correct: true}
    ]
  },
  {
    question: "Smallest country in the world is-",
    answers:[
      {text: "Vatican city", correct: true},
      {text: "Bangladesh", correct: false},
      {text: "China", correct: false},
      {text: "Afganistan", correct: false}
    ]
  }
];


const question = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton= document.getElementById("next-btn");

let idx = 0;
let score = 0;

function startQuiz(){
  idx = 0; 
  score = 0;
  nextButton.innerHTML = "Next";

  showQuestion();
}


function showQuestion(){
  document.querySelector('.quizTitle').innerHTML = "Quiz Question";


  resetState();

  let curQuestion = questions[idx];
  let questionNo = idx+1;
  question.innerHTML = questionNo + "." + curQuestion.question;

  curQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);

    if(answer.correct){
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  })
} 

function resetState(){
  nextButton.style.display = "none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if(isCorrect){
    selectedButton.classList.add("correct");
    score++;
  }
  else{
    selectedButton.classList.add("incorrect");
  }

  Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct=="true"){
      button.classList.add("correct");
    }
    button.disabled = "true";
  })
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
  if(idx<questions.length){
    handleNextButton();
  }
  else{
    startQuiz();
  }
})

function handleNextButton(){
  idx++;
  if(idx<questions.length){
    showQuestion();
  }
  else{
    showScore();
  }
}

function showScore(){
  document.querySelector('.quizTitle').innerHTML = "Result.";
  resetState();
  question.innerHTML = `Your score is ${score} !`
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}

startQuiz();
