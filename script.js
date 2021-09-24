var questions = [
    {
      question: "1+1",
      choice: ["2", "3"],
      answer: "2",
    },
    {
      question: "1+1",
      choice: ["2", "3"],
      answer: "3"
    },
    {
      question: "Question 3",
      choice: [""],
      answer: "Blah"
    },
  ];


var timeContainer = document.getElementById('time');

var startContainer = document.getElementById('startScreen');

var startButton = document.getElementById('start');

var questionContainer = document.getElementById('questionContainer');

var questionTitle = document.getElementById('question-title');

var choicesContainer = document.getElementById('choices');

var endContainer = document.getElementById('end');

var finalScoreContainer = document.getElementById('finalScore');

var initialsContainer = document.getElementById('initials');

var submitButton = document.getElementById('submit');

var highScoresContainer = document.getElementById('highScores');

var scoresListContainer = document.getElementById('scoresList');

var reloadButton = document.getElementById('reload');

var timerid;
var time = 15;
var index = 0;

function start(){
    //hide the start container
    startContainer.setAttribute('class', 'hide')

    //show the question container
    questionContainer.removeAttribute('class')

    //start timer
timerid=setInterval(function(){
time--;
timeContainer.textContent = time
if(time<=0){
    //gameOver()
}

},1000)

timeContainer.textContent = time

askQuestion()
}

function askQuestion(){
var currentQuestion = questions[index];

//show the first question
questionTitle.textContent = currentQuestion.question;


//create a for loop that takes in the choice array from your questionObj and dynamically create buttons for each choice. 

//then give each button a click event. you want to also move to the next question. 

//on click of answer you need to check if the selected option is correct. If it is wrong you need to subtract time from the clock


//if the last question in the question array has been asked its gameOver(), if not ask the next question. 

}


startButton.onclick = start;