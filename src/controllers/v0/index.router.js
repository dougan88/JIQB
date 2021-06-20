const express = require('express');
const questionRouter = require('./questions/routes/question.router');

const router = express.Router();

router.use('/questions', questionRouter);

router.get('/', async (req, res) => {
    res.send(`V0`);
});

module.exports = router;
