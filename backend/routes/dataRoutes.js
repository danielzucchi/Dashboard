const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => res.send('Data will be here.'))

module.exports = router