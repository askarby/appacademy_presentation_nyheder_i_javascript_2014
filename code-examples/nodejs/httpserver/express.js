var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/other', function (req, res) {
  res.send('Hello Universe');
});
var server = app.listen(1337, function () {
  console.log('Example app listening at http:/127.0.0.1:1337/');
});         