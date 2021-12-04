const navItems = document.querySelector('#navItems');
const background = document.querySelector('#menuBackground');
const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navItems.classList.add('open-nav-items');
    background.classList.add('open-menu-background');
    body.classList.add('no-scrolling');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navItems.classList.remove('open-nav-items');
    background.classList.remove('open-menu-background');
    body.classList.remove('no-scrolling');
    menuOpen = false;
  }
})

window.addEventListener("resize", function () {
  if (window.innerWidth > 992 && menuOpen === true) {
    menuBtn.classList.remove('open');
    navItems.classList.remove('open-nav-items');
    background.classList.remove('open-menu-background');
    body.classList.remove('no-scrolling');
    menuOpen = false;
  }
});