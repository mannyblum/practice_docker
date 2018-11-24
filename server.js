const express = require('express');
const server = express();
const PORT = 3008;
const pg = require('pg');

pg.connect('postgres://mannyblum:manny123@localhost:5432/practicedocker');

server.listen(PORT, () => console.log(`Server running on ${PORT}`));

server.get('/', (req, res) => res.status(200).send('hello'));
