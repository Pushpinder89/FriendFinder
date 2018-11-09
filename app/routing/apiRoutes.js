// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
var friendsArray = require('../data/friends.js');
// =============================================================
  // Displays all characters(user requests for data and i give it back)
  module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendsArray);
  });

// Routes
// =============================================================
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    console.log(req.body);
    var newFriend = req.body;
    // friendsArray.push(newFriend);

  var allDifference = [];
  var match;
  var lowestNumber = 0;

  for(var i = 0; i <friendsArray.length; i++){
    var difference = 0;
    // console.log("String :" , friendsArray[i].scores);
    for(var j = 0; j <friendsArray[i].scores.length; j++){
      difference = newFriend.scores[j] - friendsArray[i].scores[j];
    }
    allDifference.push(difference);
  }

  for( var i = 0; i < allDifference.length; i++){
    if (allDifference[i] < lowestNumber || lowestNumber === 0) {
      lowestNumber = allDifference[i];
      match = friendsArray[i]
    }
  }
  res.json(match)
  });
  };
  














  /////////////////////////////////////////////



 