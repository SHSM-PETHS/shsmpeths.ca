const navItems = document.querySelector('#navItems');
const background = document.querySelector('#menuBackground');
const body = document.body;
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
const dropdown = document.body.querySelector('.dropdown');
const dropdownItems = document.body.querySelector('.dropdown-items');
let dropdownOpen = false;
const navBrand = document.querySelector("#navBrand");
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navItems.classList.add('open-nav-items');
    background.classList.add('open-menu-background');
    background.style.display = "block";
    body.classList.add('no-scrolling');
    menuOpen = true;
    navBrand.style.opacity = 0;;
    navItems.style.display = "block";
  } else {
    menuBtn.classList.remove('open');
    navItems.classList.remove('open-nav-items');
    background.classList.remove('open-menu-background');
    setTimeout(function () {
      background.style.display = "none";
      navItems.style.display = "none";
    }, 200);
    body.classList.remove('no-scrolling');
    menuOpen = false;
    dropdownOpen = false;
    dropdownItems.classList.remove('open-dropdown');
    navBrand.style.opacity = 1;
  }
})

window.addEventListener("resize", function () {
  if (window.innerWidth > 992) {
    if (menuOpen === true) {
      menuBtn.classList.remove('open');
      navItems.classList.remove('open-nav-items');
      background.classList.remove('open-menu-background');
      setTimeout(function () {
        background.style.display = "none";
      }, 200);
      body.classList.remove('no-scrolling');
      menuOpen = false;
      dropdownOpen = false;
      dropdownItems.classList.remove('open-dropdown');
      navBrand.style.opacity = 1;
    }
    dropdownOpen = false;
    dropdownItems.classList.remove('open-dropdown');
    navItems.style.display = "flex";
  } else {
    navItems.style.display = "block";
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