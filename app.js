// animation effect

const dropDownMenu = document.querySelector('#mobile-menu')
const dropDownMenuLinks = document.querySelector('.navbar__menu')

dropDownMenu.addEventListener('click', function() {
  dropDownMenu.classList.toggle('is-active')
  dropDownMenuLinks.classList.toggle('active')
})