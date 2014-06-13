var UserExplainsSteps = function() {
  this.World = require("../support/world.js").World;

  this.When(/^I visit a song meaning page$/, function(callback) {
    this.visit("http://localhost:8888/boards-of-canada/music-has-the-right-to-children/an-eagle-in-your-mind",callback);
  });

  this.When(/^I submit a song meaning$/, function(callback) {
    this.browser
      .fill("explain","Eagle in your mind is my favourite")
      .pressButton("Submit", callback);
  });

  this.Then(/^I should see the song meaning/, function(callback) {
    this.browser
      .text('body').should.include("Eagle in your mind is my favourite",callback);
    callback();
  });

  }

module.exports = UserExplainsSteps



