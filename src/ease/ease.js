// ---------------toasts------------

const toastContainer = document.querySelector(".toast-container");
const toastGreen = document.querySelector(".toast-green");
const toastRed = document.querySelector(".toast-red");
const toastBlue = document.querySelector(".toast-blue");
const toastYellow = document.querySelector(".toast-yellow");
const toastOrange = document.querySelector(".toast-orange");
const toastBlack = document.querySelector(".toast-black");

// -------close toasts--------
const greenToastClose = document.querySelector(".greenToastClose");
const redToastClose = document.querySelector(".redToastClose");
const blueToastClose = document.querySelector(".blueToastClose");
const yellowToastClose = document.querySelector(".yellowToastClose");
const orangeToastClose = document.querySelector(".orangeToastClose");
const blackToastClose = document.querySelector(".blackToastClose");

// ---------------show-----------

const greenToastShow = document.querySelector(".greenToastShow");
const redToastShow = document.querySelector(".redToastShow");
const blueToastShow = document.querySelector(".blueToastShow");
const yellowToastShow = document.querySelector(".yellowToastShow");
const orangeToastShow = document.querySelector(".orangeToastShow");
const blackToastShow = document.querySelector(".blackToastShow");


// ------------toast open-------------

greenToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastGreen.style.display = "flex";

  setTimeout(() => {
    toastGreen.style.display = "none";
  }, 15000);
});

redToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastRed.style.display = "flex";

  setTimeout(() => {
    toastRed.style.display = "none";
  }, 7000);
});

blueToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastBlue.style.display = "flex";

  setTimeout(() => {
    toastBlue.style.display = "none";
  }, 7000);
});

yellowToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastYellow.style.display = "flex";

  setTimeout(() => {
    toastYellow.style.display = "none";
  }, 7000);
});
orangeToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastOrange.style.display = "flex";

  setTimeout(() => {
    toastOrange.style.display = "none";
  }, 7000);
});
blackToastShow.addEventListener("click", function () {
  toastContainer.style.display = "flex";
  toastBlack.style.display = "flex";

  setTimeout(() => {
    toastBlack.style.display = "none";
  }, 7000);
});

// -------------Close------------------

greenToastClose.addEventListener('click', function(){
    console.log("green close")
    toastGreen.style.display = "none"
})
redToastClose.addEventListener('click', function(){
    console.log("red close")
    toastRed.style.display = "none"
})
blueToastClose.addEventListener('click', function(){
    console.log("blue close")
    toastBlue.style.display = "none"
})
yellowToastClose.addEventListener('click', function(){
    console.log("yellow close")
    toastYellow.style.display = "none"
})
orangeToastClose.addEventListener('click', function(){
    console.log("orange close")
    toastOrange.style.display = "none"
})
blackToastClose.addEventListener('click', function(){
    console.log("black close")
    toastBlack.style.display = "none"
})