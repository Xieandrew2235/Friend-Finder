// Dependencies and port
// For PORT it is "process.env.PORT" before the PORT channel so that Heroku sets the port
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// Routes that point to our apiRoutes.js and htmlRoutes.js files  

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener which will start our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });