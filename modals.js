var compulsoryCertificationsModal = document.getElementById("compulsoryCertificationsModal");
var compulsoryCertificationsButton = document.getElementById("compulsoryCertificationsButton");
var compulsoryCertificationsCloseButton = document.getElementById("compulsoryCertificationsCloseButton");

compulsoryCertificationsButton.onclick = function () {
  compulsoryCertificationsModal.style.visibility = "visible";
  compulsoryCertificationsModal.style.opacity = "1";
}

compulsoryCertificationsCloseButton.onclick = function () {
  compulsoryCertificationsModal.style.opacity = "0";
  setTimeout(function () {
    compulsoryCertificationsModal.style.visibility = "hidden";
  }, 200);
}

var electiveCertificationsModal = document.getElementById("electiveCertificationsModal");
var electiveCertificationsButton = document.getElementById("electiveCertificationsButton");
var electiveCertificationsCloseButton = document.getElementById("electiveCertificationsCloseButton");

electiveCertificationsButton.onclick = function () {
  electiveCertificationsModal.style.visibility = "visible";
  electiveCertificationsModal.style.opacity = "1";
}

electiveCertificationsCloseButton.onclick = function () {
  electiveCertificationsModal.style.opacity = "0";
  setTimeout(function () {
    electiveCertificationsModal.style.visibility = "hidden";
  }, 200);
}

var reachAheadsModal = document.getElementById("reachAheadsModal");
var reachAheadsButton = document.getElementById("reachAheadsButton");
var reachAheadsCloseButton = document.getElementById("reachAheadsCloseButton");

reachAheadsButton.onclick = function () {
  reachAheadsModal.style.visibility = "visible";
  reachAheadsModal.style.opacity = "1";
}

reachAheadsCloseButton.onclick = function () {
  reachAheadsModal.style.opacity = "0";
  setTimeout(function () {
    reachAheadsModal.style.visibility = "hidden";
  }, 200);
}

var experientialLearningsModal = document.getElementById("experientialLearningsModal");
var experientialLearningsButton = document.getElementById("experientialLearningsButton");
var experientialLearningsCloseButton = document.getElementById("experientialLearningsCloseButton");

experientialLearningsButton.onclick = function () {
  experientialLearningsModal.style.visibility = "visible";
  experientialLearningsModal.style.opacity = "1";
}

experientialLearningsCloseButton.onclick = function () {
  experientialLearningsModal.style.opacity = "0";
  setTimeout(function () {
    experientialLearningsModal.style.visibility = "hidden";
  }, 200);
}

var SPEModal = document.getElementById("SPEModal");
var SPEButton = document.getElementById("SPEButton");
var SPECloseButton = document.getElementById("SPECloseButton");

SPEButton.onclick = function () {
  SPEModal.style.visibility = "visible";
  SPEModal.style.opacity = "1";
}

SPECloseButton.onclick = function () {
  SPEModal.style.opacity = "0";
  setTimeout(function () {
    SPEModal.style.visibility = "hidden";
  }, 200);
}

var coopPlacementsModal = document.getElementById("coopPlacementsModal");
var coopPlacementsButton = document.getElementById("coopPlacementsButton");
var coopPlacementsCloseButton = document.getElementById("coopPlacementsCloseButton");

coopPlacementsButton.onclick = function () {
  coopPlacementsModal.style.visibility = "visible";
  coopPlacementsModal.style.opacity = "1";
}

coopPlacementsCloseButton.onclick = function () {
  coopPlacementsModal.style.opacity = "0";
  setTimeout(function () {
    coopPlacementsModal.style.visibility = "hidden";
  }, 200);
}

var majorCreditsModal = document.getElementById("majorCreditsModal");
var majorCreditsButton = document.getElementById("majorCreditsButton");
var majorCreditsCloseButton = document.getElementById("majorCreditsCloseButton");

majorCreditsButton.onclick = function () {
  majorCreditsModal.style.visibility = "visible";
  majorCreditsModal.style.opacity = "1";
}

majorCreditsCloseButton.onclick = function () {
  majorCreditsModal.style.opacity = "0";
  setTimeout(function () {
    majorCreditsModal.style.visibility = "hidden";
  }, 200);
}

var requiredEnglishModal = document.getElementById("requiredEnglishModal");
var requiredEnglishButton = document.getElementById("requiredEnglishButton");
var requiredEnglishCloseButton = document.getElementById("requiredEnglishCloseButton");

requiredEnglishButton.onclick = function () {
  requiredEnglishModal.style.visibility = "visible";
  requiredEnglishModal.style.opacity = "1";
}

requiredEnglishCloseButton.onclick = function () {
  requiredEnglishModal.style.opacity = "0";
  setTimeout(function () {
    requiredEnglishModal.style.visibility = "hidden";
  }, 200);
}

var requiredMathModal = document.getElementById("requiredMathModal");
var requiredMathButton = document.getElementById("requiredMathButton");
var requiredMathCloseButton = document.getElementById("requiredMathCloseButton");

if (requiredMathButton != null) {
  requiredMathButton.onclick = function () {
    requiredMathModal.style.visibility = "visible";
    requiredMathModal.style.opacity = "1";
  }

  requiredMathCloseButton.onclick = function () {
    requiredMathModal.style.opacity = "0";
    setTimeout(function () {
      requiredMathModal.style.visibility = "hidden";
    }, 200);
  }
}

var relatedCreditsModal = document.getElementById("relatedCreditsModal");
var relatedCreditsButton = document.getElementById("relatedCreditsButton");
var relatedCreditsCloseButton = document.getElementById("relatedCreditsCloseButton");

relatedCreditsButton.onclick = function () {
  relatedCreditsModal.style.visibility = "visible";
  relatedCreditsModal.style.opacity = "1";
}

relatedCreditsCloseButton.onclick = function () {
  relatedCreditsModal.style.opacity = "0";
  setTimeout(function () {
    relatedCreditsModal.style.visibility = "hidden";
  }, 200);
}

window.onclick = function (event) {
  if (event.target == relatedCreditsModal) {
    relatedCreditsModal.style.opacity = "0";
    setTimeout(function () {
      relatedCreditsModal.style.visibility = "hidden";
    }, 200);
  } else if (requiredMathModal != null && event.target == requiredMathModal) {
    requiredMathModal.style.opacity = "0";
    setTimeout(function () {
      requiredMathModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == requiredEnglishModal) {
    requiredEnglishModal.style.opacity = "0";
    setTimeout(function () {
      requiredEnglishModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == majorCreditsModal) {
    majorCreditsModal.style.opacity = "0";
    setTimeout(function () {
      majorCreditsModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == coopPlacementsModal) {
    coopPlacementsModal.style.opacity = "0";
    setTimeout(function () {
      coopPlacementsModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == SPEModal) {
    SPEModal.style.opacity = "0";
    setTimeout(function () {
      SPEModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == experientialLearningsModal) {
    experientialLearningsModal.style.opacity = "0";
    setTimeout(function () {
      experientialLearningsModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == reachAheadsModal) {
    reachAheadsModal.style.opacity = "0";
    setTimeout(function () {
      reachAheadsModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == electiveCertificationsModal) {
    electiveCertificationsModal.style.opacity = "0";
    setTimeout(function () {
      electiveCertificationsModal.style.visibility = "hidden";
    }, 200);
  } else if (event.target == compulsoryCertificationsModal) {
    compulsoryCertificationsModal.style.opacity = "0";
    setTimeout(function () {
      compulsoryCertificationsModal.style.visibility = "hidden";
    }, 200);
  }
}