const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const mariadb = require("mariadb");
const dataRoutes = require("./routes/dataRoutes.js");

server.use(bodyParser.json());
server.use(dataRoutes);

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  connectionLimit: 5,
});

pool
  .getConnection()
  .then(conn => console.log("DB connection established."))
  .catch(err => console.log(err));

// This is only for rendering check purposes, will be deleted:
server.get("/", (req, res) => res.send("This is the home page."));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}.`));

module.exports = server;
