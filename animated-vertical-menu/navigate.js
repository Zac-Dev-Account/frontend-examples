let list = document.querySelectorAll('li');

// Set Active status on Mouse Over.
// Applies a loop to assign function to onmouseover property (removes active initially)
// re-applies to new moused over element.
for( let i=0; i < list.length; i++) {
    list[i].onmouseover = () => {
        let j = 0;
        while (j < list.length) {
            list[j++].className = 'list';
        }

        list[i].className = 'list active';
    }
}

// Change body colour via indicator change

list.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
        let body = document.querySelector('body');
        let colour = event.target.getAttribute('data-colour');
        console.log(colour);
        body.style.backgroundColor = colour;
    })
})