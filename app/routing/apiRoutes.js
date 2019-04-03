// Require friends.js, which contains the array of random people we created
var friends = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends.js", function (req, res) {
    res.json(friends);
  });
// Post route, which will take the user-submitted infomation and push to the server
  app.post("/api/friends.js", function (req, res) {
    // Object that will hold the best match for the user. Starts empty because it should be constantly updated with iterations of the for-loop
    var friendMatch = {
      name: "",
      photo: "",
      difference: "",
    };
    // Variable which will calculate difference between the user score and the score of other people in the database
    var totalDifference;
    // Parse user survey and create variable for user scores
    var userData = req.body;
    var userScores = userData.scores

    // For-loop that will run through the "friends" possibilities
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;
      console.log(currentFriend.name);

      // Second for-loop that runs through all the scores of each person in our database
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];
        // Calculate difference between scores above, which will = totalDifference
        // Match total difference up against friendDifference
        // Results being compared to each user in database, and user with least "differences" will be the "best friend match"
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }
      // If sum of difference is less than the differences of current best match, then reset bestMatch to be the new best match
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    // Save data to database
    friends.push(userData);
    // Return best match to user
    res.json(bestMatch);
  });
};
