var clearBtn = document.getElementById("clear");
var highscores = document.getElementById("highscores");
var ol = document.getElementById("ol");

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var newScore = localStorage.getItem("newScore");
  savedScore = [];
  savedScore.push(newScore);

  // (optional) sort highscores by score property in descending order

  // for each score
  for (var i = 0; i < savedScore.length; i++){
      // create li tag for each high score
      var li = document.createElement("li");
      li.innerText = savedScore[i];
      li.setAttribute("savedScore", i);
    // // display on page
      ol.appendChild(li);
  }
};

function clearHighscores() {
  // (and reload)
}

// attache clear event to clear score button
clearBtn.addEventListener('click', function () {
  highscores.value = "";
}, false);

// run printhighscore when page loads
window.onload = printHighscores();