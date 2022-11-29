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
        return Math.ceil(TABLE_DATA.length / BATCH_SIZE);
    }
    else {
        return 1;
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

function createTableDataBatch() {
    return TABLE_DATA.slice( (CURRENT_PAGE -1 ) * BATCH_SIZE, CURRENT_PAGE * BATCH_SIZE);
}

function generateTableRows() {
    // Clear Existing Table-Data
    TABLE_BODY.innerHTML = null;

    // Slice Data via Batch Size
    let table_data_batch = createTableDataBatch();

    // Loop through and generate Row Data
    table_data_batch.forEach(
        (rowData, index) => {
            generateRow(rowData, index);
        }
    )
};

// Create rows
function generateRow(rowData, index) {
    let row = document.createElement('div');

    // Create Row
    row.classList.add('grid-columns-7');
    row.classList.add('selectable-row');
    row.id = "row-" + index;
    
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

    // Start Column
    let startCol = document.createElement('div');
    startCol.classList.add('item-row');
    startCol.innerHTML = "<p>" + formatAnalogTime(rowData.start) + "</p>";
    timeCol.appendChild(startCol);

    // Finish Column
    let finishCol = document.createElement('div');
    finishCol.classList.add('item-row');
    finishCol.innerHTML = "<p>" + formatAnalogTime(rowData.finish) + "</p>";
    timeCol.appendChild(finishCol);

    // Duration Column
    let durationCol = document.createElement('div');
    durationCol.classList.add('item-row');
    durationCol.innerHTML = "<p>" + rowData.duration + "</p>";
    timeCol.appendChild(durationCol);

    // Location Column
    let locationCol = document.createElement('div');
    locationCol.classList.add('grid-columns-2');
    row.appendChild(locationCol);

    // From Column
    let fromCol = document.createElement('div');
    fromCol.classList.add('item-row');
    fromCol.innerHTML = "<p>" + rowData.from + "</p>";
    locationCol.appendChild(fromCol);

    // To Column
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
    qsdName.innerHTML = "<p>" + rowData.qsdFullName + "</p>";
    qsdCol.appendChild(qsdName);

    let qsdLicense = document.createElement('div');
    qsdLicense.classList.add('item-row');
    qsdLicense.innerHTML = "<p>" + rowData.qsdLicense + "</p>";
    qsdCol.appendChild(qsdLicense);

    let qsdSignature = document.createElement('div');
    qsdSignature.classList.add('item-row');
    qsdSignature.innerHTML = "<p>" + rowData.qsdSignature + "</p>";
    qsdCol.appendChild(qsdSignature);

    // Add event listener to selectable row
    row.addEventListener( 'click', () => {
            // Set Entry Id
            let entryIdElement = ENTRY_MODAL.querySelector('#entry-id');
            entryIdElement.innerHTML = rowData.id;

            // Set Modal Status
            MODAL_STATUS = STATUS_ENTRY;

            // Show Delete Button
            DELETE_ENTRY_BUTTON.style.display = null;

            // Populate Modal values
            populateFormValues(rowData);

            // Show Modal
            ENTRY_MODAL.showModal();
        }
    )
}

// Utility Methods
function setStatusIndicator() {

};

function formatInputTime(date) {
    // Returns a formatted String
    let hours = date.getHours();
    let minutes = date.getMinutes();

    return hours + ":" + formatMinutes(minutes);
}

function formatAnalogTime(date) {
    // Returns a formatted String
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if( hours > 12 ) {
        return hours - 12 + ":" + formatMinutes(minutes) + " PM";
    }
    else {
        return hours + ":" + formatMinutes(minutes) + " AM";
    }
}

function formatMinutes(minutes) {
    // Returns a formatted String
    if ( minutes < 10 ) {
        return "0" + minutes
    }
    else {
        return minutes
    }
}

// Deletes an existing row from HTML
function deleteRow(rowId) {
    // Delete data from Model
    rowId = parseInt(rowId);
    for(let i = 0; i < TABLE_DATA.length; i++) {
        if(TABLE_DATA[i].id === rowId) {
            TABLE_DATA.splice(i, 1);
            break;
        }
    };
    // Re-generate columns for View
    MAX_PAGE = setMaxPage();

    // Reset Current page if necessary
    if( MAX_PAGE < CURRENT_PAGE) {
        CURRENT_PAGE = MAX_PAGE;
    }

    setPageNumberText();
    setBatchNumbersText();
    generateTableRows();
};

// Updates existing row in HTML
function updateRow(rowId) {

};

function addRow() {
    // Create new row

};

function formatDate(date) {
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
};


// TABLE END

// MODAL START
// Modal Statuses
const STATUS_CANCEL = "modal_cancel";
const STATUS_DELETE = "modal_delete";
const STATUS_ENTRY = "modal_entry";
const STATUS_CLOSED = "closed";
// Current Status
var MODAL_STATUS = STATUS_ENTRY;

// Entry Modal
const ENTRY_MODAL = document.querySelector('#entry-modal');
const ENTRY_MODALInputFields = ENTRY_MODAL.querySelectorAll('.modal-input');

const ADD_NEW_ENTRY_BUTTON = document.querySelector('.submit-button');
const MODAL_BODY = ENTRY_MODAL.querySelector('.modal-body');
const CLOSE_ICON = ENTRY_MODAL.querySelector('.close-icon');
const CLOSE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#close-entry-button');
const SAVE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#save-entry-button');
const DELETE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#delete-entry-button');

// Modal - Buttons

CLOSE_ICON.addEventListener('click', () => {
    MODAL_BODY.scrollTop = 0;
    ENTRY_MODAL.close();
    MODAL_STATUS = STATUS_CLOSED;
});

ADD_NEW_ENTRY_BUTTON.addEventListener('click', () => {
    // Hide Delete Button
    DELETE_ENTRY_BUTTON.style.display = "none";

    // Set Modal Status
    MODAL_STATUS = STATUS_ENTRY;

    ENTRY_MODAL.showModal();
});

CLOSE_ENTRY_BUTTON.addEventListener('click', () => {
    // Set Modal Status
    MODAL_STATUS = STATUS_CANCEL;

    CANCEL_MODAL.showModal();
});

SAVE_ENTRY_BUTTON.addEventListener('click', () => {
    let entryDate = dateInput.valueAsDate;

    // Create Start Date Object
    let newStartDate = getEntryDateTime(entryDate, startInput);

    // Create Finish Date Object
    let newFinishDate = getEntryDateTime(entryDate, finishInput);

    ENTRY_MODAL.close();
    MODAL_STATUS = STATUS_CLOSED;
});

DELETE_ENTRY_BUTTON.addEventListener('click', () => {
    // Set Modal Status
    MODAL_STATUS = STATUS_DELETE;

    CANCEL_MODAL.showModal();
});

// Modal - Time Inputs
let dateInput = ENTRY_MODAL.querySelector('#modal-input-date');
let startInput = ENTRY_MODAL.querySelector('#modal-input-start');
startInput.addEventListener('change', e => {
    // Update Duration (Read-Only value)
    if(startInput.value !='' && finishInput.value !== '') {
        durationInput.value = getDuration(finishInput.valueAsDate, startInput.valueAsDate) + " Minutes";;
    }
});

let finishInput = ENTRY_MODAL.querySelector('#modal-input-finish');
finishInput.addEventListener('change', e => {
    // Update Duration (Read-Only value)
    if(startInput.value !='' && finishInput.value !== '') {
        durationInput.value = getDuration(finishInput.valueAsDate, startInput.valueAsDate) + " Minutes";;
    }
});

let durationInput = ENTRY_MODAL.querySelector('#modal-input-duration');


// Modal - Dropdowns
let weatherDropdown = ENTRY_MODAL.querySelector('#weather-dropdown');
let trafficDropdown = ENTRY_MODAL.querySelector('#traffic-dropdown');
let roadDropdown = ENTRY_MODAL.querySelector('#road-dropdown');

weatherDropdown.addEventListener('click', () => {
    weatherDropdown.classList.toggle('active');
})

weatherDropdown.addEventListener('focusout', () => {
    weatherDropdown.classList.remove('active');
})

trafficDropdown.addEventListener('click', () => {
    trafficDropdown.classList.toggle('active');
})

trafficDropdown.addEventListener('focusout', () => {
    trafficDropdown.classList.remove('active');
})

roadDropdown.addEventListener('click', () => {
    roadDropdown.classList.toggle('active');
})

roadDropdown.addEventListener('focusout', () => {
    roadDropdown.classList.remove('active');
})

function dropdownSelect(selection) {
    document.querySelector('.text-box').value = selection;
    
};


// Modal - Signature Pad
const LEARNER_CANVAS = MODAL_BODY.querySelector("#learnerSignature");
const LEARNER_SIGNATURE_PAD = new SignaturePad(LEARNER_CANVAS);

const QSD_CANVAS = MODAL_BODY.querySelector("#qsdSignature");
const QSD_SIGNATURE_PAD = new SignaturePad(QSD_CANVAS);

LEARNER_SIGNATURE_PAD.addEventListener("beginStroke", () => {

    console.log("Signature started");
    
  }, { once: true });

QSD_SIGNATURE_PAD.addEventListener("beginStroke", () => {

    console.log("Signature started");

  }, { once: true });


// Modal - Data Entry Validations


// Modal - Functions
function getEntryDateTime(entryDate, entryDateTime){
    let newEntryDateTime;
    if(entryDate === null) {
        newEntryDateTime = new Date(
            null,
            null,
            null,
            entryDateTime.valueAsDate.getHours(),
            entryDateTime.valueAsDate.getMinutes()
        );
    }
    else {
        newEntryDateTime = new Date(
            entryDate.getFullYear(),
            entryDate.getMonth(),
            entryDate.getDate(),
            entryDateTime.valueAsDate.getHours(),
            entryDateTime.valueAsDate.getMinutes()
        );
    }

    return newEntryDateTime;
}

function getDuration(endDate, startDate) {
    let diff = Math.abs(endDate - startDate);
    let minutes = Math.floor((diff/1000)/60);
    return minutes
}

function populateFormValues(rowData) {
    // Loop through input fields
    // Check & match id
    // switch case to populate data correctly

    ENTRY_MODALInputFields.forEach(
        item => {
            switch(item.id) {
                // populate Date field
                case 'modal-input-date':
                    item.valueAsDate = rowData.date;
                    break;

                // populate start field
                case 'modal-input-start':
                    item.value = formatInputTime(rowData.start);
                    break;

                // populate finish field
                case 'modal-input-finish':
                    item.value = formatInputTime(rowData.finish);
                    break;

                // populate duration field
                case 'modal-input-duration':
                    console.log("TEST");
                    item.value = getDuration(rowData.finish, rowData.start) + " Minutes";
                    break;

                // populate from field
                case 'modal-input-from':
                    item.value = rowData.from;
                    break;

                // populate to field
                case 'modal-input-to':
                    item.value = rowData.to;
                    break;

                // populate to field
                case 'modal-input-road':
                    item.value = rowData.road;
                    break;

                // populate to field
                case 'modal-input-weather':
                    item.value = rowData.weather;
                    break;

                // populate to field
                case 'modal-input-traffic':
                    item.value = rowData.traffic;
                    break;

                // populate Full Name field
                case 'modal-input-full-name':
                    item.value = rowData.qsdFullName;
                    break;

                // populate License No field
                case 'modal-input-license-no':
                    item.value = rowData.qsdLicense;
                    break;

                default:
                    break;

            }
        }
    )

}

function clearFormValues() {
    // Select All Input's from body
    // Loop through inputs
    // Set value to null
    ENTRY_MODALInputFields.forEach(
        item => {
            item.value = null;
        }
    );

    // Clear Canvas
    LEARNER_SIGNATURE_PAD.clear();
    QSD_SIGNATURE_PAD.clear();
}

// Cancel Modal
const CANCEL_MODAL = document.querySelector('#cancel-modal');
const cancelYesButton = CANCEL_MODAL.querySelector('#cancel-yes-button');
const CANCEL_NO_BUTTON = CANCEL_MODAL.querySelector('#cancel-no-button');

cancelYesButton.addEventListener('click', () => {
    MODAL_BODY.scrollTop = 0;
    clearFormValues();

    switch(MODAL_STATUS) {

        case STATUS_DELETE:
            let rowId = ENTRY_MODAL.querySelector('#entry-id').innerHTML;
            deleteRow(rowId);
            break;

        default:
            break;
    }


    CANCEL_MODAL.close();
    ENTRY_MODAL.close();

    MODAL_STATUS = STATUS_CLOSED;
});

CANCEL_NO_BUTTON.addEventListener('click', () => {
    CANCEL_MODAL.close();
    MODAL_STATUS = STATUS_ENTRY;
});


// MODAL END


// PROGRESS BAR START
const DAYTIME = "daytime";
const NIGHTTIME = "nighttime";
const REQUIRED_DAY_HOURS = 60 * 60;
const REQUIRED_NIGHT_HOURS = 15 * 60;

// 8PM
const NIGHT_TIME_HOUR_START = 20;
const REQUIRED_TOTAL_HOURS = REQUIRED_DAY_HOURS + REQUIRED_NIGHT_HOURS;

const DAYTIME_PROGRESS_BAR = document.querySelector("#daytime-progress-bar");
const NIGHT_TIME_PROGRESS_BAR = document.querySelector("#nighttime-progress-bar");

// Progress Bar Event Listeners

// Play small animation celebrating completion of hours
function updateProgressBarText(progressBar, dayType) {
    let progressBarText = progressBar.querySelector(".progress-bar-text");
    let interval = 1000;
    let startValue = 0;
    
    let endValue = parseInt(getTotalMinutes(dayType)); ;

    let duration = interval / endValue;
    console.log(duration)
    let counter = setInterval(
        () => {
            startValue += 10;
            progressBarText.innerHTML = startValue;
            if(startValue == endValue) {
                clearInterval(counter);
            }
        },
        duration
    )

};

function incrementProgressBar() {

};

function progressComplete() {

};

function getTotalMinutes(dayType) {
    // return total hours before 9pm
    let totalMinutes = 0;

    TABLE_DATA.forEach(
        (tableData) => {
            switch(dayType) {

                case DAYTIME:
                    if( tableData.start.getHours() < NIGHT_TIME_HOUR_START ) {
                        totalMinutes += getDuration( tableData.finish, tableData.start );
                    }
                    break;

                case NIGHTTIME:
                    if( tableData.start.getHours() >= NIGHT_TIME_HOUR_START ) {
                        nighttimeHours += getDuration( tableData.finish, tableData.start );
                    }
                    break;

                default:
                    break;
            }
        }
    )
    return totalMinutes;
};

// PROGRESS BAR END


// INITIAL SETUP (EXEC fuctions)
setPageNumberText();
setBatchNumbersText();
generateTableRows();


// Test Examples
