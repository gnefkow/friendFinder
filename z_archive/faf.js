// This file is going to have to go somewhere else, but it is here for now.


  

// ++++++++ SAMPLE DATA ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ ++++++++ //

var dummyNewFriend =
  {
    userID: 1234567890,
    userName: "Janice",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [4,2,1,3,2,5,3,1,1,2,5,4,2,1,4]
  }


var seedFriends = [
  {
    userID: 1234567890,
    userName: "Jona",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [5,5,3,5,3,5,3,5,3,3,5,3,3,5,3]
  } , {
    userID: 847363789,
    userName: "Lisa",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [2,3,3,3,2,3,3,2,3,3,3,2,3,2,3]
  } , {
    userID: 265553456,
    userName: "Jon Mac",
    userPic: "https://image.shutterstock.com/image-photo/one-shelled-hazelnut-brown-isolated-260nw-783786277.jpg",
    userScores: [5,5,5,5,4,5,4,5,4,3,5,3,5,3,5]
  }
];


// ========== FUNCTION ========== ========== ========== ========== ========== ========== ========== ========== //

// UPDATE THIS:
var friends = seedFriends;        // this needs to be replaced by the actual friends JSON from the API
var newFriend = dummyNewFriend;   // This needs to be replaced by the actual newFriend JSON


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

// Run:
findAFriend();