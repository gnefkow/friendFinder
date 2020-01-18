
var friends = require("../data/friends");

// ----- API ROUTES ----- //

module.exports = function(app){
  // Displays the friendList:
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // Posts new friends to the API:
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friends.push(newFriend);
    res.json(newFriend);
  });

}