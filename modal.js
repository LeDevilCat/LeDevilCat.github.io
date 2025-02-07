    // 1. Select the HTML elements we need
const modal = document.getElementById("imageModal");  // Modal window
const modalImg = document.getElementById("modalImage");  // Image inside the modal
const captionText = document.getElementById("caption");  // Caption text
const closeBtn = document.querySelector(".close");  // Close button

// 2. Find all images in the gallery
const images = document.querySelectorAll(".gallery-item img");

// 3. Add an event listener to each image
images.forEach(img => {
    img.addEventListener("click", function() {
        modalImg.src = this.src;  // Set the modal image source to the clicked image source
        modal.style.display = "flex";  // Show the modal window
        captionText.textContent = this.alt;  // Show the image alt text as the caption
    });
});

// 4. Close the modal when the X button is clicked
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";  // Hide the modal
});

// 5. Close the modal when the user clicks outside the modal
modal.addEventListener("click", function(event) {
    if (event.target === modal) {  // If the user clicks the modal background (not the image)
        modal.style.display = "none";  // Hide the modal
    }
});
