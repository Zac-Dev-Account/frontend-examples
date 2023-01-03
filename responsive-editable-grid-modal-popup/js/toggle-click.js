// Query Selectors
const TOGGLE_CLICK = document.querySelector('.toggle-click');
const TOGGLE_CIRCLE = document.querySelector('.toggle-circle');
const BACKGROUND_IMAGE = document.querySelector('.background-image');
// const BODY_TITLE = document.querySelector('.body-title');

const DAY_TITLE = "Daytime";
const NIGHT_TITLE = "Nighttime";
var IS_INITIAL_LOAD = true;

// Add On-Change Event to Input Checkbox
TOGGLE_CLICK.addEventListener(   
    'change', (e) => {

        // BODY_TITLE.classList.remove('body-title');
        // BODY_TITLE.classList.add('hidden');

        // BACKGROUND_IMAGE.classList.remove('body-title');
        BACKGROUND_IMAGE.classList.add('hidden');

        if(e.target.checked) {

        }
        else {

        }
    }
);

TOGGLE_CIRCLE.addEventListener(
    'transitionstart', (e) => {
        if(TOGGLE_CLICK.checked) {
            BACKGROUND_IMAGE.classList.add('background-image');
            BACKGROUND_IMAGE.style.backgroundImage = "url(./assets/night-background.png)";
        }
        else {
            BACKGROUND_IMAGE.classList.add('background-image');
            BACKGROUND_IMAGE.style.backgroundImage = "url(./assets/day-background.png)";
        }
        BACKGROUND_IMAGE.classList.remove('hidden');
    }
);

BACKGROUND_IMAGE.addEventListener(
    'animationend', (e) => {
        if(TOGGLE_CLICK.checked) {
            // setBodyTitle(BODY_TITLE, false);
        }
        else {
            // setBodyTitle(BODY_TITLE, true);
        }
        
        // BODY_TITLE.classList.remove('hidden');
        // BODY_TITLE.classList.add('body-title');
    }
);

function setBodyTitle(bodyTitle, isDay) {
    if(isDay) {
        bodyTitle.style.color = "var(--night-text-colour)";
        bodyTitle.style.fontFamily = 'Aha-Wow, sans-serif';
        bodyTitle.innerHTML = "Day Hours";
    }
    else {
        bodyTitle.style.color = "var(--day-text-colour)";
        bodyTitle.style.fontFamily = 'Cipitillo, sans-serif';
        bodyTitle.innerHTML = 'Night Hours';
    }
}

function setContainer() {

}

function setFont(element, isDay) {
    // Set Element Font depending on Day Type
}

function setColour(element, isDay) {
    // Set Element Colour depending on Day Type
}