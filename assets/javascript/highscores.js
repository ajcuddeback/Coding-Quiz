var highScoresDiv = document.querySelector('.highscores-div');

var initials = localStorage.getItem('initials');
var score = localStorage.getItem('score');

var highScores = document.createElement('h2');
highScores.className = "high-scores"
highScores.textContent = initials + "  Score:  " + score;
highScoresDiv.appendChild(highScores);