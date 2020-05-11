const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'eporqep6b4b8ql12.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user: 'zfn1weoj0qnehqdu',
  password: 'nrnaeryhrcbcqnfo',
  database: 'h9h3kuxcl3j9jcs2',
  connectionLimit: 5,
});

router.get('/data/:option', (req, res) => {
  const { option } = req.params;

  pool
    .getConnection()
    .then(conn => {
      conn
        .query(`SELECT * FROM ${option}`)
        .then(data => res.status(200).json(data))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;
