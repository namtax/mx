var express = require('express');
var jade = require('jade');
var app = express();
var SongmeaningService = require('./songmeaning_service').SongmeaningService;

app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

app.configure(function(){ 
  app.use(express.bodyParser());
});

var songmeaningService = new SongmeaningService('localhost', 27017);

app.get('/', function(req,res) { 
  songmeaningService.findAll(function(error,sms){
  res.render('index',{
         songmeanings:sms
     });
  })
});

app.post('/create', function(request,response) { 
  songmeaningService.save({ 
    comment: request.param('explain')
  }, function(error,docs) { 
  response.redirect('/');
  });
});

app.listen(8888);
