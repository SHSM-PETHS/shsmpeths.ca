const navItems = document.querySelector('#navItems');
const background = document.querySelector('#menuBackground');
const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const dropdown = document.body.querySelector('.dropdown');
const dropdownItems = document.body.querySelector('.dropdown-items');
let dropdownOpen = false;
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
    dropdownOpen = false;
    dropdownItems.classList.remove('open-dropdown');
  }
})

window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    if (menuOpen === true) {
      menuBtn.classList.remove('open');
      navItems.classList.remove('open-nav-items');
      background.classList.remove('open-menu-background');
      body.classList.remove('no-scrolling');
      menuOpen = false;
    }
    dropdownOpen = false;
    dropdownItems.classList.remove('open-dropdown');
  }
});

document.addEventListener('click', function (e) {
  if (!dropdownOpen && e.target.innerText == dropdown.innerText && window.innerWidth <= 992) {
    dropdownItems.classList.add('open-dropdown');
    dropdownOpen = true;
  } else {
    dropdownItems.classList.remove('open-dropdown');
    dropdownOpen = false;
  }
});

let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#darkModeToggle');

const enableDarkMode = () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  localStorage.setItem('darkMode', 'enabled');
  changeIconToDark();
}

const disableDarkMode = () => {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('darkMode', 'disabled');
  changeIconToLight();
}

const changeIconToDark = () => {
  document.getElementById("darkModeIcon").src = "images/icons/moon.svg";
}
const changeIconToLight = () => {
  document.getElementById("darkModeIcon").src = 'images/icons/sun-1.svg';
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});