$(document).ready(function(){



  console.log("connected!");

var floatpen = document.getElementById("floatpen");


for (var i = 0; i < 8; i++){
  var h = Math.floor(Math.random() * 10);
  var w = Math.floor(Math.random() * 10);
  
  var floatbox = document.createElement("div");
  floatbox.classList.add("floatybox");
  floatbox.style.height = `${h}em`;
  floatbox.style.width = `${w}em`;
  floatpen.appendChild(floatbox);
  animateDiv();
  console.log(`Made a floatybox ${i} time(s)`)
}



  // animateDiv();
  

















function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 0;
  var w = $(window).width() - 0;
  
  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);
  
  return [nh,nw];    
  
}

function animateDiv(){
  var newq = makeNewPosition();
  var oldq = $('.floatybox').offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);
  
  $('.floatybox').animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv();        
  });
  
};

function calcSpeed(prev, next) {
  
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  
  var greatest = x > y ? x : y;
  
  var speedModifier = .1;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;

}



});