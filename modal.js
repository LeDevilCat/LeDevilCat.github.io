// choose html element for modal
const modal = document.getElementById("imageModal"); // modal window
const modalImg = document.getElementById("modalImg"); // modal image
const captionText = document.getElementById("caption"); // caption text
const closeBTN = document.querySelector(".close"); // close button


//find all images in the gallery
const images = document.querySelectorAll(".gallery-item img");


// loop through all images and add event listener
images.forEach((image) => {
    image.addEventListener("click", function() => {
        modal.style.display = flex; //show modal
        modalImg.src = this.src; // set modal image for clicked image source
        captionText.textContent = this.alt; // show image alt text as caption
    });
});


// close modal when close button is clicked
closeBTN.addEventListener("click", function() => {
    modal.style.display = none; // hide modal
});


// close modal when clicked outside of the modal
modal.addEventListener("click", function(event) => {
    if (event.target === modal) { // if clicked element is modal background (not image)
        modal.style.display = none; // hide modal
    }
});