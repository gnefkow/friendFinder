console.log("Interactions.js is connected!")


// DOM ELEMENTS 
//====================================================================================================

var slider = document.getElementsByClassName("slider");
var submitButton = document.getElementById("submitButton");
var nameBox = document.getElementById("nameBox");
var picBox = document.getElementById("picBox");
// -- MODAL -- //
var modalBestFriendTitle = document.getElementById("modalBestFriendTitle");
var modalBestFriendMessage = document.getElementById("modalBestFriendMessage");
var interpretScoreMessage;


var userName;
var userPic;
var userID;
var score = 0;
var userScores = [];
var type = "Five";

var friends;
var bff;
var bffPic;




// Populate "friends" with data from the API
//====================================================================================================
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
  populateModal();
  $('#myModal').modal();
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
          interpretScoreMessage = `you are probably not a withdrawn type (not a Four, Five, or Nine`;
          break;
        case (score < 31):
          interpretScoreMessage = `you are probably not a type ${type}`;
          break;
        case (score < 46):
          interpretScoreMessage = `you probably have ${type} issues or a Type Five Parent`;
          break;
        case (score < 61):
          interpretScoreMessage = `you most likely have a ${type} component.`;
          break;
        case (score < 75):
          interpretScoreMessage = `you are most likely a ${type}, but you could still be another type if you are thinking too narrowly about Type ${type}`;
          break;
        default:
          interpretScoreMessage = `something went wrong, try that again!`;
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
    bff = "You have no friends";
    bffPic = "data:image/png;base64,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"
    
    for (var i = 0; i < friends.length; i++){
      // Variables: Outer Loop:
      var oldFriendName = friends[i].userName;
      var oldFriendVar = friends[i].userScores;
      var oldFriendPic = friends[i].userPic;
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
        bffPic = oldFriendPic;
      }
    }
  
    // Return the new BFF:
    console.log(`${newFriendName}'s new bff is ${bff}`);
    return bff;
  }


// MODAL
//====================================================================================================

function populateModal(){
  modalBestFriendTitle.textContent = `Hey ${newFriendName}, you should meet ${bff}`;
  modalBestFriendMessage.textContent = `Similar to ${bff}, ${interpretScoreMessage}`;
}