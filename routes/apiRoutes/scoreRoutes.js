const router = require('express').Router();
const fs = require('fs');
const { scores } = require('../../data/scores.json');

router.get('/scores', (req, res) => {
    res.json(scores)
    console.log(scores)
});

module.exports = router;