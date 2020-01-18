console.log("Interactions.js is connected!")


// DOM ELEMENTS 
//====================================================================================================

var slider = document.getElementsByClassName("slider");
var submitButton = document.getElementById("submitButton");
var nameBox = document.getElementById("nameBox");
var picBox = document.getElementById("picBox");


var userName;
var userPic;
var userID;
var score = 0;
var userScores = [];
var type = "Five";


// Get API Data (on page load):
var friends;
  $.get("/api/friends", function(data){
    console.log(data);
    friends = data;
  });


// Submit Button 
//====================================================================================================

submitButton.onclick = submit;
function submit(){
  getUserID();
  getUserName();
  getUserPicture()
  addUserScore();
  createUserScoreArr();
  addUserScore()
  interpretUserScore();
  createNewFriend();
  findAFriend()
  postToAPI();
  alert(`Sorry, ${userName}, we don't have a backend yet, so we can't find you a buddy :(`)
  // location.reload();
}




// SUBMIT: Pull the user's inputs
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    function getUserID() {
      userID = Math.floor(Math.random()*1000000000)
    }

    function getUserName(){
      userName = nameBox.value;
    }

    function getUserPicture(){
      userPic = picBox.value;
    }

    function createUserScoreArr(){
      userScores = [];
      $(".slider").each(function() {
        var score = parseInt($(this).val())
        userScores.push(score);
      });
    }

    function addUserScore(){
      score = userScores.reduce((a, b) => a + b, 0)
    }

    function interpretUserScore(){
      switch(true) {
        case (score < 16):
          alert(`Hey ${userName}, you are probably not a withdrawn type (not a Four, Five, or Nine`)
          break;
        case (score < 31):
          alert(`Hey ${userName},you are probably not a type ${type}`)
          break;
        case (score < 46):
          alert(`Hey ${userName}, you probably have ${type} issues or a Type Five Parent`)
          break;
        case (score < 61):
          alert(`Hey ${userName}, you most likely have a ${type} component.`)
          break;
        case (score < 75):
          alert(`Hey ${userName}, you are most likely a ${type}, but you could still be another type if you are thinking too narrowly about Type ${type}`)
          break;
        default:
          alert(`Hey ${userName}, something went wrong, try that again!`)
      }
    }






// SUBMIT: Creates the JSON Object
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var newFriend;
var newFriendArr = newFriend.userScores;
var newFriendName = newFriend.userName;

function Friend(userID, userName, userPic, userScores){
    this.userID = userID;
    this.userName = userName;
    this.userPic = userPic;
    this.userScores = userScores;
    };

function createNewFriend(){
    newFriend = new Friend(userID, userName, userPic, userScores)
    console.log(`newFriend is ${newFriend.userID}`);
    newFriendArr = newFriend.userScores;
    newFriendName = newFriend.userName;
  }

  function postToAPI(){
    $.post("/api/friends", newFriend)
    .then(function(data) {
      return data;
    });
  }
  

// SUBMIT: Find a Friend
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  function findAFriend(){
    var diff = 60;
    var bff = "You have no friends";
    
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
    alert(`${newFriendName}'s new bff is ${bff}`);
  }


