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

var event2Modal = document.getElementById("event2Modal");
var event2Button = document.getElementById("event2Button");
var event2CloseButton = document.getElementById("event2CloseButton");

event2Button.onclick = function () {
  event2Modal.style.visibility = "visible";
  event2Modal.style.opacity = "1";
}

event2CloseButton.onclick = function () {
  event2Modal.style.opacity = "0";
  setTimeout(function () {
    event2Modal.style.visibility = "hidden";
  }, 200);
}

var event3Modal = document.getElementById("event3Modal");
var event3Button = document.getElementById("event3Button");
var event3CloseButton = document.getElementById("event3CloseButton");

event3Button.onclick = function () {
  event3Modal.style.visibility = "visible";
  event3Modal.style.opacity = "1";
}

event3CloseButton.onclick = function () {
  event3Modal.style.opacity = "0";
  setTimeout(function () {
    event3Modal.style.visibility = "hidden";
  }, 200);
}

var event4Modal = document.getElementById("event4Modal");
var event4Button = document.getElementById("event4Button");
var event4CloseButton = document.getElementById("event4CloseButton");

event4Button.onclick = function () {
  event4Modal.style.visibility = "visible";
  event4Modal.style.opacity = "1";
}

event4CloseButton.onclick = function () {
  event4Modal.style.opacity = "0";
  setTimeout(function () {
    event4Modal.style.visibility = "hidden";
  }, 200);
}

var event5Modal = document.getElementById("event5Modal");
var event5Button = document.getElementById("event5Button");
var event5CloseButton = document.getElementById("event5CloseButton");

event5Button.onclick = function () {
  event5Modal.style.visibility = "visible";
  event5Modal.style.opacity = "1";
}

event5CloseButton.onclick = function () {
  event5Modal.style.opacity = "0";
  setTimeout(function () {
    event5Modal.style.visibility = "hidden";
  }, 200);
}

window.onclick = function (event) {
  if (event.target == event5Modal) {
    event5Modal.style.visibility = "hidden";
    event5Modal.style.opacity = "0";
  } else if (event.target == event4Modal) {
    event4Modal.style.visibility = "hidden";
    event4Modal.style.opacity = "0";
  } else if (event.target == event3Modal) {
    event3Modal.style.visibility = "hidden";
    event3Modal.style.opacity = "0";
  } else if (event.target == event2Modal) {
    event2Modal.style.visibility = "hidden";
    event2Modal.style.opacity = "0";
  } else if (event.target == event1Modal) {
    event1Modal.style.visibility = "hidden";
    event1Modal.style.opacity = "0";
  }
}