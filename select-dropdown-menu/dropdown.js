let dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
})

function show(selection) {
    document.querySelector('.text-box').value = selection;
    
};