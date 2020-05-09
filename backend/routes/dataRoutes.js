const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
const url = require('url');

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  connectionLimit: 5,
  database: 'dashboard',
});

router.get('/data', (req, res) => {
  const option = url.parse(req.url, true).query.option;

  pool.getConnection().then(conn => {
    conn
      .query(`SELECT * FROM ${option}`)
      .then(data => res.status(200).json(data))
      .catch(err => console.log(err));
  });
});

module.exports = router;
