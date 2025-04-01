function ApplyErrorImage() {
    document.querySelectorAll("img").forEach((img) => {

        // define the error image
        const ERRORimg = "/PHOTOS/PLACEHOLDER_no_image.svg";

        // if no src link is set, set the error image
        if (!img.src || img.src === "" || img.src.includes("undefined")) {
            img.src = ERRORimg;
        }

        // if image fails to load, set the error image
        img.onerror = function () {
            this.onerror = null; // Prevent infinite loop if placeholder fails
            this.src = ERRORimg;
        };

        // Force reloading the image to trigger onerror for broken links
        if (img.complete && img.naturalWidth === 0) {
            img.onerror(); // Manually trigger error event
        }
    });
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", ApplyErrorImage);

console.log("Script for applying error image loaded successfully.");