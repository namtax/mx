var express   = require('express');
var jade      = require('jade');
var stylus    = require('stylus');
var nib       = require('nib');
var app       = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
var path      = require('path');
var lastfmapi = require('lastfmapi')
var lfm       = new lastfmapi({ 'api_key' : '5e41c9e83cab695923664c96f70a592a', 'secret' : 'a4aea96aa5b95876151ef52da32bdb69' });
var SongmeaningService = require('./songmeaning_service').SongmeaningService;


app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(require('stylus').middleware({ src: __dirname + '/public'
  , compile: compile
  }));
  app.use(express.static(path.join(__dirname, 'public')));
});

var songmeaningService = new SongmeaningService('localhost', 27017);

app.get('/', function(req,res) {
  songmeaningService.findAll(function(error,sms){
  res.render('index',{
         songmeanings:sms
     });
  })
});

app.get('/:artist/:album/:track', function(req,res) {
  lfm.album.getInfo({'artist' : req.param("artist"), 'album' : req.param("album") }, function (err, trck) {
    songmeaningService.findAll(function(error,sms){
      console.log(trck);
      res.render('song', {songmeanings:sms,track:trck});
    });
  });
});

app.post('/create', function(request,response) {
  songmeaningService.save({
    comment: request.param('explain')
  }, function(error,docs) {
  response.redirect('/');
  });
});

app.listen(8888);
