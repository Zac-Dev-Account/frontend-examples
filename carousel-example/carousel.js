// console.log("TEST");

const track = document.querySelector('.carousel__track');
// Returns an array of Element objects
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

// Arrange slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = (slideWidth * index).toString() + 'px';
}

const moveToSlide = (track, currentSlide, targetSlide) => {
    // Target slide will always gain the 'current-slide' class
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // Swap current slide attribute over
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

slides.forEach(
    (slide, index) => {
        setSlidePosition(slide, index); 
    }
)

// When i click left, move slides to the left
prevButton.addEventListener('click', event => {
    // get current slide
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
})

// When i click right, move slides to the right
nextButton.addEventListener('click', event => {
    // get current slide
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})

// When i click the nav indicators move to that slide
dotsNav.addEventListener('click', event => {
    // What indicator was clicked on 
    const targetDot = event.target.closest('button');

    // will pick up button if i click on element inside of div
    // Stop if we did not click on a button
    if(!targetDot) {
        return;
    }

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');

    // Loop through all items in the array
    // Returning index number of target dot
    const targetIndex = dots.findIndex(dot => {
        return dot === targetDot;
    })
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

})