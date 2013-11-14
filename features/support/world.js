var zombie = require('zombie');
var should = require('should');

var World = function (callback) {
  this.browser = new zombie();
  
  this.visit = function(url, callback) { 
    this.browser.visit(url,callback);
  };

  callback(this);
};

exports.World = World;
