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
  getQuestion();
  // show time
  timerEl.textContent = time;  
  // start timer
  timerId = setInterval(clockTick, 1000)
}

function getQuestion() {
  // get current question object from array
  questions[currentQuestionIndex];
  // update title with current question
  console.log(questions)
  console.log(currentQuestionIndex)
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
    score = score + 20;
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
  if (currentQuestionIndex === questions.length - 1){
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
  clearInterval(timerId);
//   // show end screen
  document.getElementById("end-screen").style.display = "block";
//   // show final score
  document.getElementById("final-score").innerText = score;
// console.log(quizEnd)
//   // hide questions section
  document.getElementById("questions").style.display = "none";
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;  
  // check if user ran out of time
  if (time === 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var inputBox = document.getElementById("initials").value;
  // make sure value wasn't empty
  if (inputBox === "") {
    displayMessage("You must add your initials to save your score");
  }
    // get saved scores from localstorage, or if not any, set to empty array 
  var savedScore = localStorage.getItem("savedScore");
  // if (savedS)
  savedScore = [];
  
    // format new score object for current user
    var newScore = {
      // initialsEl: inputBox.trim(),
      score: score.value,
    };
    // save to localstorage
  // localStorage.setItem("inputBox", inputBox);
  // localStorage.setItem("savedScore", savedScore)
  // score.push();
    localStorage.setItem("newScore", newScore)
    

  // Get data
    localStorage.getItem("inputBox");
    localStorage.getItem("newScore");

    // redirect to next page
  window.location.href = "highscores.html";
}


function checkForEnter(event) {
  // check if event key is enter
  if (event.key === "Enter") {
      // saveHighscore
      saveHighscore();
    };
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;










