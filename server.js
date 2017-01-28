const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '')))
app.get('/', function(request, response) {
  response.send('helloworld');
  response.sendFile(path.join(__dirname, '/index.html'))

})

// app.get('/test', function(request, response) {
//   // response.send('helloworld');
//   response.sendFile(path.join(__dirname + '../chromespeech/index.html'))

// })
// app.post('/button', function(request, response) {}

app.listen(3000, function() {
  console.log('listening on port 3000');
});