// this part checks whether the button is pressed or not


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML; // it this it will check the buton clicked and
    makeSound(buttonInnerHTML); // make the corresponding sound

    buttonAnimation(buttonInnerHTML);

  });

}
// this part checks which key or button is pressed and make the corresponding sound
document.addEventListener("keydown", function(event) { //here the keydown will check whether the button is pressed or not if pressed
  makeSound(event.key); // the eventthat  will triger the keydown makeSound and key and check with switch cases to play the corresponding sound

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":

      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":

      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;


    case "s":

      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;


    case "d":

      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;


    case "j":

      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;


    case "k":

      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":

      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML); // if the none of the above buttons are pressed and it will call the innerHTML

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
