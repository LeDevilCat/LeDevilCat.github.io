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
    img.addEventListener("click", function () {
        let parent = this.closest(".gallery-item");

        // Extract all images from data-images attribute
        if (parent.dataset.images) {
            currentImages = parent.dataset.images.split(",").map(image => image.trim());
        } else {
            currentImages = [this.dataset.src]; // Fallback to single image
        }

        currentIndex = currentImages.indexOf(this.dataset.src);
        if (currentIndex === -1) currentIndex = 0; // Default to first image if not found

        // Show/hide navigation arrows based on image count
        updateNavigationVisibility();

        // Open modal with first image
        modal.style.display = "flex";
        showContentFromCurrentIndex();
    });
});

// Function to display content based on type (image/video)
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

// Function to display current image/video
function showContentFromCurrentIndex() {
    if (currentImages.length === 0) return; // Prevent errors if no images exist

    let src = currentImages[currentIndex];
    let type = src.endsWith(".mp4") || src.endsWith(".webm") ? "video" : "image"; // Determine type by extension

    showContent(type, src);
    captionText.textContent = `Image ${currentIndex + 1} of ${currentImages.length}`;
}

// Function to show/hide navigation arrows
function updateNavigationVisibility() {
    if (currentImages.length <= 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
}

// Navigate to previous image
prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        showContentFromCurrentIndex();
    }
});

// Navigate to next image
nextBtn.addEventListener("click", function () {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        showContentFromCurrentIndex();
    }
});

// Close modal
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalIframe.src = ""; // Stop video when closing the modal
});

console.log("Script for modal functionality loaded successfully.");
