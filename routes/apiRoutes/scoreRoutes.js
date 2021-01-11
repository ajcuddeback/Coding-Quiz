const router = require('express').Router();
const fs = require('fs');
const { scores } = require('../../data/scores.json');
const { createNewScore } = require('../../lib/score')

router.get('/scores', (req, res) => {
    res.json(scores)
});

router.post('/scores', (req, res) => {
    const score = createNewScore(req.body, scores);
    res.json(score);
});



module.exports = router;