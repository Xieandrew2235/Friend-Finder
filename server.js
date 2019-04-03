// Dependencies and port
// For PORT it is "process.env.PORT" before the PORT channel so that Heroku sets the port
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Listener which will start our server
var app = express();
var PORT = process.env.PORT || 8080;
var HOST = "0.0.0.0";
app.listen(PORT, HOST, function() {
 console.log("App listening on PORT: " + PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes that point to our apiRoutes.js and htmlRoutes.js files 

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

