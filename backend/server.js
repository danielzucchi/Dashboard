const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes.js');

server.use(bodyParser.json());
server.use(dataRoutes);

server.get('/', (req, res) => res.send('This is the home page.'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on ${PORT}.`));

module.exports = server;
