 AOS.init();
 AOS.init({
   disable: 'mobile'
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

 const navItems = document.querySelector('#navItems');
 const menuBackground = document.querySelector('#menuBackground');
 const body = document.body;
 const menuButton = document.querySelector('.menu-btn');
 const navBrand = document.querySelector("#navBrand");
 const dropdown = document.body.querySelector('.dropdown');
 const dropdownItems = document.body.querySelector('.dropdown-items');

 let menuOpen = false;
 let dropdownOpen = false;

 const openMenu = () => {
   menuOpen = true;
   darkModeToggle.style.display = "absolute";
   menuButton.classList.add('open');
   navItems.style.display = "block";
   menuBackground.style.display = "block";
   setTimeout(function () {
     navItems.style.opacity = "0.9";
     menuBackground.style.opacity = "0.9";
   }, 1);
   body.style.maxHeight = "100vh";
   body.style.overflowY = "hidden";
 }

 const closeMenu = () => {
   menuOpen = false;
   dropdownOpen = false;
   darkModeToggle.style.display = "fixed";
   menuButton.classList.remove('open');
   navItems.style.opacity = "0";
   menuBackground.style.opacity = "0";
   setTimeout(function () {
     menuBackground.style.display = "none";
     navItems.style.display = "none";
     dropdownItems.style.display = "none";
   }, 200);
   body.style.maxHeight = "none";
   body.style.overflowY = "auto";
 };

 menuButton.addEventListener('click', () => {
   if (!menuOpen) {
     openMenu();
   } else {
     closeMenu();
     dropdownItems.classList.remove('open-dropdown');
   }
 });

 const sectorsDropdown = document.querySelector('#sectorsDropdown');

 sectorsDropdown.addEventListener('click', () => {
   if (!dropdownOpen && sectorsDropdown.innerText == dropdown.innerText) {
     if (window.innerWidth <= 992) {
       dropdownItems.classList.add('open-dropdown');
       dropdownItems.style.opacity = "1";
       dropdownItems.style.display = "block";
       dropdownOpen = true;
     } else {
       dropdownItems.style.opacity = "1";
     }
   } else {
     dropdownItems.classList.remove('open-dropdown');
     dropdownItems.style.opacity = "0";
     dropdownItems.style.display = "none";
     dropdownOpen = false;
   }
 });

 window.addEventListener("resize", function () {
   if (menuOpen == true) {
     darkModeToggle.style.display = "fixed";
     menuButton.classList.remove('open');
     navItems.style.opacity = "0";
     navItems.style.display = "none";
     menuBackground.style.opacity = "0";
     menuBackground.style.display = "none";
     dropdownItems.style.opacity = "0";
     dropdownItems.style.display = "none";
     body.style.overflowY = "auto";
     body.style.maxHeight = "none";
     dropdownItems.classList.remove('open-dropdown');
   }
   navItems.style.display = "none";
   if (window.innerWidth > 992) {
     navItems.style.display = "flex";
     navItems.style.opacity = "1";
     dropdownItems.style.display = "block";
   } else {
     navItems.style.opacity = "0";
     navItems.style.display = "none";
     menuBackground.style.opacity = "0";
     menuBackground.style.display = "none";
     dropdownItems.style.opacity = "0";
     dropdownItems.style.display = "none";
   }
   menuOpen = false;
   dropdownOpen = false;
 });