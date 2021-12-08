// animation effect

const dropDownMenu = document.querySelector('#mobile-menu')
const dropDownMenuLinks = document.querySelector('.navbar__menu')

dropDownMenu.addEventListener('click', function() {
  dropDownMenu.classList.toggle('is-active')
  dropDownMenuLinks.classList.toggle('active')
})

// gallery animation 

const modal = document.querySelector(".modal");
const imagePreviews = document.querySelectorAll(".gallery img")
const imageOriginal = document.querySelector(".full__image")
const caption = document.querySelector(".caption")

imagePreviews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        imageOriginal.classList.add("open");

        const originalSrc = preview.getAttribute("data-original");
        imageOriginal.src = `/images/full/${originalSrc}`;

        const altText = preview.alt;
        caption.textContent = altText;
    });
})

modal.addEventListener('click', (e) => {
   if (e.target.classList.contains("modal")) {
     modal.classList.remove("open");
     imageOriginal.classList.add("open");

   }
});