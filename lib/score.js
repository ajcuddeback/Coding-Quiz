const fs = require('fs');
const path = require('path');

function createNewScore(body, scoresArray) {
    const score = body;
    scoresArray.push(score);
    fs.writeFileSync(
        path.join(__dirname, '../data/scores.json'),
        JSON.stringify({ scores: scoresArray }, null, 2)
    );

    return score;
};

module.exports = {
    createNewScore
}