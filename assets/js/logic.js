// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;
var score = 0;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var questionTitle = document.getElementById("question-title");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");

function startQuiz() {
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
  // un-hide questions section
  document.getElementById("questions").style.display = "block";
  // start timer
  var timeInterval = setInterval(function() {
  // show starting time
    timerEl.textContent = time;
    time--;
  }, 1000);
  
  getQuestion();
}

function getQuestion() {
  // get current question object from array
  questions[currentQuestionIndex];
  // update title with current question
  questionTitle.innerText = questions[currentQuestionIndex].title;
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++){
    // create new button for each choice
    var answerButton = document.createElement("button");
    answerButton.innerText = questions[currentQuestionIndex].choices[i];
    // attach click event listener to each choice
    answerButton.addEventListener("click", function(e){
      answerClick(e)
    })
    // display on the page
    choicesEl.append(answerButton);
  }
}

function answerClick(event) {
  // console.log(event.target.textContent)
  // check if user guessed correctly 
  if (event.target.textContent === questions[currentQuestionIndex].answer) {
    // play "right" sound effect
    // added to score
    score = score + 10;
  } 

  // if user guessed wrong
  else {
    // penalize time
    time = time - 10;
    // play "wrong" sound effect
  }
  // move to next question
  currentQuestionIndex++;
  // check if we've run out of questions
  if (currentQuestionIndex > currentQuestionIndex){
  // if we have run out of questions call quizEnd function
    quizEnd()
  }
  // if we still have questions call getQuestion functions to reload all questions and choices on page
  else {
    getQuestion()
  }
  // extra
  // flash right/wrong feedback on page for half a second
}

function quizEnd() {
  // stop timer
  clearInterval(timeInterval);
//   // show end screen
  document.getElementById("end-screen").style.display = "block";
//   // show final score

// console.log(quizEnd)
//   // hide questions section
  document.getElementById("questions").style.display = "none";
}

function clockTick() {
  // update time

  // check if user ran out of time
  if (timeEl === 0) {
    alert("You have run out of time! Better luck next time.")
  }
}

function saveHighscore() {
  // get value of input box

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;










// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log"
  }
];