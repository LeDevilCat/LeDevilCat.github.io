// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalIframe = document.createElement("iframe"); // Create iframe element
modalIframe.style.display = "none"; // Initially hide the iframe
modalIframe.setAttribute("allowfullscreen", ""); // Allow fullscreen for videos
modal.appendChild(modalIframe); // Append iframe to modal
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevImage");
const nextBtn = document.getElementById("nextImage");

// Store images for browsing
let currentImages = [];
let currentIndex = 0;

// Handle clicking on gallery images
document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", function() {
        // Get parent div and extract images
        let parent = this.closest(".gallery-item");
        currentImages = parent.dataset.images.split(",").map(image => image.trim()); // Split and remove spaces
        currentIndex = currentImages.indexOf(this.dataset.src); // Set current index to the clicked image

        // Show modal with first image
        modal.style.display = "flex";
        showContent(this.dataset.type, this.dataset.src);
        captionText.textContent = this.alt;
    });
});

// Function to show content based on type
function showContent(type, src) {
    if (type === "video") {
        modalImg.style.display = "none"; // Hide image
        modalIframe.style.display = "block"; // Show iframe
        modalIframe.src = src; // Set iframe source
    } else {
        modalImg.style.display = "block"; // Show image
        modalIframe.style.display = "none"; // Hide iframe
        modalImg.src = src; // Set image source
    }
}

// Navigate to previous image
prevBtn.addEventListener("click", function() {
    if (currentIndex > 0) {
        currentIndex--;
        showContentFromCurrentIndex();
    }
});

// Navigate to next image
nextBtn.addEventListener("click", function() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        showContentFromCurrentIndex();
    }
});

// Function to show content from current index
function showContentFromCurrentIndex() {
    const currentImage = document.querySelector(`img[data-src="${currentImages[currentIndex]}"]`);
    showContent(currentImage.dataset.type, currentImages[currentIndex]);
    captionText.textContent = currentImage.alt;
}

// Close modal
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
    modalIframe.src = ""; // Stop the video when closing the modal
});

console.log("Modal script loaded successfully.");