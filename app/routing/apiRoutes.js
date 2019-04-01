// Require friends.js, which contains the array of random people we created
var friends = require("../data/friends.js");

app.get("/api/friends.js", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends.js", function(req, res) {
    // Object that will hold the best match for the user. Starts empty because it should be constantly updated with iterations of the for-loop
    var friendMatch = {
        name: "",
        photo: "",
      };
// For-loop that will run through the "friends" created
      for (var i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        console.log(currentFriend.name);
  }
