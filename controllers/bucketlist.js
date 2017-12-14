// Require the express package and the express.Router()
const express = require('express');
const router = express.Router();


// GET HTTP method to /bucketlist
router.get('/', (req, res) => {
    res.send("GET");
});

// POST HTTP method to bucketlist
router.post('/', (req, res, next) => {
    res.semd('POST');
});

// DELETE HTTP method to /bucketlist , with the id parameter
router.delete(':/id', (req, res, next) => {
    res.send('DELETE');
})

module.exports = router;