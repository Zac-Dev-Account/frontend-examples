// Initial Selectors
const BODY = document.querySelector("body");
const CONTAINER = BODY.querySelector(".container");

// PAGINATION START
const BATCH_SIZE = 5;
var CURRENT_PAGE = 1;
const TABLE_ROW_LABEL_ATTR = 'row-label';

// ToDo: Get from table-data
var MAX_PAGE = setMaxPage();

// Pagination Selectors
const CHEVRON_LEFT = CONTAINER.querySelector("#chevron-left");
const CHEVRON_RIGHT = CONTAINER.querySelector("#chevron-right");
const CHEVRON_LEFT_END = CONTAINER.querySelector("#chevron-left-end");
const CHEVRON_RIGHT_END = CONTAINER.querySelector("#chevron-right-end");

const PAGE_NUMBER_TEXT = CONTAINER.querySelector("#page-number-text");
const BATCH_NUMBER_TEXT = CONTAINER.querySelector("#batch-number-text");

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
const TABLE_CONTAINER = CONTAINER.querySelector(".table-container");
const TABLE_BODY = TABLE_CONTAINER.querySelector(".table-body");

var CONTAINER_TRANSITION_FINISH = false;

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
    row.id = "row-" + rowData.id;
    
    TABLE_BODY.appendChild(row);

    // Date Column
    let dateCol = document.createElement('div');
    dateCol.classList.add('item-row');
    let formattedDate = formatDate(rowData.date);
    
    dateCol.innerHTML = "<p>" + formattedDate + "</p>";
    dateCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Date");
    
    row.appendChild(dateCol);

    // Time Column
    let timeCol = document.createElement('div');
    timeCol.classList.add('grid-columns-3');
    row.appendChild(timeCol);

    // Start Column
    let startCol = document.createElement('div');
    startCol.classList.add('item-row');
    startCol.innerHTML = "<p>" + formatAnalogTime(rowData.start) + "</p>";
    startCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Start Time");
    timeCol.appendChild(startCol);

    // Finish Column
    let finishCol = document.createElement('div');
    finishCol.classList.add('item-row');
    finishCol.innerHTML = "<p>" + formatAnalogTime(rowData.finish) + "</p>";
    finishCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Finish Time");
    timeCol.appendChild(finishCol);

    // Duration Column
    let durationCol = document.createElement('div');
    durationCol.classList.add('item-row');
    durationCol.innerHTML = "<p>" + getDuration(rowData.finish, rowData.start) + "</p>";
    durationCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Duration");
    timeCol.appendChild(durationCol);

    // Location Column
    let locationCol = document.createElement('div');
    locationCol.classList.add('grid-columns-2');
    row.appendChild(locationCol);

    // From Column
    let fromCol = document.createElement('div');
    fromCol.classList.add('item-row');
    fromCol.innerHTML = "<p>" + rowData.from + "</p>";
    fromCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "From (Location)");
    locationCol.appendChild(fromCol);

    // To Column
    let toCol = document.createElement('div');
    toCol.classList.add('item-row');
    toCol.innerHTML = "<p>" + rowData.to + "</p>";
    toCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "To (Location)");
    locationCol.appendChild(toCol);

    // Conditions Column
    let conditionsCol = document.createElement('div');
    conditionsCol.classList.add('grid-columns-3');
    row.appendChild(conditionsCol);


    let roadCol = document.createElement('div');
    roadCol.classList.add('item-row');
    roadCol.innerHTML = "<p>" + rowData.road + "</p>";
    roadCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Road Type");
    conditionsCol.appendChild(roadCol);

    let weatherCol = document.createElement('div');
    weatherCol.classList.add('item-row');
    weatherCol.innerHTML = "<p>" + rowData.weather + "</p>";
    weatherCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Weather Type");
    conditionsCol.appendChild(weatherCol);

    let trafficCol = document.createElement('div');
    trafficCol.classList.add('item-row');
    trafficCol.innerHTML = "<p>" + rowData.traffic + "</p>";
    trafficCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Traffic Type");
    conditionsCol.appendChild(trafficCol);

    // Signature Column
    let learnerSignatureCol = document.createElement('div');
    learnerSignatureCol.classList.add('item-row');
    learnerSignatureCol.innerHTML = "<p>" + rowData.learnerSignature + "</p>";
    learnerSignatureCol.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Learner Signature");
    row.appendChild(learnerSignatureCol);

    // Qualified Driver Column
    let qsdCol = document.createElement('div');
    qsdCol.classList.add('grid-columns-3');
    row.appendChild(qsdCol);

    let qsdName = document.createElement('div');
    qsdName.classList.add('item-row');
    qsdName.innerHTML = "<p>" + rowData.qsdFullName + "</p>";
    qsdName.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Qualified Driver's Name");
    qsdCol.appendChild(qsdName);

    let qsdLicense = document.createElement('div');
    qsdLicense.classList.add('item-row');
    qsdLicense.innerHTML = "<p>" + rowData.qsdLicense + "</p>";
    qsdLicense.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Qualified Driver's License No.");
    qsdCol.appendChild(qsdLicense);

    let qsdSignature = document.createElement('div');
    qsdSignature.classList.add('item-row');
    qsdSignature.innerHTML = "<p>" + rowData.qsdSignature + "</p>";
    qsdSignature.querySelector("p").setAttribute(TABLE_ROW_LABEL_ATTR, "Qualified Driver's Signature");
    qsdCol.appendChild(qsdSignature);

    // Add event listener to selectable row
    row.addEventListener( 'click', () => {
            // Set Entry Id
            let entryIdElement = ENTRY_MODAL.querySelector('#entry-id');
            entryIdElement.innerHTML = rowData.id;

            // Set Modal Status
            MODAL_STATUS = STATUS_UPDATE;

            // Show Delete Button
            DELETE_ENTRY_BUTTON.style.display = null;

            // Populate Modal values
            populateFormValues(rowData);

            // Show Modal
            ENTRY_MODAL.showModal();
        }
    )
}

// Container EventListener
CONTAINER.addEventListener('animationend', (e) => {
    if(e.animationName == "popIn") {
        initProgressBarTextFill(DAYTIME);
        initProgressBarTextFill(NIGHTTIME);
    }
});

// Background Image event Listener
// Depends on toggle-click.js
// toggle-click.js script must be loaded first
BACKGROUND_IMAGE.addEventListener(
    'animationend', (e) => {

    }
);

// Wait for Transition to End
TABLE_CONTAINER.addEventListener(
    'transitionend', (e) => {

    }
)

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
    setProgressBarTextFill(NIGHTTIME);
    setProgressBarTextFill(DAYTIME);
};

function getRow(rowId) {
    // Loop through rows and get row when id matches
    let row;
    TABLE_DATA.forEach(
        (data) => {
            if(data.id === parseInt(rowId)) {
                row = data;
                return;
            }
        }
    )
    return row;
}

// ToDo: Could refactor addRow and updateRow methods
// as they both loop through the same input fields
// Better approach would be to have the same loop, but call a separate 'action'
// for adding or updating

// Updates existing row in HTML
function updateRow(rowId) {
    // Loop through input fields
    // Get Value and update row data
    let entryDate = DATE_INPUT_FIELD.valueAsDate;

    // Create Start Date Object

    // Create Finish Date Object

    let row = getRow(rowId);

    ENTRY_MODAL_INPUT_FIELDS.forEach(
        item => {
            switch(item.id) {
                // populate Date field
                case DATE_INPUT:
                    row.date = item.valueAsDate;
                    break;

                // populate start field
                case START_INPUT:
                    let newStartDate = getEntryDateTime(entryDate, START_INPUT_FIELD);
                    row.start = newStartDate;
                    break;

                // populate finish field
                case FINISH_INPUT:
                    let newFinishDate = getEntryDateTime(entryDate, FINISH_INPUT_FIELD);
                    row.finish = newFinishDate;
                    break;

                // populate from field
                case FROM_INPUT:
                    row.from = item.value;
                    break;

                // populate to field
                case TO_INPUT:
                    row.to = item.value;
                    break;

                // populate to field
                case ROAD_DROPDOWN_INPUT:
                    row.road = item.value;
                    break;

                // populate to field
                case WEATHER_DROPDOWN_INPUT:
                    row.weather = item.value;
                    break;

                // populate to field
                case TRAFFIC_DROPDOWN_INPUT:
                    row.traffic = item.value;
                    break;

                // populate Full Name field
                case FULL_NAME_INPUT:
                    row.qsdFullName = item.value;
                    break;

                // populate License No field
                case LICENSE_NO_INPUT:
                    row.qsdLicense = item.value;
                    break;
                    
                default:
                    break;

            }
        }
    );

    // Add Signatures
    addSignature(LEARNER_SIGNATURE_PAD, row.id);
    addSignature(QSD_SIGNATURE_PAD, row.id);

    setPageNumberText();
    setBatchNumbersText();
    generateTableRows();
    setProgressBarTextFill(NIGHTTIME);
    setProgressBarTextFill(DAYTIME);
};

function addRow() {
    // Get Value and update row data
    let entryDate = DATE_INPUT_FIELD.valueAsDate;

    // Create new row
    let newRow = {};
    newRow['id'] = getMaxRowId();

    ENTRY_MODAL_INPUT_FIELDS.forEach(
        item => {
            switch(item.id) {
                // populate Date field
                case DATE_INPUT:
                    newRow['date'] = item.valueAsDate;
                    break;

                // populate start field
                case START_INPUT:
                    let newStartDate = getEntryDateTime(entryDate, START_INPUT_FIELD);
                    newRow['start'] = newStartDate;
                    break;

                // populate finish field
                case FINISH_INPUT:
                    let newFinishDate = getEntryDateTime(entryDate, FINISH_INPUT_FIELD);
                    newRow['finish'] = newFinishDate;
                    break;

                // populate from field
                case FROM_INPUT:
                    newRow['from'] = item.value;
                    break;

                // populate to field
                case TO_INPUT:
                    newRow['to'] = item.value;
                    break;

                // populate to field
                case ROAD_DROPDOWN_INPUT:
                    newRow['road'] = item.value;
                    break;

                // populate to field
                case WEATHER_DROPDOWN_INPUT:
                    newRow['weather'] = item.value;
                    break;

                // populate to field
                case TRAFFIC_DROPDOWN_INPUT:
                    newRow['traffic'] = item.value;
                    break;

                // populate Full Name field
                case FULL_NAME_INPUT:
                    newRow['qsdFullName'] = item.value;
                    break;

                // populate License No field
                case LICENSE_NO_INPUT:
                    newRow['qsdLicense'] = item.value;
                    break;

                default:
                    break;

            }
        }
    );

    TABLE_DATA.push(newRow);

    setPageNumberText();
    setBatchNumbersText();
    generateTableRows();
    setProgressBarTextFill(NIGHTTIME);
    setProgressBarTextFill(DAYTIME);
};

function formatDate(date) {
    return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
};

function getMaxRowId() {
    // Loop through data and return max Id
    let rowIds = TABLE_DATA.map(row => row.id);
    return Math.max(rowIds);
}

// TABLE END

// MODAL START
// Modal Statuses
const STATUS_CANCEL = "modal_cancel";
const STATUS_DELETE = "modal_delete";
const STATUS_ENTRY = "modal_entry";
const STATUS_UPDATE = "modal_update";
const STATUS_CLOSED = "closed";
// Current Status
var MODAL_STATUS = STATUS_ENTRY;

// Entry Modal
const ENTRY_MODAL = BODY.querySelector('#entry-modal');
const ENTRY_MODAL_INPUT_FIELDS = ENTRY_MODAL.querySelectorAll('.modal-input');

const ADD_NEW_ENTRY_BUTTON = BODY.querySelector('#add-entry-button');
const MODAL_BODY = ENTRY_MODAL.querySelector('.modal-body');
const CLOSE_ICON = ENTRY_MODAL.querySelector('.close-icon');
const CLOSE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#close-entry-button');
const SAVE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#save-entry-button');
const DELETE_ENTRY_BUTTON = ENTRY_MODAL.querySelector('#delete-entry-button');

// Input Id Selectors
const DATE_INPUT = "modal-input-date";
const START_INPUT = "modal-input-start";
const FINISH_INPUT = "modal-input-finish";
const TO_INPUT = "modal-input-to";
const FROM_INPUT = "modal-input-from";
const LICENSE_NO_INPUT = "modal-input-license-no";
const FULL_NAME_INPUT = "modal-input-full-name";
const DURATION_INPUT = "modal-input-duration";
const WEATHER_DROPDOWN_INPUT = "modal-input-weather";
const TRAFFIC_DROPDOWN_INPUT = "modal-input-traffic";
const ROAD_DROPDOWN_INPUT = "modal-input-road";
const LEARNER_SIGNATURE_INPUT = "modal-input-learner-signature";
const QSD_SIGNATURE_INPUT = "modal-input-qsd-signature";

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

    switch(MODAL_STATUS) {

        case STATUS_ENTRY:
            addRow();
            break;

        case STATUS_UPDATE:
            let rowId = ENTRY_MODAL.querySelector('#entry-id').innerHTML;
            updateRow(rowId);
            break;

        default:
            break;
    }

    ENTRY_MODAL.close();
    MODAL_STATUS = STATUS_CLOSED;
});

DELETE_ENTRY_BUTTON.addEventListener('click', () => {
    // Set Modal Status
    MODAL_STATUS = STATUS_DELETE;

    CANCEL_MODAL.showModal();
});

// Modal - Time Inputs
const DATE_INPUT_FIELD = ENTRY_MODAL.querySelector('#' + DATE_INPUT);
const START_INPUT_FIELD = ENTRY_MODAL.querySelector('#' + START_INPUT);
START_INPUT_FIELD.addEventListener('change', e => {
    // Update Duration (Read-Only value)
    if(START_INPUT_FIELD.value !='' && FINISH_INPUT_FIELD.value !== '') {
        DURATION_INPUT_FIELD.value = getDuration(FINISH_INPUT_FIELD.valueAsDate, START_INPUT_FIELD.valueAsDate) + " Minutes";;
    }
});

const FINISH_INPUT_FIELD = ENTRY_MODAL.querySelector('#' + FINISH_INPUT);
FINISH_INPUT_FIELD.addEventListener('change', e => {
    // Update Duration (Read-Only value)
    if(START_INPUT_FIELD.value !='' && FINISH_INPUT_FIELD.value !== '') {
        DURATION_INPUT_FIELD.value = getDuration(FINISH_INPUT_FIELD.valueAsDate, START_INPUT_FIELD.valueAsDate) + " Minutes";;
    }
});

const DURATION_INPUT_FIELD = ENTRY_MODAL.querySelector('#' + DURATION_INPUT);

// Modal - Dropdowns
const WEATHER_DROPDOWN_FIELD = ENTRY_MODAL.querySelector('#weather-dropdown');
const TRAFFIC_DROPDOWN_FIELD = ENTRY_MODAL.querySelector('#traffic-dropdown');
const ROAD_DROPDOWN_FIELD = ENTRY_MODAL.querySelector('#road-dropdown');

WEATHER_DROPDOWN_FIELD.addEventListener('click', (e) => {
    if(e.target.localName === "input") {
        WEATHER_DROPDOWN_FIELD.classList.toggle('active');
    }
})

WEATHER_DROPDOWN_FIELD.addEventListener('focusout', () => {
    WEATHER_DROPDOWN_FIELD.classList.remove('active');
})

TRAFFIC_DROPDOWN_FIELD.addEventListener('click', (e) => {
    if(e.target.localName === "input") {
        TRAFFIC_DROPDOWN_FIELD.classList.toggle('active');
    }
})

TRAFFIC_DROPDOWN_FIELD.addEventListener('focusout', () => {
    TRAFFIC_DROPDOWN_FIELD.classList.remove('active');
})

ROAD_DROPDOWN_FIELD.addEventListener('click', (e) => {
    if(e.target.localName === "input") {
        ROAD_DROPDOWN_FIELD.classList.toggle('active');
    };
})

ROAD_DROPDOWN_FIELD.addEventListener('focusout', () => {
    ROAD_DROPDOWN_FIELD.classList.remove('active');
})

function dropdownSelect(selection, dropDownType) {
    switch(dropDownType) {
        case WEATHER_DROPDOWN_INPUT:
            MODAL_BODY.querySelector("#" + WEATHER_DROPDOWN_INPUT).value = selection;
            WEATHER_DROPDOWN_FIELD.classList.remove('active');
            break;

        case TRAFFIC_DROPDOWN_INPUT:
            MODAL_BODY.querySelector("#" + TRAFFIC_DROPDOWN_INPUT).value = selection;
            TRAFFIC_DROPDOWN_FIELD.classList.remove('active');
            break;

        case ROAD_DROPDOWN_INPUT:
            MODAL_BODY.querySelector("#" + ROAD_DROPDOWN_INPUT).value = selection;
            ROAD_DROPDOWN_FIELD.classList.remove('active');
            break;

        default:
            break;
    }
    
};

// Modal - Data Entry Validations

// Modal - Functions
function getEntryDateTime(entryDate, entryDateTime){
    let newEntryDateTime;
    if(entryDate === null) {
        newEntryDateTime = new Date(
            null,
            null,
            null,
            entryDateTime.valueAsDate.getUTCHours(),
            entryDateTime.valueAsDate.getUTCMinutes()
        );
    }
    else {
        newEntryDateTime = new Date(
            entryDate.getUTCFullYear(),
            entryDate.getUTCMonth(),
            entryDate.getUTCDate(),
            entryDateTime.valueAsDate.getUTCHours(),
            entryDateTime.valueAsDate.getUTCMinutes()
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

    ENTRY_MODAL_INPUT_FIELDS.forEach(
        item => {
            switch(item.id) {
                // populate Date field
                case DATE_INPUT:
                    item.valueAsDate = rowData.date;
                    break;

                // populate start field
                case START_INPUT:
                    item.value = formatInputTime(rowData.start);
                    break;

                // populate finish field
                case FINISH_INPUT:
                    item.value = formatInputTime(rowData.finish);
                    break;

                // populate duration field
                case DURATION_INPUT:
                    item.value = getDuration(rowData.finish, rowData.start) + " Minutes";
                    break;

                // populate from field
                case FROM_INPUT:
                    item.value = rowData.from;
                    break;

                // populate to field
                case TO_INPUT:
                    item.value = rowData.to;
                    break;

                // populate to field
                case ROAD_DROPDOWN_INPUT:
                    item.value = rowData.road;
                    break;

                // populate to field
                case WEATHER_DROPDOWN_INPUT:
                    item.value = rowData.weather;
                    break;

                // populate to field
                case TRAFFIC_DROPDOWN_INPUT:
                    item.value = rowData.traffic;
                    break;

                // populate Full Name field
                case FULL_NAME_INPUT:
                    item.value = rowData.qsdFullName;
                    break;

                // populate License No field
                case LICENSE_NO_INPUT:
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
    ENTRY_MODAL_INPUT_FIELDS.forEach(
        item => {
            item.value = null;
        }
    );

    // Clear Canvas
    LEARNER_SIGNATURE_PAD.clear();
    QSD_SIGNATURE_PAD.clear();
}

// Cancel Modal
const CANCEL_MODAL = BODY.querySelector('#cancel-modal');
const CANCEL_YES_BUTTON = CANCEL_MODAL.querySelector('#cancel-yes-button');
const CANCEL_NO_BUTTON = CANCEL_MODAL.querySelector('#cancel-no-button');

CANCEL_YES_BUTTON.addEventListener('click', () => {
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

// Modal - Signature Pad
const LEARNER_CANVAS = MODAL_BODY.querySelector("#" + LEARNER_SIGNATURE_INPUT);
const LEARNER_SIGNATURE_PAD = new SignaturePad(LEARNER_CANVAS);

const QSD_CANVAS = MODAL_BODY.querySelector("#" + QSD_SIGNATURE_INPUT);
const QSD_SIGNATURE_PAD = new SignaturePad(QSD_CANVAS);

// Clear Buttons
const CLEAR_LEARNER_BUTTON = MODAL_BODY.querySelector('#clear-learner-button');
const CLEAR_QSD_BUTTON = MODAL_BODY.querySelector('#clear-qsd-button');


const ID_REPLACEMENT_STRING = "{id}";
const SIGNATURE_PAD_IMG_LOCATION = "../signatures/{id}/";
const SIGNATURE_DATA_FORMAT = "image/jpeg"

LEARNER_SIGNATURE_PAD.addEventListener("beginStroke", () => {
    
  }, { once: true });

QSD_SIGNATURE_PAD.addEventListener("beginStroke", () => {

  }, { once: true });

CLEAR_LEARNER_BUTTON.addEventListener('click', () => {
    clearSignature(LEARNER_SIGNATURE_PAD);
});

CLEAR_QSD_BUTTON.addEventListener('click', () => {
    clearSignature(QSD_SIGNATURE_PAD);
});

// Signature Methods
function clearSignature(signaturePad) {
    signaturePad.clear();
};

function addSignature(signaturePad, rowId) {
    // Write signature to disk
    // Return String of file location
    let sigData = signaturePad.toDataURL(SIGNATURE_DATA_FORMAT);
    // let signatureLocation = SIGNATURE_PAD_IMG_LOCATION.replace(ID_REPLACEMENT_STRING, rowId)
    // return signatureLocation;
};

// MODAL END

// PROGRESS BAR START
const DAYTIME = "daytime";
const NIGHTTIME = "nighttime";
const REQUIRED_DAY_HOURS = 60 * 60;
const REQUIRED_NIGHT_HOURS = 15 * 60;
const PROGRESS_FILL_INTERVAL = 1500;

// 8PM
const NIGHT_TIME_HOUR_START = 20;
const DAY_TIME_HOUR_START = 7;
const REQUIRED_TOTAL_HOURS = REQUIRED_DAY_HOURS + REQUIRED_NIGHT_HOURS;

const DAYTIME_PROGRESS_BAR = CONTAINER.querySelector("#daytime-progress-bar");
const NIGHT_TIME_PROGRESS_BAR = CONTAINER.querySelector("#nighttime-progress-bar");

// Progress Bar Event Listeners

// Play small animation celebrating completion of hours
function getProgressBarLength() {
    return getComputedStyle(DAYTIME_PROGRESS_BAR).getPropertyValue('width').replace("px", "");
}

function initProgressBarTextFill(dayType) {

    let progressBar = dayType === DAYTIME ? DAYTIME_PROGRESS_BAR : NIGHT_TIME_PROGRESS_BAR;
    let progressBarFill = progressBar.querySelector(".progress-bar-fill");
    let progressBarText = progressBar.querySelector(".progress-bar-text");
    let startValue = 0;
    
    let totalMinutes = dayType === DAYTIME ? REQUIRED_DAY_HOURS : REQUIRED_NIGHT_HOURS;
    let endValue = Math.floor(parseInt(getTotalMinutes(dayType)) / totalMinutes * 100);
    // Limit to 100 Max value
    if(endValue > 100) {
        endValue = 100;
    }

    let duration = PROGRESS_FILL_INTERVAL / endValue;

    let counter = setInterval(
        () => {
            startValue += 1;
            progressBarText.innerHTML = startValue + "%";

            // Go From -20 to 0 when complete
            let increment = getProgressBarLength() * (100 - startValue)/100;
            progressBarFill.style.transform = "translateX(-" + increment + "px)";
            if(startValue >= endValue) {
                clearInterval(counter);
            }
        },
        duration
    )

};

function setProgressBarTextFill(dayType) {
    // Does not Increment / Set value without animation
    let progressBar = dayType === DAYTIME ? DAYTIME_PROGRESS_BAR : NIGHT_TIME_PROGRESS_BAR;
    let progressBarFill = progressBar.querySelector(".progress-bar-fill");
    let progressBarText = progressBar.querySelector(".progress-bar-text");
    
    let totalMinutes = dayType === DAYTIME ? REQUIRED_DAY_HOURS : REQUIRED_NIGHT_HOURS;
    let endValue = Math.floor(parseInt(getTotalMinutes(dayType)) / totalMinutes * 100);
    // Limit to 100 Max value
    if(endValue > 100) {
        endValue = 100;
    }

    progressBarText.innerHTML = endValue + "%";

    // Go From -20 to 0 when complete
    let increment = getProgressBarLength() * (100 - endValue)/100;
    progressBarFill.style.transform = "translateX(-" + increment + "vw)";
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
                    if( 
                        tableData.start.getHours() <= NIGHT_TIME_HOUR_START 
                        && tableData.start.getHours() >= DAY_TIME_HOUR_START) {
                        totalMinutes += getDuration( tableData.finish, tableData.start );
                    }
                    break;

                case NIGHTTIME:
                    if( 
                        tableData.start.getHours() >= NIGHT_TIME_HOUR_START 
                        || tableData.start.getHours() <= NIGHT_TIME_HOUR_START) {
                        totalMinutes += getDuration( tableData.finish, tableData.start );
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
