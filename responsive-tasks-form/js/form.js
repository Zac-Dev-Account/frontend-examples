
// Menu Constants
const MENU = document.querySelector('.menu-container');

// Modal Constants
const ENTRY_MODAL = document.querySelector('#entry-modal');
const MODAL_BODY = ENTRY_MODAL.querySelector('.modal-body');
const CLOSE_ICON = ENTRY_MODAL.querySelector('.close-icon');

const ALPHABET_LIST = [
    "(a)", "(b)", "(c)", "(d)", "(e)", "(f)", "(g)", "(h)", "(i)", "(j)", "(k)", "(l)", "(m)", "(n)", "(o)", "(p)", "(q)", "(r)", "(s)", "(t)", "(u)", "(v)", "(w)", "(x)", "(y)", "(z)"
]

// Event Listeners
CLOSE_ICON.addEventListener('click', () => {
    MODAL_BODY.scrollTop = 0;
    ENTRY_MODAL.close();
    clearForm();
});

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

    // Column Container
    let columnContainer = document.createElement('div');
    columnContainer.classList.add('column-container');

    // Column One
    let columnOne = document.createElement('div');
    columnOne.classList.add('column');

    // Column Two
    let columnTwo = document.createElement('div');
    columnTwo.classList.add('column');

    MODAL_BODY.appendChild(columnContainer);
    columnContainer.appendChild(columnOne);
    columnContainer.appendChild(columnTwo);

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


        columnOne.appendChild(learningOutcomeContainer);
    }


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
        columnOne.appendChild(assessmentStandardContainer);
    }


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
                if(reqStep.description != null) {
                    let stepItem = document.createElement('p');
                    stepItem.innerHTML = "(" + (index + 1) + ")" + " " + reqStep.description;
                    stepItem.classList.add('modal-item');
                    stepItem.classList.add('no-border');
                    stepItem.classList.add('strong');

                    requirementContainer.appendChild(stepItem);
                };

                // Iterate & Create Steps
                reqStep.steps.forEach(
                    (step, index) => {
                        let stepItem = document.createElement('p');
                        stepItem.innerHTML = ALPHABET_LIST[index] + " " + step;
                        stepItem.classList.add('modal-item');
                        stepItem.classList.add('no-border');
        
                        requirementContainer.appendChild(stepItem);
                    }
                );
            }
        );
        columnOne.appendChild(requirementSpacer);
        columnOne.appendChild(requirementContainer);
    };

    // Create Change Controls
    let changeControls = getChangeControlsByTaskId(task.id);  
    if( changeControls.length > 0 ) {
        let spacer = createSpacer();
        columnOne.appendChild(spacer);
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

        // Create Note
        let note = getNotesByTaskIdAndType(task.id, NOTE_TYPE_CONTROL)[0];
        let noteContainer = document.createElement('div');
        noteContainer.classList.add('dir-row');
        noteContainer.classList.add('default-margin-top');
        noteContainer.style.gap = "0.5em";

        let noteLabel = document.createElement('p');
        noteLabel.style.fontWeight = "600";
        noteLabel.innerHTML = "Note: ";

        let noteText = document.createElement('p');
        noteText.innerHTML = note.note;

        noteContainer.appendChild(noteLabel);
        noteContainer.appendChild(noteText);
        changeControlsGroupContainer.appendChild(noteContainer);



        columnOne.appendChild(changeControlsContainer);
        columnOne.appendChild(changeControlsGroupContainer);
    }


    // Create Task Checklist

    // Create Form Notes

    // Create Assessment Records
    let assessmentRecord = getAssessmentStandardByTaskId(task.id)[0];
    let assessmentCheckboxes = getAssessmentCheckboxesByAsId(assessmentRecord.id);

    let assessmentContainer = document.createElement('div');
    assessmentContainer.classList.add('modal-long-heading-container');

    let assessmentHeading = document.createElement('h3');
    assessmentHeading.classList.add('default-padding');
    assessmentHeading.innerHTML = "Task Assessment Records";
    assessmentContainer.appendChild(assessmentHeading);
    columnTwo.appendChild(assessmentContainer);

    let spacerTwo = createSpacer();
    columnTwo.appendChild(spacerTwo);

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
    driverNameInput.readOnly = true;


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
    licenceNumberInput.readOnly = true;


    licenceNumberInputContainer.appendChild(licenceNumberLabel);
    licenceNumberInputContainer.appendChild(licenceNumberInput);

    signOffInputContainer.appendChild(licenceNumberInputContainer);

    // Learner Driver's Signature
    // Canvas

    // Authorised Examiner's Name
    let examinerNameInputContainer = document.createElement('div');
    examinerNameInputContainer.classList.add('input-container');

    let examinerNameLabel = document.createElement('label');
    examinerNameLabel.innerHTML = "Authorised Examiner's Name";
    examinerNameLabel.setAttribute('for', 'examiner-name');

    let examinerNameInput = document.createElement('input');
    examinerNameInput.setAttribute('name', 'examiner-name');
    examinerNameInput.readOnly = true;

    examinerNameInputContainer.appendChild(examinerNameLabel);
    examinerNameInputContainer.appendChild(examinerNameInput);

    signOffInputContainer.appendChild(examinerNameInputContainer);

    // Authorised Examiner's Signature
    // Canvas

    // MDI Number

    // Date


    columnTwo.appendChild(signOffContainer);
    columnTwo.appendChild(signOffInputContainer);

    let spacerThree = createSpacer();
    columnTwo.appendChild(spacerThree);

    // Create Examiner Notes
    // Static, does not change
    let examinerContainer = document.createElement('div');
    examinerContainer.classList.add('modal-long-heading-container');

    let examinerHeading = document.createElement('h3');
    examinerHeading.classList.add('default-padding');
    examinerHeading.innerHTML = "Authorised Examiner Notes";
    examinerContainer.appendChild(examinerHeading);

    // Create Note Inputs

    columnTwo.appendChild(examinerContainer);

};

function genTaskCounter() {

};

function genLearningOutcomeForTask(taskId) {
    
};

function genAssessmentStandardsForTask(taskId){

};

function genRequirementsForTask(taskId) {

};

function genRequirementStepsForRequirement(requirementId) {

};

function clearForm() {
    // Clear the body of the form
    // This is dynamically generated
    MODAL_BODY.innerHTML = null;
}

function createSpacer() {
    let spacer = document.createElement('div');
    spacer.classList.add('default-spacer');
    return spacer;
}

// Pre-Populate Utility methods
function populateForm() {

};

function getUserTaskDataByTaskId(taskId) {

};



// Initialisation Code
genMenuLayout();
genTaskCounter();
populateForm();