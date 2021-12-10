const modalButtons = document.querySelectorAll('.requirement-question-button');
modalButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const id = btn.getAttribute('open-id');
    var modal = document.querySelector(`[modal-id="${id}"]`);
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
  });
});

const closeButtons = document.querySelectorAll('.close-modal-button');
closeButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const id = btn.getAttribute('close-id');
    var modal = document.querySelector(`[modal-id="${id}"]`);
    modal.style.opacity = "0";
    setTimeout(function () {
      modal.style.visibility = "hidden";
    }, 200);
  });
});

const modals = document.querySelectorAll('.modal');
window.onclick = function (e) {
  modals.forEach(
    function (modal) {
      if (e.target == modal) {
        modal.style.opacity = "0";
        setTimeout(function () {
          modal.style.visibility = "hidden";
        }, 200);
      }
    }
  );
}