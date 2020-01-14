console.log("Interactions.js is connected!")

// DOM ELEMENTS ==========
var slider = document.getElementsByClassName("slider");
var submitButton = document.getElementById("submitButton")


var score = 0;
var userScores = [];
var type = "Five";

submitButton.onclick = createUserScoreArr;

function createUserScoreArr(){
  userScores = [];
  $(".slider").each(function() {
    var score = parseInt($(this).val())
    userScores.push(score);
  });
  console.log(userScores);
  addUserScore();
  interpretUserScore();
}

function addUserScore(){
  console.log(
    score = userScores.reduce((a, b) => a + b, 0)
  )
}

function interpretUserScore(){
  console.log(`interpret thinks the score is ${score}`)
  switch(true) {
    case (score < 16):
      alert(`You are probably not a withdrawn type (not a Four, Five, or Nine`)
      break;
    case (score < 31):
      alert(`You are probably not a type ${type}`)
      break;
    case (score < 46):
      alert(`You probably have ${type} issues or a Type Five Parent`)
      break;
    case (score < 61):
      alert(`You most likely have a ${type} component.`)
      break;
    case (score < 75):
      alert(`You are most likely a ${type}, but you could still be another type if you are thinking too narrowly about Type ${type}`)
      break;
    default:
      alert("Something went wrong, try that again!")
  }
}






