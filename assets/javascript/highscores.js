var highScoresDiv = document.querySelector('.highscores-div');
var highScores = [];
var clearDataBtn = document.querySelector('#clearData')
var loadScores = function() {
    highScores = localStorage.getItem("scores");

    if (!highScores) {
        highScores = [];
        return false;
    }
    highScores = JSON.parse(highScores);
    highScores.sort(compare);
}

var compare = function(a, b) {
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);

    var comparison = 0;
    if (scoreA < scoreB) {
        comparison = 1;
    } else if (scoreA > scoreB) {
        comparison = -1;
    }
    return comparison;
}

var highScoreOutput = function() {

    for(var i = 0; i < highScores.length; i++) {
        var highScoreEl = document.createElement('h2');
        highScoreEl.className = "high-scores";
        highScoreEl.textContent = highScores[i].initials + "  Score:  " + highScores[i].score;
        highScoresDiv.appendChild(highScoreEl); 
    }
}

clearDataBtn.addEventListener('click', function() {
    localStorage.clear();
})

loadScores()
highScoreOutput()