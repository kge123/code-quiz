var questions = [
  {
    question: "What is a variable in JavaScript?",
    choice: ["A server", "Name of storage location", "A change of plans"],
    answer: "Name of storage location",
  },
  {
    question: "What is CSS?",
    choice: ["Rule based language", "A naval vessel", "A countrys acronym"],
    answer: "Rule based language",
  },
  {
    question: "What does HTML stand for?",
    choice: ["HyperTime Marked Location", "HyperTechnical Marked Location", "HyperText Markup Language"],
    answer: "HyperText Markup Language",
  },
];

var timeContainer = document.getElementById("time");

var startContainer = document.getElementById("startScreen");

var startButton = document.getElementById("start");

var questionContainer = document.getElementById("questionContainer");

var questionTitle = document.getElementById("question-title");

var choicesContainer = document.getElementById("choices");

var endContainer = document.getElementById("end");

var finalScoreContainer = document.getElementById("finalScore");

var initialsContainer = document.getElementById("initials");

var submitButton = document.getElementById("submit");

var highScoresContainer = document.getElementById("highScores");

var scoresListContainer = document.getElementById("scoresList");

var reloadButton = document.getElementById("reload");

var timerid;
var time = 60;
var index = 0;

function start() {
  //hide the start container
  startContainer.setAttribute("class", "hide");

  //show the question container
  questionContainer.removeAttribute("class");

  //start timer
  timerid = setInterval(function () {
    time--;
    timeContainer.textContent = time;
    if (time <= 0) {
      gameOver();
    }
  }, 1000);

  timeContainer.textContent = time;

  askQuestion();
}

function askQuestion() {
  var currentQuestion = questions[index];

  //show the first question
  questionTitle.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";

  //create a for loop that takes in the choice array from your questionObj and dynamically create buttons for each choice.
  for (let index = 0; index < currentQuestion.choice.length; index++) {
    var choicesButton = document.createElement("button");
    choicesButton.setAttribute("class", "btn");
    choicesButton.setAttribute("value", currentQuestion.choice[index]);
    choicesButton.textContent = currentQuestion.choice[index];

    choicesButton.onclick = checkAnswers;

    choicesContainer.append(choicesButton);
  }
  //then give each button a click event. you want to also move to the next question.
  //on click of answer you need to check if the selected option is correct. If it is wrong you need to subtract time from the clock
  //if the last question in the question array has been asked its gameOver(), if not ask the next question.
}
// check answers
function checkAnswers() {
  console.log(this.value);
  if (this.value !== questions[index].answer) {
    time -= 5;

    timeContainer.textContent = time;
    if (time < 0) {
      time = 0;
    }
  }

  index++;

  if (index === questions.length) {
    gameOver();
  } else {
    askQuestion();
  }
}
// game over
function gameOver() {
  clearInterval(timerid);

  questionContainer.setAttribute("class", "hide");

  //show the question container
  endContainer.removeAttribute("class");

  finalScoreContainer.textContent = time;
}

function userScore() {
  var initials = initialsContainer.value;

  var userObj = {
    initials: initials,
    score: time,
  };

  var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

  highScores.push(userObj);
  localStorage.setItem("highscores", JSON.stringify(highScores));
  window.location.href = "highscores.html";
}

// function playAgain(){
//   window.location.href = "index.html";
// }

// reloadButton.onclick = playAgain;

submitButton.onclick = userScore;
startButton.onclick = start;
