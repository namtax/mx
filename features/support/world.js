var zombie = require('zombie');

var World = function (callback) {
  this.browser = new zombie();
  
  this.visit = function(url, callback) { 
    this.browser.visit(url,callback);
  };

  callback(this);
};

exports.World = World;
