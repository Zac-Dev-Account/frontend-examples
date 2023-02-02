// Menu Constants
const MENU = document.querySelector('.menu-container');

// Modal Constants
const FORM_STATUS_UPDATE = "update";
const FORM_STATUS_READ_ONLY = "read-only"
var CURRENT_FORM_STATUS = FORM_STATUS_READ_ONLY;

const ENTRY_MODAL = document.querySelector('#entry-modal');
const MODAL_BODY = ENTRY_MODAL.querySelector('.modal-body');
const CLOSE_ICON = ENTRY_MODAL.querySelector('.close-icon');

// Columns
const COLUMN_CONTAINER = MODAL_BODY.querySelector('.column-container');
const COLUMN_ONE = MODAL_BODY.querySelector('#column-one');
const COLUMN_TWO = MODAL_BODY.querySelector('#column-two');

const CANCEL_BUTTON = MODAL_BODY.querySelector('#cancel-button');
const EDIT_BUTTON = MODAL_BODY.querySelector('#edit-button');

const ALPHABET_LIST = [
    "(a)", "(b)", "(c)", "(d)", "(e)", "(f)", "(g)", "(h)", "(i)", "(j)", "(k)", "(l)", "(m)", "(n)", "(o)", "(p)", "(q)", "(r)", "(s)", "(t)", "(u)", "(v)", "(w)", "(x)", "(y)", "(z)"
]

// Signature Pads / Canvas

// Learner Driver Signature Pad
const DISABLED_COLOUR = "#fafafa";
const ENABLED_COLOUR = "#fff";
const LEARNER_DRIVER_SIG_CANVAS = document.createElement('canvas');
LEARNER_DRIVER_SIG_CANVAS.style.backgroundColor = DISABLED_COLOUR;
LEARNER_DRIVER_SIG_CANVAS.id = "learner-driver-signature";
const LEARNER_DRIVER_SIG_PAD = new SignaturePad(LEARNER_DRIVER_SIG_CANVAS);
LEARNER_DRIVER_SIG_PAD.addEventListener(
    "beginStroke", () => {}, 
    { once: true }
);
// Disable by default
LEARNER_DRIVER_SIG_PAD.off();

// Authorised Examiner Signature Pad
const EXAMINER_DRIVER_SIG_CANVAS = document.createElement('canvas');
EXAMINER_DRIVER_SIG_CANVAS.style.backgroundColor = DISABLED_COLOUR;
EXAMINER_DRIVER_SIG_CANVAS.id = "examiner-driver-signature";
const EXAMINER_DRIVER_SIG_PAD = new SignaturePad(EXAMINER_DRIVER_SIG_CANVAS);
EXAMINER_DRIVER_SIG_PAD.addEventListener(
    "beginStroke", () => {}, 
    { once: true }
);
// Disable by default
EXAMINER_DRIVER_SIG_PAD.off();


// Event Listeners
CLOSE_ICON.addEventListener('click', () => {
    MODAL_BODY.scrollTop = 0;
    ENTRY_MODAL.close();
    clearForm();
    CURRENT_FORM_STATUS = FORM_STATUS_READ_ONLY;
});

CANCEL_BUTTON.addEventListener('click', () => {
    LEARNER_DRIVER_SIG_PAD.off();
    EXAMINER_DRIVER_SIG_PAD.off();
    MODAL_BODY.scrollTop = 0;
    ENTRY_MODAL.close();
    clearForm();
    EDIT_BUTTON.querySelector('span').innerHTML = "Edit";
    CURRENT_FORM_STATUS = FORM_STATUS_READ_ONLY;
});

EDIT_BUTTON.addEventListener(
    'click', () => {
        switch(CURRENT_FORM_STATUS) {

            case FORM_STATUS_READ_ONLY:

                EDIT_BUTTON.querySelector('span').innerHTML = "Save";
                let enabledInputs = MODAL_BODY.querySelectorAll('input, textarea');
                enabledInputs.forEach(
                    modalInput => {
                        modalInput.disabled = false;
                    }
                );

                // Enable signature pads
                LEARNER_DRIVER_SIG_CANVAS.style.backgroundColor = ENABLED_COLOUR;
                EXAMINER_DRIVER_SIG_CANVAS.style.backgroundColor = ENABLED_COLOUR;
                LEARNER_DRIVER_SIG_PAD.on();
                EXAMINER_DRIVER_SIG_PAD.on();
                
                MODAL_BODY.scrollTop = 0;
                CURRENT_FORM_STATUS = FORM_STATUS_UPDATE;
                break;

            case FORM_STATUS_UPDATE:
                EDIT_BUTTON.querySelector('span').innerHTML = "Edit";
                let disabledInputs = MODAL_BODY.querySelectorAll('input, textarea');
                disabledInputs.forEach(
                    modalInput => {
                        modalInput.disabled = true;
                    }
                );
                CURRENT_FORM_STATUS = FORM_STATUS_READ_ONLY;

                // Disable signature pads
                LEARNER_DRIVER_SIG_CANVAS.style.backgroundColor = DISABLED_COLOUR;
                EXAMINER_DRIVER_SIG_CANVAS.style.backgroundColor = DISABLED_COLOUR;
                LEARNER_DRIVER_SIG_PAD.off();
                EXAMINER_DRIVER_SIG_PAD.off();

                // Save and Close
                MODAL_BODY.scrollTop = 0;
                ENTRY_MODAL.close();
                clearForm();
                CURRENT_FORM_STATUS = FORM_STATUS_READ_ONLY;
                break;
            
            default:
                break;
        };

    }
);



function genMenuLayout() {
    // Function to generate initial Menu structure

    // Create Units
    UNIT_REF_TABLE.forEach(
        unit => {

            // Create Label / menuHeading
            let menuHeading = document.createElement("div");
            let headingText = document.createElement("h2");
            menuHeading.classList.add('menu-heading');
            headingText.innerHTML = unit.name;

            MENU.appendChild(menuHeading);
            menuHeading.appendChild(headingText);

            // Create Content-Box
            // Add Tasks to Content-Box
            let menuContent = document.createElement("div");
            menuContent.classList.add('menu-content');
            MENU.appendChild(menuContent);

            // Set Background Style
            menuHeading.style.backgroundImage = "var(--menu-heading-colour), url('" + unit.backgroundImagePath + "')";

            // Add Event listener
            menuHeading.addEventListener(
                'click', () => {
                    let content = document.querySelectorAll('.menu-content');
                    content.forEach(
                        content => {
                            if( content !== menuContent) {
                                content.classList.remove('active')
                            }
                        }
                    );
                    menuContent.classList.toggle('active');
                }
            );

            // Create Tasks
            let tasks = getRefTaskByUnitId(unit.id);
            tasks.forEach(
                task => {
                    let menuItem = document.createElement("div");
                    menuItem.classList.add('menu-item');
                    menuItem.innerHTML = task.name;

                    // Task Add Event Listener Open Modal
                    // Add event listener to selectable row
                    menuItem.addEventListener( 'click', () => {
                            // Show Modal
                            ENTRY_MODAL.showModal();
                            genFormLayout(unit, task);
                        }
                    );

                    menuContent.appendChild(menuItem);
                }
            );
        }
    );

};

function genFormLayout(unit, task) {
    // Function to generate the Layout of a form
    // for the Task

    // Create Heading
    let modalHeading = ENTRY_MODAL.querySelector('#modal-heading');
    modalHeading.innerHTML = "Unit " + unit.id + ": Task " + 
    task.id + " - " + task.name;

    // Create Module Notes
    let moduleNote = getNotesByTaskIdAndType(task.id, NOTE_TYPE_MODULE)[0];
    if( moduleNote != undefined ) {
        let moduleNoteContainer = document.createElement('div');
        moduleNoteContainer.classList.add('modal-container');
    
        let moduleNoteHeadingContainer = document.createElement('div');
        moduleNoteHeadingContainer.classList.add('modal-sub-heading-container');
        moduleNoteContainer.appendChild(moduleNoteHeadingContainer);

        let moduleNoteHeading = document.createElement('p');
        moduleNoteHeading.classList.add('modal-sub-heading');
        moduleNoteHeading.innerHTML = "Note";
        moduleNoteHeadingContainer.appendChild(moduleNoteHeading);
    
        let moduleNoteTextContainer = document.createElement('div');
        moduleNoteTextContainer.classList.add('modal-description-container');
        moduleNoteContainer.appendChild(moduleNoteTextContainer);

        moduleNote.note.forEach(
            (note) => {
                let moduleNoteText = document.createElement('p');
                moduleNoteText.classList.add('modal-description');
                moduleNoteText.innerHTML = note;
                moduleNoteTextContainer.appendChild(moduleNoteText);
            }
        );

        COLUMN_ONE.appendChild(moduleNoteContainer);
    };

    // Create Learning Outcome
    let learningOutcome = getLearningOutcomeByTaskId(task.id)[0];
    
    if( learningOutcome !== undefined ) {
        let learningOutcomeContainer = document.createElement('div');
        learningOutcomeContainer.classList.add('modal-container');
    
        let learningOutcomeHeadingContainer = document.createElement('div');
        learningOutcomeHeadingContainer.classList.add('modal-sub-heading-container');
        learningOutcomeContainer.appendChild(learningOutcomeHeadingContainer);

        let learningOutcomeHeading = document.createElement('p');
        learningOutcomeHeading.classList.add('modal-sub-heading');
        learningOutcomeHeading.innerHTML = "Learning Outcome";
        learningOutcomeHeadingContainer.appendChild(learningOutcomeHeading);
    
        let learningOutcomeDescriptionContainer = document.createElement('div');
        learningOutcomeDescriptionContainer.classList.add('modal-description-container');
        learningOutcomeContainer.appendChild(learningOutcomeDescriptionContainer);

        learningOutcome.description.forEach(
            (description, index) => {
                let learningOutcomeDescription = document.createElement('p');
                learningOutcomeDescription.classList.add('modal-description');
                learningOutcomeDescription.innerHTML = "(" + (index + 1) + ") " + description;
                learningOutcomeDescriptionContainer.appendChild(learningOutcomeDescription);
            }
        );

        COLUMN_ONE.appendChild(learningOutcomeContainer);
    };


    // Create Assessment Standard
    let assessmentStandard = getAssessmentStandardByTaskId(task.id)[0];

    if( assessmentStandard !== undefined ) {
        let assessmentStandardContainer = document.createElement('div');
        assessmentStandardContainer.classList.add('modal-container');
        assessmentStandardContainer.classList.add('no-top-border');

        let assessmentStandardHeadingContainer = document.createElement('div');
        assessmentStandardHeadingContainer.classList.add('modal-sub-heading-container');
        assessmentStandardContainer.appendChild(assessmentStandardHeadingContainer);

        let assessmentStandardHeading = document.createElement('p');
        assessmentStandardHeading.classList.add('modal-sub-heading');
        assessmentStandardHeading.innerHTML = "Assessment Standard";
        assessmentStandardHeadingContainer.appendChild(assessmentStandardHeading);

        let assessmentStandardDescriptionContainer = document.createElement('div');
        assessmentStandardDescriptionContainer.classList.add('modal-description-container');
        assessmentStandardContainer.appendChild(assessmentStandardDescriptionContainer);

        assessmentStandard.description.forEach(
            (description) => {
                let assessmentStandardDescription = document.createElement('p');
                assessmentStandardDescription.classList.add('modal-description');
                assessmentStandardDescription.innerHTML = description;
                assessmentStandardDescriptionContainer.appendChild(assessmentStandardDescription);
            }
        );
        COLUMN_ONE.appendChild(assessmentStandardContainer);
    };


    // Create Requirements
    let requirement = getRequirementsByTaskId(task.id);

    if( requirement.length > 0 ) {
        let requirementSpacer = createSpacer();

        let requirementContainer = document.createElement('div');
        requirementContainer.classList.add('modal-container');
        requirementContainer.classList.add('dir-column');
        requirementContainer.classList.add('no-padding');

        // Create Requirements Heading
        let requirementHeadingContainer = document.createElement('div');
        requirementHeadingContainer.classList.add('modal-long-heading-container');

        let requirementHeading = document.createElement('h3');
        requirementHeading.classList.add('default-padding');
        requirementHeading.innerHTML = "Task " + task.id + " Requirements";
        requirementHeadingContainer.appendChild(requirementHeading);

        requirementContainer.appendChild(requirementHeadingContainer);


        requirement.forEach(
            (reqStep, index) => {

                // Create Name
                if( reqStep.description != null ) {
                    let stepItem = document.createElement('p');
                    stepItem.innerHTML = "(" + (index + 1) + ")" + " " + reqStep.description;
                    stepItem.classList.add('modal-item');
                    // stepItem.classList.add('no-border');
                    stepItem.classList.add('strong');

                    requirementContainer.appendChild(stepItem);
                };

                // Iterate & Create Steps
                reqStep.steps.forEach(
                    (step, index) => {
                        let stepItem = document.createElement('p');
                        stepItem.innerHTML = ALPHABET_LIST[index] + " " + step;
                        stepItem.classList.add('modal-item');
                        // stepItem.classList.add('no-border');
        
                        requirementContainer.appendChild(stepItem);
                    }
                );
            }
        );
        COLUMN_ONE.appendChild(requirementSpacer);
        COLUMN_ONE.appendChild(requirementContainer);

        // Create Notes
        let notes = getNotesByTaskIdAndType(task.id, NOTE_TYPE_REQUIREMENT);
        notes.forEach(
            note => {
                let noteContainer = createNoteContainer(note);
                COLUMN_ONE.appendChild(noteContainer);
            }
        );
    };

    // Create Change Controls
    let changeControls = getChangeControlsByTaskId(task.id);  
    if( changeControls.length > 0 ) {
        let spacer = createSpacer();
        COLUMN_ONE.appendChild(spacer);
        let changeControlsContainer = document.createElement('div');
        changeControlsContainer.classList.add('modal-long-heading-container');
    
        let changeControlsHeading = document.createElement('h3');
        changeControlsHeading.classList.add('default-padding');
        changeControlsHeading.innerHTML = "Controls List";
    
        let changeControlsGroupContainer = document.createElement('div');
        let changeControlsSubHeading = document.createElement('p');
        changeControlsSubHeading.classList.add('default-margin-top');
        changeControlsSubHeading.innerHTML = "The learner may be asked to explain the function of one control from each of the groups below.";
        changeControlsGroupContainer.appendChild(changeControlsSubHeading);

        let subControlContainer = document.createElement('div');
        subControlContainer.classList.add('dir-row');
        subControlContainer.classList.add('space-between');
        subControlContainer.classList.add('default-margin-top');

        changeControls.forEach(
            (changeControl, index) => {
                // Create Change Control Headings
                let changeGroupContainer = document.createElement('div');
                changeGroupContainer.classList.add('dir-column');

                let changeGroupHeading = document.createElement('p');
                changeGroupHeading.classList.add('strong');
                changeGroupHeading.innerHTML = changeControl.name;
                changeGroupContainer.appendChild(changeGroupHeading);

                // Create Change Control List
                let unorderedList = document.createElement('ul');
                unorderedList.classList.add('default-margin-top');
                unorderedList.style.marginLeft = "1em";
                changeGroupContainer.appendChild(unorderedList);

                changeControl.steps.forEach(
                    (step, index) => {
                        let stepListItem = document.createElement('li');
                        stepListItem.innerHTML = step;
                        unorderedList.appendChild(stepListItem);
                    }
                );

                subControlContainer.appendChild(changeGroupContainer);
            }
        );

        changeControlsContainer.appendChild(changeControlsHeading);
        changeControlsGroupContainer.appendChild(subControlContainer);

        // Create Notes
        let notes = getNotesByTaskIdAndType(task.id, NOTE_TYPE_CONTROL);
        
        if(notes.length > 0) {
            notes.forEach(
                (note) => {
                    let noteContainer = createNoteContainer(note);
                    changeControlsGroupContainer.appendChild(noteContainer);
                }
            );
        };

        COLUMN_ONE.appendChild(changeControlsContainer);
        COLUMN_ONE.appendChild(changeControlsGroupContainer);
    }


    // Create Task Checklist
    let taskChecklist = getChecklistItemsByTaskId(task.id)[0];
    if(taskChecklist != undefined) {
        // Checklist Container
        let taskChecklistContainer = document.createElement('div');
        taskChecklistContainer.classList.add('modal-container');
        taskChecklistContainer.classList.add('dir-column');
        taskChecklistContainer.classList.add('no-padding');

        // Checklist Heading
        let taskChecklistHeadingContainer = document.createElement('div');
        taskChecklistHeadingContainer.classList.add('modal-long-heading-container');
    
        let taskChecklistHeading = document.createElement('h3');
        taskChecklistHeading.classList.add('default-padding');
        taskChecklistHeading.innerHTML = "Have you instructed your client on the following topics?";
        taskChecklistHeadingContainer.appendChild(taskChecklistHeading);

        taskChecklistContainer.appendChild(taskChecklistHeadingContainer);

        // Checklist items
        taskChecklist.steps.forEach(
            (checklistItem, index) => {
                let checklistItemContainer = document.createElement('div');
                checklistItemContainer.classList.add('modal-item');

                checklistItemContainer.classList.add('space-between');
                checklistItemContainer.style.width = "100%";

                let checklistText = document.createElement('label');
                checklistText.setAttribute("for", "checklistItem-" + index);
                checklistText.innerHTML = checklistItem;

                let checklistBox = document.createElement('input');
                checklistBox.setAttribute("name", "checklistItem-" + index);
                checklistBox.setAttribute("type", "checkbox");
                checklistBox.disabled = true;
                checklistBox.style.position = "absolute";
                checklistBox.style.right = "0.5em";

                checklistItemContainer.appendChild(checklistText);
                checklistItemContainer.appendChild(checklistBox);
                taskChecklistContainer.appendChild(checklistItemContainer);
            }
        );

        let spacer = createSpacer();
        COLUMN_ONE.append(spacer);
        COLUMN_ONE.append(taskChecklistContainer);

    };

    // Create Assessment Records
    let assessmentRecords = getAssessmentsByTaskId(task.id);
    if(assessmentRecords.length > 0) {
        let assessmentContainer = document.createElement('div');
        assessmentContainer.classList.add('modal-long-heading-container');
    
        let assessmentHeading = document.createElement('h3');
        assessmentHeading.classList.add('default-padding');
        assessmentHeading.innerHTML = "Task Assessment Records";
        assessmentContainer.appendChild(assessmentHeading);
        COLUMN_TWO.appendChild(assessmentContainer);

        // Create Assessment Inputs
        let assessmentInputContainer = document.createElement('div');

        assessmentRecords.forEach(
            (record, index) => {
                let recordContainer = document.createElement('div');
                recordContainer.classList.add('input-container');

                let recordLabel = document.createElement('p');
                recordLabel.innerHTML = record.name;

                recordContainer.appendChild(recordLabel);
                let checkBoxContainer = document.createElement('div');
                checkBoxContainer.style.display = "flex";
                checkBoxContainer.style.gap = "0.25em";
                // Create Checkboxes
                record.checkboxes.forEach(
                    (checkbox, index) => {
                        let checkboxInput = document.createElement('input');
                        checkboxInput.setAttribute("name", "recordItem-" + index);
                        checkboxInput.setAttribute("type", "checkbox");
                        checkboxInput.disabled = true;
                        checkBoxContainer.appendChild(checkboxInput);
                    }
                );
                recordContainer.appendChild(checkBoxContainer);
                assessmentInputContainer.appendChild(recordContainer);

            }
        );
        COLUMN_TWO.appendChild(assessmentInputContainer);

        // Create Notes
        let notes = getNotesByTaskIdAndType(task.id, NOTE_TYPE_RECORD);
        notes.forEach(
            note => {
                let noteContainer = createNoteContainer(note);
                COLUMN_TWO.appendChild(noteContainer);
            }
        );

        let spacerTwo = createSpacer();
        COLUMN_TWO.appendChild(spacerTwo);
    };


    // Create Task Sign Off
    // Static, does not change
    let signOffContainer = document.createElement('div');
    signOffContainer.classList.add('modal-long-heading-container');

    let signOffHeading = document.createElement('h3');
    signOffHeading.classList.add('default-padding');
    signOffHeading.innerHTML = "Task " + task.id + " Sign Off";
    signOffContainer.appendChild(signOffHeading);

    // Create Sign Off Inputs
    let signOffInputContainer = document.createElement('div');

    // Driver Name
    let driverNameInputContainer = document.createElement('div');
    driverNameInputContainer.classList.add('input-container');

    let driverNameLabel = document.createElement('label');
    driverNameLabel.innerHTML = "Driver Name";
    driverNameLabel.setAttribute('for', 'driver-name');

    let driverNameInput = document.createElement('input');
    driverNameInput.setAttribute('name', 'driver-name');
    driverNameInput.disabled = true;


    driverNameInputContainer.appendChild(driverNameLabel);
    driverNameInputContainer.appendChild(driverNameInput);

    signOffInputContainer.appendChild(driverNameInputContainer);

    // Licence Number
    let licenceNumberInputContainer = document.createElement('div');
    licenceNumberInputContainer.classList.add('input-container');

    let licenceNumberLabel = document.createElement('label');
    licenceNumberLabel.innerHTML = "Licence Number";
    licenceNumberLabel.setAttribute('for', 'licence-number');

    let licenceNumberInput = document.createElement('input');
    licenceNumberInput.setAttribute('name', 'licence-number');
    licenceNumberInput.disabled = true;

    licenceNumberInputContainer.appendChild(licenceNumberLabel);
    licenceNumberInputContainer.appendChild(licenceNumberInput);

    signOffInputContainer.appendChild(licenceNumberInputContainer);

    // Learner Driver's Signature
    let learnerDriverSigContainer = document.createElement('div');
    learnerDriverSigContainer.classList.add('input-container');

    let learnerDriverSigLabel = document.createElement('label');
    learnerDriverSigLabel.innerHTML = "Learner Driver's Signature";
    learnerDriverSigLabel.setAttribute('for', 'learner-driver-signature');

    learnerDriverSigContainer.appendChild(learnerDriverSigLabel);
    learnerDriverSigContainer.appendChild(LEARNER_DRIVER_SIG_CANVAS);
    signOffInputContainer.appendChild(learnerDriverSigContainer);
    // Canvas

    // Authorised Examiner's Name
    let examinerNameInputContainer = document.createElement('div');
    examinerNameInputContainer.classList.add('input-container');

    let examinerNameLabel = document.createElement('label');
    examinerNameLabel.innerHTML = "Authorised Examiner's Name";
    examinerNameLabel.setAttribute('for', 'examiner-name');

    let examinerNameInput = document.createElement('input');
    examinerNameInput.setAttribute('name', 'examiner-name');
    examinerNameInput.disabled = true;

    examinerNameInputContainer.appendChild(examinerNameLabel);
    examinerNameInputContainer.appendChild(examinerNameInput);

    signOffInputContainer.appendChild(examinerNameInputContainer);

    // Authorised Examiner's Signature
    let examinerSigContainer = document.createElement('div');
    examinerSigContainer.classList.add('input-container');

    let examinerDriverSigLabel = document.createElement('label');
    examinerDriverSigLabel.innerHTML = "Authorised Examiner's Signature";
    examinerDriverSigLabel.setAttribute('for', 'auth-examiner-signature');

    examinerSigContainer.appendChild(examinerDriverSigLabel);
    examinerSigContainer.appendChild(EXAMINER_DRIVER_SIG_CANVAS);
    signOffInputContainer.appendChild(examinerSigContainer);
    // Canvas

    // MDI Number
    let mdiNumberContainer = document.createElement('div');
    mdiNumberContainer.classList.add('input-container');

    let mdiNumberLabel = document.createElement('label');
    mdiNumberLabel.innerHTML = "MDI Number";
    mdiNumberLabel.setAttribute('for', 'mdi-number');

    let mdiNumberInput = document.createElement('input');
    mdiNumberInput.setAttribute('name', 'mdi-number');
    mdiNumberInput.disabled = true;

    mdiNumberContainer.appendChild(mdiNumberLabel);
    mdiNumberContainer.appendChild(mdiNumberInput);
    signOffInputContainer.appendChild(mdiNumberContainer);

    // Date
    let dateContainer = document.createElement('div');
    dateContainer.classList.add('input-container');

    let dateLabel = document.createElement('label');
    dateLabel.innerHTML = "Date";
    dateLabel.setAttribute('for', 'date');

    let dateInput = document.createElement('input');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('type', 'date');
    dateInput.disabled = true;

    dateContainer.appendChild(dateLabel);
    dateContainer.appendChild(dateInput);
    signOffInputContainer.appendChild(dateContainer);


    COLUMN_TWO.appendChild(signOffContainer);
    COLUMN_TWO.appendChild(signOffInputContainer);

    let spacerThree = createSpacer();
    COLUMN_TWO.appendChild(spacerThree);

    // Create Examiner Notes
    // Static, does not change
    let examinerContainer = document.createElement('div');
    examinerContainer.classList.add('modal-container');
    examinerContainer.classList.add('dir-column');
    examinerContainer.classList.add('no-padding');

    let examinerHeadingContainer = document.createElement('div');
    examinerHeadingContainer.classList.add('modal-long-heading-container');

    let examinerHeading = document.createElement('h3');
    examinerHeading.classList.add('default-padding');
    examinerHeading.innerHTML = "Authorised Examiner Notes";
    examinerHeadingContainer.appendChild(examinerHeading);

    let examinerTextArea = document.createElement('textarea');
    examinerTextArea.classList.add('input-text');
    examinerTextArea.disabled = true;
    
    examinerContainer.appendChild(examinerHeadingContainer);
    examinerContainer.appendChild(examinerTextArea);

    COLUMN_TWO.appendChild(examinerContainer);
};

function genTaskCounter() {

};

function clearForm() {
    // Clear the body of the form
    // This is dynamically generated
    COLUMN_ONE.innerHTML = null;
    COLUMN_TWO.innerHTML = null;
};

function createSpacer() {
    let spacer = document.createElement('div');
    spacer.classList.add('default-spacer');
    return spacer;
};

function createNoteContainer(note) {
    let noteContainer = document.createElement('div');
    noteContainer.classList.add('dir-row');
    noteContainer.classList.add('default-margin-top');
    noteContainer.style.gap = "0.5em";

    let noteLabel = document.createElement('p');
    noteLabel.style.fontWeight = "600";
    noteLabel.innerHTML = "Note: ";

    noteContainer.appendChild(noteLabel);

    let noteTextContainer = document.createElement('div');
    noteTextContainer.classList.add('dir-column');

    note.note.forEach(
        (noteItem) => {

            let noteText = document.createElement('p');
            noteText.style.marginBottom = '0.5em';
            noteText.innerHTML = noteItem;
            noteTextContainer.appendChild(noteText);
        }
    );

    noteContainer.appendChild(noteTextContainer);
    return noteContainer;
};

// Pre-Populate Utility methods
function populateForm() {

};

function getUserTaskDataByTaskId(taskId) {

};


// Initialisation Code
genMenuLayout();
genTaskCounter();
populateForm();