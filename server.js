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

// ----- HTML ROUTES ----- //
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

  app.get("/survey-5", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey-5.html"));
  });

  app.use(express.static(__dirname + '/public/'));


// ----- API ROUTES ----- //
var Friends = [
  {
    userID: 1234567890,
    userName: "Seed Friend",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
  }
];

// Displays all characters
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});


// Posts new friends to the API:
app.post("/api/characters", function(req, res) {
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newCharacter.userID;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});





// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});