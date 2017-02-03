var app = require('express')();
var express = require('express')
var http = require('http').Server(app);
var db = require('./db')

app.set('view engine', 'pug');
app.use(express.static('public'))

app.get('/', function(request, response){
  response.render('index')
});

app.get('/philosophy', function(request, response){
  response.render('philosophy')
});

app.get('/programs', function(request, response){
  response.render('programs')
});

app.get('/staff', function(request, response){
  response.render('staff')
});

app.get('/contact', function(request, response){
  response.render('contact-us')
});

app.post('/contact', function(request, response){

  response.send('thank you!')
});

app.post('/contact', function(request, response, next) {
  let name = request.body.name
  let email = request.body.email
  let phone = request.body.phoneNumber
  let message = request.body.message

 db.createContact(name, email, phoneNumber, message)
  .then( contact => {
    response.send('thankyou')
  })
  .catch( error => {
    response.render('error')
  })
})

http.listen(2222, function(){
  console.log('listening on *:2222')
})
