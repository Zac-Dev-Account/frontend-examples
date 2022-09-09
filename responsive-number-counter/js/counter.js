let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

// Number counter example
// Executed on-load
// ToDo: Could be tied to an intersection observer instead
valueDisplays.forEach(
    valueDisplay => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));

        let duration = Math.floor(interval / endValue);
        let counter = setInterval(
            () => {
                startValue += 1;
                valueDisplay.textContent = startValue;

                if(startValue == endValue) {
                    clearInterval(counter);
                }
            },
            duration

        )
    }
);