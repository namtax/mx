var UserExplainsSteps = function() { 
  this.World = require("../support/world.js").World;

  this.When(/^I submit a song meaning$/, function(callback) {
    this.visit("http://localhost:8888/",callback)
  });

  this.Then(/^I should see my song meaning$/, function(callback) {
    // express the regexp above with the code you wish you had
   this.browser.text('body').should.include.string("hello");
 });
  
  }

module.exports = UserExplainsSteps



