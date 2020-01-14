console.log("Interactions.js is connected!")

// DOM ELEMENTS ==========
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


// Submit ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 
submitButton.onclick = submit;
function submit(){
  getUserID();
  getUserName();
  getUserPicture()
  addUserScore();
  createUserScoreArr();
  addUserScore()
  interpretUserScore();
  alert(`Sorry, ${userName}, we don't have a backend yet, so we can't find you a buddy :(`)
}

// Sub-Functions ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 

    function getUserID() {
      userID = Math.floor(Math.random()*1000000000)
      console.log(`The user's userID is: ${userID}`);
    }

    function getUserName(){
      userName = nameBox.value;
      console.log(`The user's name is: ${userName}`);
    }

    function getUserPicture(){
      userPic = picBox.value;
      console.log(`The user's picture is at: ${userPic}`);
    }

    function createUserScoreArr(){
      userScores = [];
      $(".slider").each(function() {
        var score = parseInt($(this).val())
        userScores.push(score);
      });
      console.log(userScores);
    }

    function addUserScore(){
      score = userScores.reduce((a, b) => a + b, 0)
      console.log(`The ${userName}'s score is: ${score}`);
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






