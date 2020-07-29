'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const mysql  = require('mysql');
const config = require('./config.js');
const connection = mysql.createConnection(config);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

const router = express.Router();
router.get('/', (req, res) => {
  res.json(process.env);
});

// app.use('/feedback/new', (req, res) => {
//   connection.query(`INSERT INTO new(date) VALUES(now())`,function (error, results, fields) {
//     if (error) throw error;
//     res.json({ saved: true })
//   });
//   connection.end();
// });

// app.use('/feedback/start', (req, res) => {
//   connection.query(`INSERT INTO start(date) VALUES(now())`,function (error, results, fields) {
//     if (error) throw error;
//     res.json({ saved: true })
//   });
//   connection.end();

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);