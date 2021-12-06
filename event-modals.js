var event1Modal = document.getElementById("event1Modal");
var event1Button = document.getElementById("event1Button");
var event1CloseButton = document.getElementById("event1CloseButton");

event1Button.onclick = function () {
  event1Modal.style.visibility = "visible";
  event1Modal.style.opacity = "1";
}

event1CloseButton.onclick = function () {
  event1Modal.style.opacity = "0";
  setTimeout(function () {
    event1Modal.style.visibility = "hidden";
  }, 200);
}

window.onclick = function (event) {
  if (event.target == event1Modal) {
    event1Modal.style.visibility = "hidden";
    event1Modal.style.opacity = "0";
  }
}