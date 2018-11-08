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
    var newFriend = req.body;
    // check if the table is full
    if(friendsArray.length < 5){
       friendsArray.push(newcustomer);
       res.send("It went to the table");
       // res.json(newcustomer); 
    }
    else{
        waitlistArray.push(newcustomer);
        res.send("It went to the waitlist"); 
        // res.json(newcustomer);
    }
    // Using a RegEx Pattern to remove spaces from newCharacter

  });
  };














  /////////////////////////////////////////////



 