// Query Selectors
const toggleClick = document.querySelector('.toggle-click');
const background = document.querySelector('.background');

// Add On-Change Event to Input Checkbox
toggleClick.addEventListener(   
    'change', (e) => {
        if(e.target.checked) {
            background.style.backgroundColor = 'var(--night-colour)';
        }
        else {
            background.style.backgroundColor = 'var(--day-colour)';
        }
    }
)