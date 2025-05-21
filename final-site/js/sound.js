
let startupSound = document.querySelector("#startupSound");
let clickSound = document.querySelector("#mouseClick");

document.addEventListener("click", function () {
  clickSound.currentTime = 0; //reset
  clickSound.play();
});

clickSound.volume = 0.4;


document.addEventListener("click", function playStartup() {
  startupSound.volume = 0.5;
  startupSound.play();
  document.removeEventListener("click", playStartup);
});
