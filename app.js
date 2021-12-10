// animation effect

const dropDownMenu = document.querySelector('#mobile-menu')
const dropDownMenuLinks = document.querySelector('.navbar__menu')

dropDownMenu.addEventListener('click', function() {
  dropDownMenu.classList.toggle('is-active')
  dropDownMenuLinks.classList.toggle('active')
});



// SLIDE SHOW ANIMATION
function imageGallery(){
  const highlight = document.querySelector('.gallery__highlight');
  const previews = document.querySelectorAll('.room__preview img');

  previews.forEach(preview => {
    preview.addEventListener('click', function() {
        const smallSrc = this.src
        const bigSrc = smallSrc.replace('preview','full')
        highlight.src = bigSrc;
        previews.forEach(preview => preview.classList.remove('room__active'));
        preview.classList.add('room__active');
      });
  });
}

imageGallery();

