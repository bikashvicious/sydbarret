
document.addEventListener("DOMContentLoaded", function() {
  var numberOfButtons = document.querySelectorAll(".drum").length;
  for (var i=0; i<numberOfButtons; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
     function handleClick() {
      var buttonId= this.className;

switch (buttonId) {
case "S drum":
var audio = new Audio('sounds/sh1.m4a')
audio.play();
break;



case "Y drum":
var audio = new Audio('sounds/sh2.m4a')
audio.play();
break;




case "D drum":
var audio = new Audio('sounds/sh3.m4a')
audio.play();
break;


case "B drum":
var audio = new Audio('sounds/sh4.m4a')
audio.play();
break;

default:

      }


};
}
})
