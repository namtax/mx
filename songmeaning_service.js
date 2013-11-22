var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

SongmeaningService = function(host,port){ 
  this.db = new Db('node-mongo-songmeanings', new Server(host,port, {safe:false}, {auto_reconnect: true}, {}));
  this.db.open(function(){});
}; 

SongmeaningService.prototype.getCollection = function(callback){ 
  this.db.collection('songmeanings', function(error, songmeaning_collection) { 
    if(error) callback(error);
    else callback(null, songmeaning_collection);
  });
};

SongmeaningService.prototype.findAll = function(callback){ 
  this.getCollection(function(error, songmeaning_collection) { 
  if(error) callback(error);
  else { 
    songmeaning_collection.find().toArray(function(error,results){ 
      if(error) callback(error)
      else callback(null,results)
   });
  }
});
};

SongmeaningService.prototype.save = function(songmeanings, callback)  {
  this.getCollection(function(error, songmeaning_collection)  {
  if( error) callback(error)
  else { 
    if( typeof(songmeanings.length)=="undefined")
      songmeanings = [songmeanings];

    for(var i =0; i< songmeanings.length;i++) { 
      songmeaning = songmeanings[i]; 
      songmeaning.created_at = new Date();
    }

   songmeaning_collection.insert(songmeanings, function() { 
     callback(null, songmeanings);
   });
  }
 });
};

exports.SongmeaningService = SongmeaningService;
