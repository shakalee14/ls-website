var express = require('express')
var db = require('./db')
var bodyParser = require('body-parser')
var app = express()

app.set('view engine', 'pug');
app.use(express.static('public'))
app.use(bodyParser());


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

app.post('/contact', function(request, response) {
  let name = request.body.name
  let email = request.body.email
  let phone = request.body.phoneNumber
  let message = request.body.message

 db.createContact(name, email, phone, message)
  .then( contact => {
    response.render('contact-us')
  })
  .catch( error => {
    response.render('error')
  })
})

app.listen(2222, function(){
  console.log('listening on *:2222')
})
