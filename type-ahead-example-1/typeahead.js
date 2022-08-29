// Query Selectors
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggestBox = searchWrapper.querySelector(".autocom-box");

// Event occurs when key is released
// Throttle inputs in a Production App
// Required for Cost & Performance, i.e Address Search API
// Would require state management via Redux or Angular Service in Prod

inputBox.onkeyup = (e) => {
    let inputData = e.target.value;
    let filteredSuggestions = [];
    if(inputData) {

        // Filter out all entries that do not
        // start with inputData value
        filteredSuggestions = suggestions.filter(
            (suggestion) => {
                // ToDo: Possibly use a Regex for better filtering?
                return suggestion.toLocaleLowerCase().startsWith( inputData.toLocaleLowerCase() );
            }
        )

        filteredSuggestions = filteredSuggestions.map(
            (suggestion) => {
                return '<li>' + suggestion + '</li>';
            }
        )

        searchWrapper.classList.add("active");
        showSuggestions(filteredSuggestions);

        let allList = suggestBox.querySelectorAll("li");
        for( let i = 0; i < allList.length; i++ ) {
            // Adding On Click attribute
            allList[i].setAttribute("onClick", "select(this)");
        }
        
    }

    else {
        searchWrapper.classList.remove("active");
    }

    if( filteredSuggestions.length <= 0 ) {
        searchWrapper.classList.remove("active");
    }


};

function select(element) {
    inputBox.value = element.textContent;
    // Execute search function
}

function showSuggestions(list) {
    let listData = null;
    if(!list.length) {
        let inputValue = inputBox.value;
        listData = '<li>' + inputValue + '</li>';
    }
    else {
        listData = list.join('');
    }

    suggestBox.innerHTML = listData;
}