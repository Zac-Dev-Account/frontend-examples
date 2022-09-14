// PAGINATION START
const BATCH_SIZE = 5;
var CURRENT_PAGE = 1;

// ToDo: Get from table-data
var MAX_PAGE = setMaxPage();

// Pagination Selectors
const CHEVRON_LEFT = document.querySelector("#chevron-left");
const CHEVRON_RIGHT = document.querySelector("#chevron-right");
const CHEVRON_LEFT_END = document.querySelector("#chevron-left-end");
const CHEVRON_RIGHT_END = document.querySelector("#chevron-right-end");

const PAGE_NUMBER_TEXT = document.querySelector("#page-number-text");
const BATCH_NUMBER_TEXT = document.querySelector("#batch-number-text");

// On-Click Event Listeners
CHEVRON_LEFT.addEventListener(
    'click', () => {
        moveLeft();
    }
);

CHEVRON_RIGHT.addEventListener(
    'click', () => {
        moveRight();
    }
);

CHEVRON_LEFT_END.addEventListener(
    'click', () => {
        moveLeftEnd();
    }
);

CHEVRON_RIGHT_END.addEventListener(
    'click', () => {
        moveRightEnd();
    }
);


// Pagination Functions
function moveLeft() {
    if(CURRENT_PAGE != 1) {
        CURRENT_PAGE--;
        setPageNumberText();
        setBatchNumbersText();
        generateTableRows();
    }
};

function moveRight() {
    if(CURRENT_PAGE < MAX_PAGE) {
        CURRENT_PAGE++;
        setPageNumberText();
        setBatchNumbersText();
        generateTableRows();
    }
};

function moveLeftEnd() {
    if(CURRENT_PAGE != 1) {
        CURRENT_PAGE = 1;
        setPageNumberText();
        setBatchNumbersText();
        generateTableRows();
    }
};

function moveRightEnd() {
    if(CURRENT_PAGE < MAX_PAGE) {
        CURRENT_PAGE = MAX_PAGE;
        setPageNumberText();
        setBatchNumbersText();
        generateTableRows();
    }
};

function setMaxPage() {
    if(TABLE_DATA.length > 0) {
        return Math.ceil(TABLE_DATA.length / BATCH_SIZE)
    }
    else {
        return 1
    }
}

// Text Manipulation Functions
function setPageNumberText() {
    PAGE_NUMBER_TEXT.innerHTML = "Page " + CURRENT_PAGE + " / " + MAX_PAGE;
};

function setBatchNumbersText() {
    if(CURRENT_PAGE == 1) {
        BATCH_NUMBER_TEXT.innerHTML = CURRENT_PAGE + " - " + BATCH_SIZE;
    }
    else {
        BATCH_NUMBER_TEXT.innerHTML = (CURRENT_PAGE -1) * BATCH_SIZE + 1 + " - " + CURRENT_PAGE * BATCH_SIZE;
    }
};

// PAGINATION END


// TABLE START
const TABLE_BODY = document.querySelector(".table-body");

function generateTableRows() {
    // Clear Existing Table-Data
    TABLE_BODY.innerHTML = null;

    // Slice Data via Batch Size
    let table_data_batch = TABLE_DATA.slice( (CURRENT_PAGE -1 ) * BATCH_SIZE, CURRENT_PAGE * BATCH_SIZE);

    // Loop through and generate Row Data
    table_data_batch.forEach(
        (rowData) => {
            let row = document.createElement('div');

            // Create Row
            row.classList.add('grid-columns-7');
            TABLE_BODY.appendChild(row);

            // Date Column
            let dateCol = document.createElement('div');
            dateCol.classList.add('item-row');
            let formattedDate = formatDate(rowData.date);
            dateCol.innerHTML = "<p>" + formattedDate + "</p>";
            row.appendChild(dateCol);

            // Time Column
            let timeCol = document.createElement('div');
            timeCol.classList.add('grid-columns-3');
            row.appendChild(timeCol);

            let startCol = document.createElement('div');
            startCol.classList.add('item-row');
            startCol.innerHTML = "<p>" + rowData.start + "</p>"
            timeCol.appendChild(startCol);

            let finishCol = document.createElement('div');
            finishCol.classList.add('item-row');
            finishCol.innerHTML = "<p>" + rowData.finish + "</p>"
            timeCol.appendChild(finishCol);

            let durationCol = document.createElement('div');
            durationCol.classList.add('item-row');
            durationCol.innerHTML = "<p>" + rowData.duration + "</p>"
            timeCol.appendChild(durationCol);

            // Location Column
            let locationCol = document.createElement('div');
            locationCol.classList.add('grid-columns-2');
            row.appendChild(locationCol);

            let fromCol = document.createElement('div');
            fromCol.classList.add('item-row');
            fromCol.innerHTML = "<p>" + rowData.from + "</p>";
            locationCol.appendChild(fromCol);

            let toCol = document.createElement('div');
            toCol.classList.add('item-row');
            toCol.innerHTML = "<p>" + rowData.to + "</p>";
            locationCol.appendChild(toCol);

            // Conditions Column
            let conditionsCol = document.createElement('div');
            conditionsCol.classList.add('grid-columns-3');
            row.appendChild(conditionsCol);


            let roadCol = document.createElement('div');
            roadCol.classList.add('item-row');
            roadCol.innerHTML = "<p>" + rowData.road + "</p>";
            conditionsCol.appendChild(roadCol);

            let weatherCol = document.createElement('div');
            weatherCol.classList.add('item-row');
            weatherCol.innerHTML = "<p>" + rowData.weather + "</p>";
            conditionsCol.appendChild(weatherCol);

            let trafficCol = document.createElement('div');
            trafficCol.classList.add('item-row');
            trafficCol.innerHTML = "<p>" + rowData.traffic + "</p>";
            conditionsCol.appendChild(trafficCol);

            // Signature Column
            let learnerSignatureCol = document.createElement('div');
            learnerSignatureCol.classList.add('item-row');
            learnerSignatureCol.innerHTML = "<p>" + rowData.learnerSignature + "</p>";
            row.appendChild(learnerSignatureCol);

            // Qualified Driver Column
            let qsdCol = document.createElement('div');
            qsdCol.classList.add('grid-columns-3');
            row.appendChild(qsdCol);

            let qsdName = document.createElement('div');
            qsdName.classList.add('item-row');
            qsdName.innerHTML = "<p>" + rowData.qsdFullName + "</p>"
            qsdCol.appendChild(qsdName);

            let qsdLicense = document.createElement('div');
            qsdLicense.classList.add('item-row');
            qsdLicense.innerHTML = "<p>" + rowData.qsdLicense + "</p>"
            qsdCol.appendChild(qsdLicense);

            let qsdSignature = document.createElement('div');
            qsdSignature.classList.add('item-row');
            qsdSignature.innerHTML = "<p>" + rowData.qsdSignature + "</p>"
            qsdCol.appendChild(qsdSignature);

            // Edit / Delete Button Column
            let buttonsCol = document.createElement('div');
            buttonsCol.classList.add('grid-columns-2');
            row.appendChild(buttonsCol);

            let editButtonItem = document.createElement('div');
            editButtonItem.classList.add('item-row');
            buttonsCol.appendChild(editButtonItem);

            let deleteButtonItem = document.createElement('div');
            deleteButtonItem.classList.add('item-row');
            buttonsCol.appendChild(deleteButtonItem);

            let editButton = document.createElement('button');
            editButton.classList.add('edit-button');
            editButton.innerHTML = "<span>Edit</span>";
            editButtonItem.appendChild(editButton);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-button');
            deleteButton.innerHTML = "<span>Delete</span>";
            deleteButtonItem.appendChild(deleteButton);

            // Add listener to Edit Button
            editButton.addEventListener('click', () => {
                entryModal.showModal();
            })

            // Add listener to Delete Button
            deleteButton.addEventListener('click', () => {
                deleteModal.showModal();
            })
        }
    )
};

// Utility Methods
function setStatusIndicator() {

};

function deleteRow() {

};

function updateRow() {

};

function formatDate(date) {
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
};


// TABLE END

// MODAL START
const entryModal = document.querySelector('.entry-modal');
const deleteModal = document.querySelector('.delete-modal');
const addNewEntryButton = document.querySelector('.submit-button');
const closeEntryButton = document.querySelector('#close-entry-button');
const closeDeleteButton = document.querySelector('#close-delete-button');

addNewEntryButton.addEventListener('click', () => {
    entryModal.showModal();
});

closeEntryButton.addEventListener('click', () => {
    entryModal.close();
});

closeDeleteButton.addEventListener('click', () => {
    deleteModal.close();
});

// Modal - Signature Pad
const canvas = document.querySelector("canvas");
const signaturePad = new SignaturePad(canvas);

signaturePad.addEventListener("beginStroke", () => {
    console.log("Signature started");
  }, { once: true });


// Modal - Data Entry Validations


// MODAL END


// PROGRESS BAR START
const REQUIRED_DAY_HOURS = '100';
const REQUIRED_NIGHT_HOURS = '25';
const REQUIRED_TOTAL_HOURS = REQUIRED_DAY_HOURS + REQUIRED_NIGHT_HOURS;

// Play small animation celebrating completion of hours
function incrementProgressBar() {

};

function progressComplete() {

};

// PROGRESS BAR END


// INITIAL SETUP (EXEC fuctions)
setPageNumberText();
setBatchNumbersText();
generateTableRows();