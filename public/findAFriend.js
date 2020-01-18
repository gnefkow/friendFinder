
module.export = function(friends, newFriend){

// UPDATE THIS:
// var friends = require("../data/friends");        // this needs to be replaced by the actual friends JSON from the API
// var newFriend = dummyNewFriend;   // This needs to be replaced by the actual newFriend JSON


// ============================================================================================================================================
// Don't touch anything from here down:
var newFriendArr = newFriend.userScores;
var newFriendName = newFriend.userName;

var diff = 60;
var bff = "You have no friends";



function findAFriend(){
  for (var i = 0; i < friends.length; i++){
    // Variables: Outer Loop:
    var oldFriendName = friends[i].userName;
    var oldFriendVar = friends[i].userScores;
    var newDiff = [];

    // Nested Loop:
    for (var j = 0; j < oldFriendVar.length; j++){
     newDiff.push(Math.abs(oldFriendVar[j] - newFriendArr[j]))
    }
    
    // Find the difference for this friend:
    newDiff = newDiff.reduce((a, b) => a + b, 0)
    console.log(`${newDiff} is the difference between ${newFriendName} and ${oldFriendName}`);
    
    // Update BFF if needed:
    if (newDiff < diff){
      diff = newDiff
      bff = oldFriendName;
    }
  }

// Return the new BFF:
console.log(`${newFriendName}'s new bff is ${bff}`);
}



// ============================================================================================================================================

}