const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mariadb = require('mariadb');
const fs = require('fs');
const path = require('path');
const fastcsv = require('fast-csv');
const dataRoutes = require('./routes/dataRoutes.js');

server.use(bodyParser.json());
server.use(dataRoutes);

// const pool = mariadb.createPool({
//   host: "localhost",
//   user: "root",
//   connectionLimit: 5,
//   database: "dashboard",
// });

// server.get("/data", (req, res) => {
//   pool.getConnection().then(conn => {
//     conn.query("SELECT * FROM weekly").then(data => res.status(200).json(data));
//   });
// });

// pool
//   .getConnection()
//   .then(conn => {
//     console.log("DB connection established.");
//     conn.query("CREATE DATABASE if not exists dashboard");
//     conn.query("USE dashboard");

//     conn.query("SELECT * FROM weekly").then(res => console.log(res));

// conn.query(
//   "CREATE TABLE if not exists weekly(PRODUCT VARCHAR(255), WEEK_COMMENCING date, EXPOSED mediumint, CONTROL mediumint)"
// );

// conn.query(
//   "CREATE TABLE if not exists top(METRIC VARCHAR(255), PRODUCT VARCHAR(255), EXPOSED DECIMAL(10,2), CONTROL DECIMAL(10,2), UPLIFT DECIMAL(10,2), PCT_UPLIFT DECIMAL(2,2))"
// );

// let topData = [];
// let weeklyData = [];

// fs.createReadStream(path.resolve(__dirname, "data", "top.csv"))
//   .pipe(fastcsv.parse({ headers: true }))
//   .on("data", row => topData.push(row))
//   .on("error", error => console.error(error))
//   .on("end", rowCount => {
//     console.log(`Parsed ${rowCount} rows from Top.csv`);

//     conn
//       .query(
//         "INSERT INTO top (METRIC, PRODUCT, EXPOSED, CONTROL, UPLIFT, PCT_UPLIFT) VALUES (?, ?, ?, ?, ?)",
//         [topData],
//         response => {
//           console.log("Data added to database!", response);
//         }
//       )
//       .catch(err => console.log(err));
//   });

// fs.createReadStream(path.resolve(__dirname, "data", "weekly.csv"))
//   .pipe(fastcsv.parse({ headers: true }))
//   .on("data", row => weeklyData.push(row))
//   .on("error", error => console.error(error))
//   .on("end", rowCount =>
//     console.log(`Parsed ${rowCount} rows from Weekly.csv`)
//   );

// conn
//   .query(
//     "INSERT INTO weekly (PRODUCT, WEEK_COMMENCING, EXPOSED, CONTROL) VALUES (?, ?, ?, ?)",
//     [weeklyData],
//     response => {
//       console.log("Data added to database!", response);
//     }
//   )
//   .catch(err => console.log(err));
// })
// .catch(err => console.log(err));

server.get('/', (req, res) => res.send('This is the home page.'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}.`));

module.exports = server;
