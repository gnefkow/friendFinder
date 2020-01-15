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

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  });

  app.use(express.static(__dirname + '/public/'));


// ----- API ROUTES ----- //
var friendList = [
  {
    userID: 1234567890,
    userName: "Seed Friend",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
  }
];

// Displays the friendList:
app.get("/api/friendsList", function(req, res) {
  return res.json(friendList);
});



// Posts new friends to the API:

  app.post("/api/friendsList", function(req, res) {
    var newFriend = req.body;
    friendList.push(newFriend);
    res.json(newFriend);
  });




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});