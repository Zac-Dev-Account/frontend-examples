const accordion = document.getElementsByClassName('content-box');

// This only works for function constructors
// not anonymous functions
for( i = 0; i < accordion.length; i++ ) {
    accordion[i].addEventListener(
        'click', function() {
            this.classList.toggle('active');
        }
    )
}