var UserExplainsSteps = function() { 
  this.World = require("../support/world.js").World;

  this.When(/^I submit a song meaning$/, function(callback) {
    this.browser.visit("http://localhost:8888",callback); 
  });

  this.Then(/^I should see my song meaning$/, function(callback) {
   this.browser.fill("explain","Eagle in your mind is my favourite");
   this.browser.pressButton("Submit");
   this.browser.text('body').should.include("Eagle in your mind is my favourite");
   next();
 });
  
  }

module.exports = UserExplainsSteps



