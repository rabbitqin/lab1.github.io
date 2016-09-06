document.addEventListener("DOMContentLoaded", function(){
//var seconds = 0;
var state = 0;

var img = document.getElementById("mail1");

function static(){
  setInterval(function() {
    state +=1;
    console.log("state: " + state);
    if(state%2==0) {
      img.src="mail3.png";
      document.getElementById("mail4").style.visibility = "visible";
    }
    else{
      img.src="mail1.png";
      document.getElementById("mail4").style.visibility = "hidden";
    }
    }, 1000);
}
static();

});

function action(){
  
var elem = document.getElementById("box");
var temp1 = document.getElementById("mail1")
var temp2 = document.getElementById("mail4")
elem.style.width = "100px";
  var pos = 50;
  var id = setInterval(frame,10);
  function frame() {
    if (pos < 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.left = pos + '%';
    }
  }
  
document.getElementById("read").style.visibility = "visible";

document.getElementById("send").style.visibility = "visible";
}

function readmsg(){
 document.getElementById("read").onclick = function () {
  location.href = "read.html";
 };
}
 
function randomString() {
	var tokens = ['Apple', 'Banana', 'The','','Hi ','You ','I',',','.'];
var text = '';
for (var i=0; i<200; i++) {
    text += tokens[Math.floor(Math.random()*tokens.length)];
}
//console.log(text);
document.getElementById('itext').innerHTML = text;
}

function sendmsg(){
 document.getElementById("send").onclick = function () {
  location.href = "send.html";
 };
  
  
  
}

function trigger(x){
   x.style.height = "60px";
   x.style.width = "auto";
   x.style.fontSize = "30px"; 
}

function normal(x){
   x.style.height = "40px";
   x.style.width = "auto";
   x.style.fontSize = "20px"; 
}