var morgan = require('morgan');
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../images/')));

var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
  console.log('This is a get request');
});

app.post('/', function(req, res) {
  res.sendStatus(200);
  console.log('This is a post request');
});

app.listen(port, function() {
  console.log(`The server is now listening on port: ${port}`);
});