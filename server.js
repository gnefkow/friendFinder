// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware:
//    Body parsers that enable the server to recieve information as JSON objects.
//    Needed for POST and PUT, but not for GET and DELETE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// ===========================================================
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  app.get("/survey-5", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey-5.html"));
  });

  app.use(express.static(__dirname + '/public/'));

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});