const slides = document.querySelectorAll('.slides img'); // Select all images
const dots = document.querySelectorAll('.dots .dot'); // Select all dots
let currentIndex = 0; // Track the current image
let slideInterval; // To store the interval function

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0'; // Show the current image, hide others
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index); // Activate the corresponding dot
    });
}

// Function to move to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first image after the last
    showSlide(currentIndex);
}

// Function to handle dot clicks
function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    resetInterval(); // Reset the auto-slide interval when a dot is clicked
}

// Function to reset the interval for auto-sliding
function resetInterval() {
    clearInterval(slideInterval); // Clear the current interval
    slideInterval = setInterval(nextSlide, 3000); // Restart the interval with a 3-second delay
}

// Attach event listeners to each dot for manual navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToSlide(index); // Go to the respective image when a dot is clicked
    });
});

// Start the auto-slide on page load
slideInterval = setInterval(nextSlide, 3000);

// Initialize the first slide
showSlide(currentIndex);
