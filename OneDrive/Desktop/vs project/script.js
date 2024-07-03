let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("bike-slide");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment slide index
    slideIndex++;
    
    // Reset slide index if end of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 3000);
}

