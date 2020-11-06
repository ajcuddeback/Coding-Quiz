var highScoresDiv = document.querySelector('.highscores-div');
var loadScores = function() {
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = [];
        return false;
    }

    highScores = JSON.parse(highScores);
    for(var i = 0; i < highScores.length; i++) {
        var highScoreEl = document.createElement('h2');
        highScoreEl.className = "high-scores";
        highScoreEl.textContent = highScores[i].initials + "  Score:  " + highScores[i].score;
        highScoresDiv.appendChild(highScoreEl); 
        
    }
}

loadScores()