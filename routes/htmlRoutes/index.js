const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/scores', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/highscores.html'));
});

module.exports = router