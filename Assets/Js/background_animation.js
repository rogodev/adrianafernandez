const slides = document.querySelector('.slides');
const slides2 = document.querySelector('.slides2');
const totalSlides = document.querySelectorAll('.slide').length;
const totalSlides2 = document.querySelectorAll('.slide2').length;
let currentIndex1 = 0;
let currentIndex2 = 0;

function slideImages() {
    currentIndex1++;
    currentIndex2++;
    
    if (currentIndex1 === totalSlides) {
        slides.style.transition = 'none';
        slides.style.transform = 'translateX(0)';
        currentIndex1 = 0;
    } else {
        
        slides.style.transition = 'transform 1s ease-in-out';
        slides.style.transform = `translateX(-${(100/totalSlides)*currentIndex1}%)`;
    }
    if (currentIndex2 === totalSlides2) {


        slides2.style.transition = 'none';
        slides2.style.transform = 'translateX(0)';
        currentIndex2 = 0;
    } 
    else {
        
        slides2.style.transition = 'transform 1s ease-in-out';
        slides2.style.transform = `translateX(-${(100/totalSlides2)*currentIndex2}%)`;
    }
}


setTimeout(() => {
    setInterval(slideImages, 3000);
}, 4000);

