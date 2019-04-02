// Require friends.js, which contains the array of random people we created
var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends.js", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends.js", function (req, res) {
    // Object that will hold the best match for the user. Starts empty because it should be constantly updated with iterations of the for-loop
    var friendMatch = {
      name: "",
      photo: "",
      difference: "",
    };
    // Variable which will calculate difference between the user score and the score of other people in the database
      var totalDifference;

    // For-loop that will run through the "friends" possibilities
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      console.log(currentFriend.name);

    // Second for-loop that runs through all the scores of each person in our database
       for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];
    }
  }
  // Calculate difference between scores above, which will = totalDifference

  // Match total difference up against friendDifference
  
  // Return best match to user