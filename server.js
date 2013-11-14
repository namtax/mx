var express = require('express');
var jade = require('jade');
var app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

app.configure(function(){ 
  app.use(express.bodyParser());
});

app.get('/', function(req,res) { 
  res.render('index');
});

app.post('/create', function(request,response) { 
  response.redirect('/');
});

app.listen(8888);
