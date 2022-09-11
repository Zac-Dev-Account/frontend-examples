let number = document.getElementById("number");
let circle = document.querySelector("circle");

let counter = 0;
let currentStrokes = 0;
// 100%
let complete = 100;
// 2 seconds
let duration = 3000;
let totalStrokes = 471;

// every 20ms update
let interval = (duration / complete);
let strokeIncrement = (totalStrokes / complete);


let timer = setInterval(
    () => {
        counter ++;
        number.innerHTML = counter + "%";
        currentStrokes += strokeIncrement;
        console.log(currentStrokes);
        circle.style.strokeDashoffset = totalStrokes - currentStrokes;
        
        if(counter >= complete) {
            clearInterval(timer);
        }
    },
    interval
)

// max strokes 472
// max count 100
// duration 2000
// update interval