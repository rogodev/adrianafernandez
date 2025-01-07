const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function slideImages() {
    currentIndex++;
    
    if (currentIndex === totalSlides) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        currentIndex = 0;
    } else {
        
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = `translateX(-${(100/9)*currentIndex}%)`;
    }
}



setInterval(slideImages, 3000);
