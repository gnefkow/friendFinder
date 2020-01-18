
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



// app.get("/api/friends/:friends", function(req, res) {
//   var chosen = req.params.friends;
//   console.log(chosen);
//   for (var i = 0; i < friends.length; i++) {
//     if (chosen === friends[i].userName) {
//       return res.json(friends[i]);
//     }
//   }
//   return res.json(false);
// });


}