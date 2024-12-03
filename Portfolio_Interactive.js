/*

let currentSlide = 0; // Initial slide is 0

const slides = document.querySelectorAll('.project'); // Select all project elements
const totalSlides = slides.length; // Get the total number of slides

// Function to move slides based on the button clicked
function moveSlide(step) {
    currentSlide += step; // Increase or decrease the currentSlide by the step (+1 or -1)

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // If at the first slide, loop back to the last slide
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // If at the last slide, loop back to the first slide
    }

    // Move the carousel by updating its transform property
    const offset = -currentSlide * 100; // Calculate the offset for the slide transition
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
} */