// START REF DATA

// Reference tables to pre-populate screen
// Pre-fill Data for form (basically build form from provided model)
var NOTE_TYPE_CONTROL = "control";
var NOTE_TYPE_REQUIREMENT = "requirement";
var NOTE_TYPE_MODULE = "module";
var NOTE_TYPE_RECORD = "record";

var UNIT_REF_TABLE = [
    {
        id: 1,
        name: "Unit 1 - Basic driving procedures",
        backgroundImagePath: "./assets/unit-headings/heading-1.webp"
    },
    {
        id: 2,
        name: "Unit 2 - Slow speed Manoeuvres",
        backgroundImagePath: "./assets/unit-headings/heading-2.webp"
    },
    {
        id: 3,
        name: "Unit 3 - Basic road skills",
        backgroundImagePath: "./assets/unit-headings/heading-3.webp"
    },
    {
        id: 4,
        name: "Unit 4 - Traffic management skills",
        backgroundImagePath: "./assets/unit-headings/heading-4.webp"
    },
    {
        id: 5,
        name: "Units 1 and 2 - Review",
        backgroundImagePath: "./assets/unit-headings/heading-5.webp"
    },
    {
        id: 6,
        name: "Units 3 and 4 - Review",
        backgroundImagePath: "./assets/unit-headings/heading-6.webp"
    }
];

// Pre-fill Data for form
var TASK_REF_TABLE = [
    // Unit 1 Start
    {
        id: 1,
        unitId: 1,
        name: "Cabin drill and controls"
    },
    {
        id: 2,
        unitId: 1,
        name: "Starting up and shutting down the engine"
    },
    {
        id: 3,
        unitId: 1,
        name: "Moving off from the kerb"
    },
    {
        id: 4,
        unitId: 1,
        name: "Stopping and securing the vehicle"
    },
    {
        id: 5,
        unitId: 1,
        name: "Stop and go (using the park brake)"
    },
    {
        id: 6,
        unitId: 1,
        name: "Gear changing (up and down)"
    },
    {
        id: 7,
        unitId: 1,
        name: "Steering (forward and reverse)"
    },
    {
        id: 8,
        unitId: 1,
        name: "Review of all basic driving procedures"
    },
    // Unit 1 End

    // Unit 2 Start
    {
        id: 9,
        unitId: 2,
        name: "Moving off uphill"
    },
    {
        id: 10,
        unitId: 2,
        name: "The U-turn"
    },
    {
        id: 11,
        unitId: 2,
        name: "The 3-point turn"
    },
    {
        id: 12,
        unitId: 2,
        name: "90-degree angle park (front to kerb)"
    },
    {
        id: 13,
        unitId: 2,
        name: "Reverse parallel parking"
    },
    {
        id: 14,
        unitId: 2,
        name: "Review of all slow speed manoeuvres"
    },
    // Unit 2 End

    // Unit 3 Start
    {
        id: 15,
        unitId: 3,
        name: "Vehicle road positioning"
    },
    {
        id: 16,
        unitId: 3,
        name: "Lane changing and diverging/merging"
    },
    {
        id: 17,
        unitId: 3,
        name: "Turning at intersections"
    },
    {
        id: 18,
        unitId: 3,
        name: "Turning onto from laned roads"
    },
    {
        id: 19,
        unitId: 3,
        name: "Negotiating Roundabouts"
    },
    {
        id: 20,
        unitId: 3,
        name: "Negotiating traffic lights"
    },
    {
        id: 21,
        unitId: 3,
        name: "Light traffic urban driving"
    },
    {
        id: 22,
        unitId: 3,
        name: "Country driving (driving at higher speeds)"
    },
    // Unit 3 End

    // Unit 4 Start
    {
        id: 23,
        unitId: 4,
        name: "Safe driving strategies"
    },
    {
        id: 24,
        unitId: 4,
        name: "Lane management in traffic"
    },
    {
        id: 25,
        unitId: 4,
        name: "Turning in traffic"
    },
    {
        id: 26,
        unitId: 4,
        name: "Managing traffic at roundabouts"
    },
    {
        id: 27,
        unitId: 4,
        name: "U-turn in traffic manoeuvre"
    },
    {
        id: 28,
        unitId: 4,
        name: "Negotiating traffic lights in traffic"
    },
    {
        id: 29,
        unitId: 4,
        name: "Driving on unsealed roads"
    },
    {
        id: 30,
        unitId: 4,
        name: "Driving at night"
    },
    // Unit 4 End

    // Unit 5 Start
    {
        id: 31,
        unitId: 5,
        name: "Review of basic driving skills"
    },
    // Unit 5 End

    // Unit 6 Start
    {
        id: 32,
        unitId: 6,
        name: "Review of road skills and traffic management"
    }
    // Unit 6 End
];

var TASK_REF_LEARNING_OUTCOME_TABLE = [
    {
        id: 1,
        taskId: 1,
        description: ["The learner will be able to set up the cabin of the vehicle in order to safely, efficiently and effectively drive the vehicle (cabin drill) and be able to locate and identify all controls."]
    },

    {
        id: 2,
        taskId: 2,
        description: ["The learner will be able to safely start the engine of the vehicle",

        "The learner will be able to safely shut down the engine of the vehicle."
        ]
    },

    {
        id: 3,
        taskId: 3,
        description: [
            "The learner will be able to move off from the left kerb in a safe and efficient manner with the vehicle under full control at the first attempt."
        ]
    },

    {
        id: 4,
        taskId: 4,
        description: [
            "The learner will bring the vehicle to a smooth and controlled stop at the left kerb from 30-60 km/h with safety, without stalling and when requested; and",

            "The learner will correctly secure the vehicle to avoid rolling."
        ]
    },

    {
        id: 5,
        taskId: 5,
        description: [
            "The learner will be able to bring the vehicle to a smooth stop in first gear (manuals only) and, with the aid of the park brake, immediately move off smoothly while maintaining full control of the vehicle."
        ]
    },

    {
        id: 6,
        taskId: 6,
        description: [
            "The learner will be able to change gears (in either a manual or automatic vehicle) up and down in the transmission in a reasonably smooth manner without looking at the gear lever while maintaining full steering control; and",

            "The learner will be able to accurately select any appropriate gear on demand without looking at the gear lever (including automatics)."
        ]
    },

    {
        id: 7,
        taskId: 7,
        description: [
            "The learner will be able to competently and accurately steer the vehicle on a straight course, and turn to the right and to the left through 90 degrees when travelling in a forward direction while maintaining full vehicle control; and",

            "The learner will be able to competently steer the vehicle on a straight course, and turn to the left through approximately 90 degrees, when travelling in reverse."
        ]
    },

    {
        id: 8,
        taskId: 8,
        description: [
            "The learner will competently demonstrate each of the learning outcomes from Tasks 1 to 7."
        ]
    },

    {
        id: 9,
        taskId: 9,
        description: [
            "The learner will be able to smoothly stop and secure the vehicle on any reasonable uphill gradient; and",

            "The learner will be able to move off competently and safely on any reasonable uphill gradient while in full control of the vehicle without stalling or rolling backwards."
        ]
    },

    {
        id: 10,
        taskId: 10,
        description: [
            "The learner will be able to select a suitable and safe location to perform the U-turn (kerb to kerb and at intersections); and",

            "The learner will be able to turn the vehicle around competently and safely within the confines of the carriageway of a road without the need for reversing while maintaining full control of the vehicle."
        ]
    },

    {
        id: 11,
        taskId: 11,
        description: [
            "The learner will be able to select a safe and suitable location to perform the 3-point turn; and",

            "The learner will be able to turn the vehicle around safely and competently within the boundaries of a carriageway that is narrower than the turning circle of the vehicle while maintaining full control of the vehicle."
        ]
    },

    {
        id: 12,
        taskId: 12,
        description: [
            "The learner will be able to enter a 90 degree angle park (if available), front to the kerb, safely and competently while maintaining full control of the vehicle; and",

            "The learner will be able to leave a 90 degree angle park (if available) safely and competently while maintaining full control of the vehicle."
        ]
    },

    {
        id: 13,
        taskId: 13,
        description: [
            "The learner will be able to leave a confined parallel parking bay safely and competently while maintaining full control of the vehicle; and",

            "The learner will be able to park the vehicle in a confined parallel parking bay safely and competently while maintaining full control of the vehicle."
        ]
    },

    {
        id: 14,
        taskId: 14,
        description: [
            "The learner will be able to competently demonstrate each learning outcome from Tasks 9 to 13."
        ]
    },

    {
        id: 15,
        taskId: 15,
        description: [
            "The learner will safely and competently position the vehicle correctly on laned and unlaned roads in accordance with the law and ’System of Car Control’;",

            "The learner will maintain safe following distances from other vehicles and safety margins when passing stationary objects or bicycle riders; and",

            "The learner will correctly position the vehicle when turning left or right."
        ]
    },

    {
        id: 16,
        taskId: 16,
        description: [
            "The learner will be able to change lanes safely and competently to the right and to the left while complying with the ‘System of Car Control’; and",

            "The learner will be able to diverge safely and competently to the left or right or merge with other traffic while complying with the ‘System of Car Control’."
        ]
    },

    {
        id: 17,
        taskId: 17,
        description: [
            " The learner will be able to turn safely and competently to the left and to the right (with and without a stop) at simple intersections while complying with the‘System of Car Control’ and the rules for turning and giving way; and",

            "The learner will demonstrate correct compliance with ‘Stop’ and ‘Give Way’ signs."
        ]
    },

    {
        id: 18,
        taskId: 18,
        description: [
            "The learner will be able to demonstrate turning left and right safely on to and from laned roads using the ‘System of Car Control’ while complying with the ‘Give Way’ rules and the laws relating to turning."
        ]
    },

    {
        id: 19,
        taskId: 19,
        description: [
            "The learner will be able to turn left, turn right and go straight on safely at unlaned and laned roundabouts while complying with all laws relating to giving way and positioning on roundabouts, and the ‘System of Car Control’."
        ]
    },

    {
        id: 20,
        taskId: 20,
        description: [
            " The learner will safely negotiate traffic lights (without arrows) by turning right, left and proceeding straight ahead while complying with all laws and ‘System of Car Control’; and",

            "The learner will safely demonstrate turning left at slip lanes."
        ]
    },

    {
        id: 21,
        taskId: 21,
        description: [
            "The learner will comply with the law while negotiating Emu, Koala and Wombat pedestrian crossings, school zones and cross road intersections (where available);",

            "The learner will comply with all speed limits associated with speed zones, road works, bridges, built-up areas, schools and car parks; and",

            "The learner will demonstrate reasonable progress: (i) by keeping up with the flow of traffic when it is practicable, legal and safe, (ii) when negotiating cross road intersections whilst complying with the ‘System of Car Control’."
        ]
    },

    {
        id: 22,
        taskId: 22,
        description: [
            "The learner will demonstrate accurate compliance with the ‘System of Car Control’, Rules of Braking, Steering and Observation (see pages 10 to 17) as applied to bends, crests and overtaking while driving at higher speeds; and",

            "The learner will maintain full control of the vehicle while driving at higher speeds."
        ]
    },

    {
        id: 23,
        taskId: 23,
        description: [
            "The learner will competently maintain safe following distances, passing clearances and appropriate positioning of the vehicle for improved forward observation in medium to heavy traffic; and",

            "Demonstrate compliance with the ‘System of Car Control’ when approaching potential hazards in traffic."
        ]
    },

    {
        id: 24,
        taskId: 24,
        description: [
            "The learner will be able to select the appropriate lane safely and competently well in advance to maintain reasonable progress and efficient traffic flow; and",

            "The learner will be able to change lanes safely and competently in traffic while complying with the ‘System of Car Control’."
        ]
    },

    {
        id: 25,
        taskId: 25,
        description: [
            "The learner will turn right and left safely and competently in traffic under full control while complying with the ‘Give Way’ laws, ‘turning’ laws and the ‘System of Car Control’; and",

            "The learner will competently select safe gaps when entering or crossing a flow of traffic on busy roads without unnecessary hesitation."
        ]
    },

    {
        id: 26,
        taskId: 26,
        description: [
            "The learner will be able to turn right, left and travel straight-on safely and competently at laned and unlaned roundabouts in medium to heavy traffic while complying with the law and the ‘System of Car Control’."
        ]
    },

    {
        id: 27,
        taskId: 27,
        description: [
            "The learner will be able to select a safe and suitable location on a busy road and competently perform a U-turn with safety without the need for reversing; and",

            "The learner will be able to choose a safer option to a U-turn where the turn may be obstructed due to changing traffic conditions."
        ]
    },

    {
        id: 28,
        taskId: 28,
        description: [
            "The learner will be able to travel straight on, turn left and right safely and competently at traffic lights (with and without arrows) in medium to heavy traffic in accordance with the ‘System of Car Control’; and",

            "The learner will comply with the appropriate road laws governing the operation of traffic lights, signalling, turning, positioning the vehicle and ‘Giving Way’.",

            "The learner will comply with the appropriate road laws when negotiating ‘slip’ lanes"
        ]
    },

    {
        id: 29,
        taskId: 29,
        description: [
            "The learner will be able to negotiate bends, crests and intersections safely and competently on unsealed roads using the ‘System of Car Control’, Rules of Braking, Steering and Observation while complying with the law."
        ]
    },

    {
        id: 30,
        taskId: 30,
        description: [
            "The learner will be able to safely and competently demonstrate the maintenance of safe following distances, passing clearances and appropriate position of the vehicle for improved forward observation in relation to visual and speed adjustments using the ‘System of Car Control’, Rules of Braking, Steering and Observation while complying with the law"
        ]
    },

    {
        id: 31,
        taskId: 31,
        description: [
            "The learner will be able to accurately perform one example of each of the learning outcomes for the Basic Driving Procedures as identified in Unit 1, Tasks 1 to 7 without assistance; and",

            "The learner will be able to accurately perform one example of each of the Slow Speed Manoeuvres as identified in Unit 2, Tasks 9 to 13 without assistance."
        ]
    },

    {
        id: 32,
        taskId: 32,
        description: [
            "The learner will competently demonstrate a safe, efficient drive in medium to heavy traffic where practicable, of not less than 25 minutes duration without assistance while complying with all road laws, the ‘System of Car Control’, Rules of Braking, Steering and Observation."
        ]
    }
];

var TASK_REF_ASSESSMENT_STANDARD_TABLE = [
    {
        id: 1,
        taskId: 1,
        description:[ "The learner will accurately perform this task without assistance.",
        "The assessment will be a demonstration on at least two consecutive but separate occasions."]
    },

    {
        id: 2,
        taskId: 2,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 3,
        taskId: 3,
        description:[
            "The learner will accurately perform this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 4,
        taskId: 4,
        description:[
            "The learner will accurately perform this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 5,
        taskId: 5,
        description:[
            "The learner will accurately perform this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 6,
        taskId: 6,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 7,
        taskId: 7,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 8,
        taskId: 8,
        description:[
            "The learner will perform one complete example of each of the learning outcomes for Tasks 1 to 7 without assistance. Any learning outcome that does not meet the standard for the task must be re-trained and re-assessed in accordance with the assessment method and standard for that original task."
        ]
    },

    {
        id: 9,
        taskId: 9,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task together without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 10,
        taskId: 10,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task together without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 11,
        taskId: 11,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task together without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 12,
        taskId: 12,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task together without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separate occasions."
         ]
    },

    {
        id: 13,
        taskId: 13,
        description:[
            "The learner will accurately perform parts (1) and (2) of this task together without assistance.",

            "The assessment will be a demonstration on at least two consecutive but separated occasions if training has been given. Two attempts at the manoeuvre are allowed to achieve each successful demonstration."
        ]
    },

    {
        id: 14,
        taskId: 14,
        description:[
            "The learner will perform one complete example of each of the learning outcomes for Tasks 9 to 13 without assistance. Any learning outcome that does not meet the standard for the task must be re-trained and re-assessed in accordance with the assessment method and standard for that original task."
        ]
    },

    {
        id: 15,
        taskId: 15,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance."
        ]
    },

    {
        id: 16,
        taskId: 16,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law over the complete assessment without assistance."
        ]
    },

    {
        id: 17,
        taskId: 17,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance."
        ]
    },

    {
        id: 18,
        taskId: 18,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 19,
        taskId: 19,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 20,
        taskId: 20,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 21,
        taskId: 21,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 22,
        taskId: 22,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 23,
        taskId: 23,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 24,
        taskId: 24,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 25,
        taskId: 25,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 26,
        taskId: 26,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 27,
        taskId: 27,
        description:[
            "The learner will accurately perform Parts (1) and (2), or (1) and (3) of this task without assistance. The assessment will be a demonstration on at least two consecutive but separate occasions."
        ]
    },

    {
        id: 28,
        taskId: 28,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    {
        id: 29,
        taskId: 29,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    },

    // {
    //     id: 30,
    //     taskId: 30,
    //     description: null
    // },

    {
        id: 31,
        taskId: 31,
        description:[
            "The learner will accurately perform one example of each of the learning outcomes for Tasks 1 to 7 and 9 to 13 without assistance. Any learning outcome that does not meet the standard for the original task must be re-assessed (after any retraining) in accordance with the assessment method and standard for that original task."
        ]
    },

    {
        id: 32,
        taskId: 32,
        description:[
            "The learner will demonstrate compliance with road craft concepts at least 80% of the time (see pages 10 to 17) and compliance with the law during the assessment without assistance"
        ]
    }
];

// One to Many Relationship
var TASK_REF_REQUIREMENT_TABLE = [
    {
        id: 1,
        taskId: 1,
        description: null,
        steps: [
            "Ensure the doors are closed (and locked for security and safety – optional);",
            "Check that the park brake is firmly applied;",
            "Adjust the seat, head restraint and steering wheel (as required);",
            "Adjust all mirrors (electric mirrors, if fitted, may be adjusted after ‘starting the engine’ – Task 2);",
            "Locate, identify and be able to use all vehicle controls (as required) when driving (including ‘climate’ controls);",
            "Perform all steps (a) to (e) in sequence;",
            "Ensure all required seat belts are fastened correctly."
        ]
    },

    {
        id: 2,
        taskId: 2,
        description: "Starting the engine",
        steps: [
            "If the park brake is not on, correctly apply it;",
            "Clutch down to the floor and keep it down (manuals only);",
            "Check gear lever in ‘Neutral’ (manuals) or ‘Neutral/Park’ (automatics);",
            "Switch the ignition (key) to the ‘ON’ position;",
            "Check all gauges and warning lights for operation;",
            "Start the engine;",
            "Check all gauges and warning lights again for operation; and",
            "Performs all steps 1(a) to 1(g) in sequence."
        ]
    },

    {
        id: 3,
        taskId: 2,
        description: "Shutting down the engine",
        steps: [
            "Bring the vehicle to a complete stop (clutch down-manuals);",
            "Secure the vehicle using the park brake;",
            "Select ‘Neutral’ (manuals) or ‘Neutral/Park’ (automatics);",
            "Release brake pedal (to check for rolling);",
            "Release clutch pedal (manuals only);",
            "Switch off appropriate controls (eg lights, air conditioner etc);",
            "Check all gauges and warning lights for operation;",
            "Turn ignition to ‘OFF’ or ‘LOCK’ position; and",
            "Perform all steps 2(a) to 2(h) in sequence."
        ]
    },

    {
        id: 4,
        taskId: 3,
        description: null,
        steps: [
            "If the park brake is not applied, correctly apply it;",
            "Check the centre mirror, then the right mirror, then signal right for at least 5 seconds;",
            "Push clutch pedal down (manuals) / Right foot on footbrake (automatics) until step (e);",
            "Select 1st gear (manuals) / Select ‘Drive’ (automatics);",
            "Apply appropriate power, (and for manuals) clutch to ‘friction point’;",
            "Check the centre mirror again, then the right mirror, then over the right shoulder (blind spot check) for traffic (from driveways, roads opposite or U-tuning traffic);",
            "If safe, look forward and release the park brake;",
            "Accelerate smoothly away from the kerb without stalling or rolling back, and cancel the signal; and",
            "Perform all steps (a) to (h) in sequence."
        ]
    },

    {
        id: 5,
        taskId: 4,
        description: "Stopping the vehicle (including slowing)",
        steps: [
            "Select appropriate stopping position;",
            "Check the centre mirror, then the left mirror (for cyclists etc.) and signal left ;",
            "Smoothly slow the vehicle (to just above engine idle speed) using the footbrake operated by the right foot",
            "(For manuals) push the clutch down just before reaching engine idle speed to prevent stalling while maintaining light pressure on the footbrake;",
            "Bring vehicle to a smooth stop without jerking the vehicle; and",
            "Perform all steps 1(a) to 1 (e) in sequence."
        ]
    },

    {
        id: 6,
        taskId: 4,
        description: "Securing the vehicle (to prevent rolling)",
        steps: [
            "Check that the vehicle has stopped (as above) and correctly apply the park brake to prevent rolling;",
            "Select ‘Neutral’ (manuals) or ‘Park’ (automatics);",
            "Release the brake pedal and then (for manuals) release the clutch",
            "Perform all steps 2(a) to 2(c) in sequence; and",
            "Cancel any signal after stopping."
        ]
    },

    {
        id: 7,
        taskId: 5,
        description: null,
        steps: [
            "Select the suitable stopping position on the road (e.g. – stop lines, positioning for view and proximity to other vehicles);",
            "Check the centre mirror, (then if required the appropriate side mirror), and if required signal intention;",
            "Slow the vehicle smoothly using the footbrake only;",
            "For manuals only, when the vehicle slows to just above stalling speed, push the clutch down;",
            "For manuals only, just as the vehicle is stopping, select first gear;",
            " When the vehicle comes to a complete stop, apply the park brake (holding the handbrake button in, where possible*) and release the footbrake (right foot placed over accelerator);",
            "Check that it is safe to move off and apply appropriate power (and for manuals, clutch to friction point);",
            "If safe, look forward and release the park brake which results in the vehicle immediately moving off in a smooth manner without stalling and under full control; and",
            "Perform all steps (a) to (h) in sequence."
        ]
    },

    {
        id: 8,
        taskId: 6,
        description: "Changing gears (up and down, manual and automatics)",
        steps: [
            "Move off smoothly from a stationary position in first gear (manuals) or (automatics);",
            "Adjust the speed of the vehicle prior to selecting the new gear;",
            "Change gears, one at a time from first gear (manuals) or the lowest gear (automatics) through to the highest gear without clashing, missing the gear, unnecessarily jerking the vehicle OR looking at the gear lever;",
            "Change gear from a high gear (4th, 5th or ‘Drive’) to various appropriate gears without significantly jerking the vehicle OR looking at the gear lever/selector; and",
            "Demonstrate full control (including steering) over the vehicle during gear changing"         
        ]
    },

    {
        id: 9,
        taskId: 6,
        description: "Accurate selection of appropriate gears for varying speeds",
        steps: [
            "Adjust the speed of the vehicle up and down and then select the appropriate gear for that speed (manuals and automatics);",
            "When the vehicle is moving, demonstrate all gear selections without looking at the gear lever or gear selector; and",
            "Demonstrate accurate selection of the gears without significant jerking of the vehicle or clashing of gears.",
            "Demonstrate the selection of appropriate gears, whilst descending and ascending gradients; and",
            "Be able to select an appropriate gear to avoid unnecessary braking on descents and to have control on ascents."
        ]
    },

    {
        id: 10,
        taskId: 7,
        description: "Steering in a forward direction",
        steps: [
            "Maintain a straight course of at least 100 metres between turns with the hands placed in approximately the “10 to 2” clock position on the steering wheel with a light grip pressure;",
            "Demonstrate turning to the left and right through 90 degrees using either the “Pull-Push” or “Hand over Hand” method of steering while maintaining full vehicle control without over-steering;and",
            "Look in the direction where the driver is intending to go when turning (First Rule of Observation - Aim high in steering)."
        ]
    },

    {
        id: 11,
        taskId: 7,
        description: "Steering in reverse",
        steps: [
            "Reverse the vehicle in a straight line for a minimum of 20 metres with a deviation not exceeding 1 metre, followed by step 2(b);",
            "Reverse the vehicle through an angle of approximately 90 degrees to the left followed by reversing in a straight line for 5 metres with a deviation not exceeding half a metre (500mm); and;",
            "Look in the appropriate directions and to the rear while reversing."
        ]
    },

    {
        id: 12,
        taskId: 8,
        description: null,
        steps: [
            "Demonstrate Task 1 – cabin drill and controls",
            "Demonstrate Task 2 – starting up and shutting down the engine",
            "Demonstrate Task 3 – moving off from the kerb",
            "Demonstrate Task 4 – stopping and securing the vehicle",
            "Demonstrate Task 5 – stop and go (using the park brake)",
            "Demonstrate Task 6 – gear changing (up and down)",
            "Demonstrate Task 7 – control of the steering (forward and reverse)"
        ]
    },

    {
        id: 13,
        taskId: 9,
        description: "Stopping and securing the vehicle on a hill",
        steps: [
            "Select a suitable safe and legal place on the gradient to stop;",
            "Check the centre mirror, then the left mirror (for cyclists etc.), and signal left;",
            "Smoothly slow the vehicle (to just above engine idle speed) using the footbrake operated by the right foot;",
            "(For manuals) push the clutch down just before reaching engine idle speed to prevent stalling while maintaining light pressure on the footbrake;",
            "Bring vehicle to a smooth stop without jerking the vehicle;",
            "Check that the vehicle has stopped (as above) and correctly apply the park brake to prevent rolling;",
            "Select ‘Neutral’ (manuals) or ‘Park’ (automatics), then release the brake pedal, then (for manuals) release the clutch;",
            "Perform all steps 1(a) to 1(g) in sequence;",
            "cancel any signal after stopping."
        ]
    },

    {
        id: 14,
        taskId: 9,
        description: "Moving off uphill",
        steps: [
            "If the park brake is not applied, correctly apply it;",
            "Check the centre mirror, then the right mirror, then signal right for at least 5 seconds;",
            "Push clutch pedal down (manuals) / right foot on brake pedal (automatics);",
            "Select first gear (manuals) / or select ‘drive’ (automatics);",
            " Apply appropriate power to prevent rolling backwards and/or stalling, (and for manuals) bring the clutch to ‘friction point’ absorbing about half of the engine noise;",
            "Check the centre mirror again then the right mirror, then over the right shoulder (blind spot check) for traffic (from driveways, roads opposite or U-turning traffic);",
            "If safe, look forward, release the park brake;",
            "Accelerate smoothly from the kerb without stalling or rolling back, and then cancel the signal;",
            "Perform all steps 2(a) to 2(h) in sequence while maintaining full control of the vehicle."
        ]
    },

    {
        id: 15,
        taskId: 10,
        description: "Selecting a location for the U-turn",
        steps: [
            "Select a location where the U-turn is legally permitted, can be completed without reversing and is not in a ‘No Stopping’ area, or opposite parked vehicles or where visibility in any direction is poor;",
            "Select a location where there is sufficient visibility in all directions to enable the U-turn to be done safely; and",
            "When stopping at the kerb comply with Task 4"
        ]
    },

    {
        id: 16,
        taskId: 10,
        description: "The ‘U’ Turn",
        steps: [
            "Comply with the Give Way rules (for U-turn) by giving way to all other traffic using the road during this manoeuvre;",
            "Comply with the ‘moving off from the kerb’ procedure where practicable as stated in Task 3;",
            "Move the vehicle slowly forward (signalling appropriately) while turning the steering wheel (dry/stationary steering not permitted) until on full steering lock (if required);",
            "Prior to the vehicle changing direction, observe in all directions for approaching traffic and other road users e.g. pedestrians (also paying attention to driveways and roads opposite); and",
            "When safe, accelerate smoothly away without stalling or over-steering while maintaining full control of the vehicle."
        ]
    },

    {
        id: 17,
        taskId: 11,
        description: "Selecting a location for the 3-point turn",
        steps: [
            "Select a suitable safe and legal place at the kerb to stop;",
            "Check the centre mirror, then the left mirror (for cyclists etc.) and signal left.",
            "Ensure that there are no obstructions next to the kerb forward of the centre of the vehicle on the left (reversing area);",
            "Smoothly slow the vehicle (to just above engine idle speed) using the footbrake operated by the right foot;",
            "(For manuals) push the clutch down just before reaching engine idle speed to prevent stalling while maintaining light pressure on the footbrake;",
            "Bring vehicle to a smooth stop without jerking the vehicle;",
            "Check that the vehicle has stopped;",
            "If preparing to immediately commence the 3-point turn, ensure the correct gear has been selected in preparation to move off (apply park brake if required);",
            "OR If intending to fully secure the vehicle, apply the park brake and select neutral (manuals) Park (automatics) and release the brake pedal and then (for manuals) release the clutch;",
            "Perform all steps 1(a) to 1(h) in sequence;",
            "Cancel any signal after stopping"
        ]
    },

    {
        id: 18,
        taskId: 11,
        description: "The 3-point turn (U-turn including reversing)",
        steps: [
            "Check the centre mirror, then the right mirror, then signal right for at least 5 seconds;",
            " (If moving off from fully secured) Push clutch pedal down (manuals) / right foot on brake pedal (automatics) / select 1st gear (manuals) / select ‘drive’ (automatics);",
            "Apply appropriate power, (and for manuals) clutch to ‘friction point’;",
            "Check the centre mirror again, then the right mirror, then over the right shoulder (blind spot check) for traffic (from driveways, roads opposite or U-turning traffic);",
            "If safe, look forward (release the park brake as required);",
            "Accelerate smoothly away from the kerb without stalling or rolling back while turning the steering wheel to the right (dry/stationary steering not permitted) until on full steering lock (if required) and cancel the signal;",
            "About 1 metre from the right kerb and whilst keeping the vehicle moving, turn the steering wheel sufficiently to the left (dry/stationary steering not permitted);",
            "Stop before touching the kerb;",
            "Select reverse gear, apply the park brake if required (holding the button in - optional) and check both directions and behind (over shoulders);",
            "Move off in reverse without rolling or stalling (continue steering left as required), under full control and continue checking in all directions (moving head and eyes) whilst reversing;",
            "About 1 metre from the kerb whilst keeping the vehicle moving, steer sufficiently to the right (dry/stationary steering not permitted) and prepare to move off down the road;",
            "Stop before touching the kerb;",
            " Select first gear or ‘Drive’, apply the park brake if required (holding the button in - optional) and check both ways for traffic;",
            "When safe, move off down the road maintaining full control of the vehicle without stalling or over-steering (aim high in steering); and",
            "Perform all steps 2(a) to 2(n) in sequence."
        ]
    },

    {
        id: 19,
        taskId: 12,
        description: "Entering a 90 degree angle park (front to kerb)",
        steps: [
            "Select a suitable parking bay, check the centre mirror, then check the appropriate side mirror, then apply the appropriate signal for sufficient time, then signal, and slow the vehicle to a safe and controllable speed;",
            "Choose the appropriate gear for control (if required);",
            "Check appropriate mirror/s or blind spot/s (for approaching vehicles and/or pedestrians) prior to turning into the parking bay; and",
            "Correctly position the vehicle, front to kerb, wholly within the bay (on the first attempt) while maintaining full control without touching the kerb: (i) Not more than 300 mm out of parallel with the lines; (ii) Not more than 300 mm from the kerb or end of parking bay; & (iii) Where practicable, central within the parking bay with the front wheels pointing straight ahead towards the kerb."
        ]
    },

    {
        id: 20,
        taskId: 12,
        description: "Leaving a 90 degree angle park",
        steps: [
            "Select reverse gear;",
            "Constantly check behind (over shoulders), both sides and to the front before moving and during reversing;",
            "Reverse slowly under full control of the vehicle and check for clearance of the front of the vehicle (where appropriate);",
            "Reverse the vehicle only for such a distance as is necessary and turn the steering wheel sufficiently to allow the vehicle to safely clear the parking bay alongside and counter steering sufficiently (dry/stationary steering not permitted) in preparation to move off safely down the road without stalling or rolling; and",
            "Perform all steps above in sequence."
        ]
    },

    {
        id: 21,
        taskId: 13,
        description: "Leaving a confined parallel parking bay",
        steps: [
            "Prior to and during reversing, check right, left and behind (over shoulders) for other road users, including cyclists and pedestrians;",
            "Check the centre mirror, then check the right mirror, then signal right for minimum of five (5) seconds whilst complying with Task 3 (moving off from the kerb); (use of the park brake is optional as required)",
            "Exit the parking bay without touching the poles and without driving between the pole and the kerb.",
            "Stop so that the rear of the vehicle is just past the parking bay’s front pole and parallel to the kerb."
        ]
    },

    {
        id: 22,
        taskId: 13,
        description: "Parking in a confined parallel parking bay",
        steps: [
            "Prior to and during reversing, check right, left and behind (over shoulders) for other road users, including cyclists and pedestrians;",
            "Check all around prior to turning the wheel to the left when reversing into the bay.",
            "After entering the parking bay, complete the exercise with no more than two directional changes (i.e. changes direction to drive forward to straighten, then changes direction for the second time to centralise between the poles);",
            "Parallel park the vehicle so that the left wheels are within 300mm of the kerb and straight, and centrally located not less than 900mm to the nearest pole;",
            "The wheels must not touch the kerb and the vehicle must not touch any pole or pass between any pole and the kerb; and",
            "Maintain full control of the vehicle (without stalling)."
        ]
    },

    {
        id: 23,
        taskId: 14,
        description: null,
        steps: [
            "Demonstrate one complete example of Task 9 (‘stopping and securing the vehicle on a hill’ and ‘moving off uphill’ procedure) on request;",
            "Demonstrate one complete example of Task 10 (‘the U-turn’) on request;",
            "Demonstrate one complete example of Task 11 (‘the 3-point turn’) on request;",
            "Demonstrate one complete example of Task 12 (‘entering and leaving a 90 degree angle park’) on request; and",
            "Demonstrate one complete example of Task 13 (‘reverse parallel parking’) on request.*"
        ]
    },

    {
        id: 24,
        taskId: 15,
        description: "Vehicle positioning on laned and unlaned roads",
        steps: [
            "Keep the vehicle as near as practicable to the left on unlaned roads without unnecessarily obstructing other traffic;",
            "Keep the vehicle wholly within the marked lane when travelling straight or in bends; and",
            "Use the space within the lane to maintain safety margins."
        ]
    },

    {
        id: 25,
        taskId: 15,
        description: "Maintain safe following distances and safety margins",
        steps: [
            "Maintain a minimum of three (3) seconds following interval (see page 17) from the vehicle in front;",
            "Allow a safety margin of at least 1.2 m (where practicable) when passing objects, vehicles/obstructions;",
            "Allow a minimum safety margin of 1 metre when passing a cyclist where the speed limit is 60kmh or less, and 1.5 metres where the speed limit is over 60kmh; and",
            "Stop in a position behind other vehicles allowing sufficient space to turn away from the vehicle in front if necessary."
        ]
    },

    {
        id: 26,
        taskId: 15,
        description: "Positioning for turns",
        steps: [
            "Correctly position the vehicle at ‘Stop’ lines (associated with ‘Stop’ signs, crossings and traffic lights etc.);",
            "Demonstrate appropriate road position at intersections when view is obstructed; and",
            "Demonstrate the correct approach and turn positions for turning left and right at intersections in accordance with the law."
        ]
    },

    {
        id: 27,
        taskId: 16,
        description: "Changing lanes procedure",
        steps: [
            "Select a suitable location (not approaching traffic lights etc.);",
            " Accurately apply the ‘System of Car Control’ when changing from one lane to another (either left or right); and",
            "Check the appropriate blind spot just before changing to the new lane."
        ]
    },

    {
        id: 28,
        taskId: 16,
        description: "Diverging or merging procedure",
        steps: [
            "When attempting to diverge, merge or zip merge ensure the vehicle is not directly alongside another vehicle (i.e. where practicable keep the vehicle off-set to others - Rules of Observation);",
            " When merging or diverging by more than 1 metre or crossing a lane line, comply with the ‘Lane Changing Procedure’(steps 1(a) to 3(c)) above and give way rules; and",
            "When merging or diverging by less than 1 metre, or diverging over a long distance when passing parked vehicles on an unlaned road, comply with step 1(b) above except signals and blind spots may be omitted only if safe.",
            "When merging with the flow of traffic, ensure that adequate speed is achieved prior to entering. The merge must have minimal impact on other road users (freeway on-ramps, extended slip lanes etc.); and",
            "When zip merging, pay particular attention when approaching signs and lane markings."
        ]
    },

    {
        id: 29,
        taskId: 17,
        description: "Turning at intersections (with a stop)",
        steps: [
            "Demonstrate turning left and right at intersections incorporating a stop while complying with the laws for turning;",
            "Demonstrate the ‘System of Car Control’ when turning right and left at intersections;",
            "Demonstrate safe observation patterns (Rules of Observation) while maintaining full vehicle control; and",
            "Comply with signalling requirements, ‘Stop’ and ‘Give Way’ signs and lines, and the give way rules at all times."
        ]
    },

    {
        id: 30,
        taskId: 17,
        description: "Turning at intersections (without a stop)",
        steps: [
            " Demonstrate turning left and right at intersections without a stop where practicable while complying with the laws for turning;",
            "Demonstrate the ‘System of Car Control’ when turning right and left at intersections;",
            "Demonstrate correct and timely observation patterns when turning left and right at intersections while maintaining full control of the vehicle; and",
            "Comply with signalling and ‘Give Way’ rules."
        ]
    },

    {
        id: 31,
        taskId: 17,
        description: "Negotiate ‘Stop’ and ‘Give Way’ signs/lines",
        steps: [
            "Comply with the ‘System of Car Control’ when negotiating ‘Stop’ and ‘Give Way’ signs and lines; and",
            "Comply with ‘Stop’ and ‘Give Way’ signs and lines."
        ]
    },

    {
        id: 32,
        taskId: 18,
        description: "Turning left onto and from laned roads",
        steps: [
            "Comply with all laws relating to signalling, turning and ‘Giving Way’;",
            "Approach every turn at a safe speed under full control;",
            "Correct and timely observation of any conflicting traffic when turning left;",
            "Apply appropriate acceleration during and after turning when entering the traffic flow of the other road; and",
            "Comply with the ‘System of Car Control’"
        ]
    },

    {
        id: 33,
        taskId: 18,
        description: "Turning right onto and from laned roads",
        steps: [
            "Comply with all laws relating to signalling, turning and ‘Giving Way’;",
            "Approach every turn at a safe speed under full control;",
            "Correct and timely observation of any conflicting traffic when turning right;",
            "Apply appropriate acceleration during and after turning when entering the traffic flow of the other road; and",
            "Comply with the ‘System of Car Control’."
        ]
    },

    {
        id: 34,
        taskId: 19,
        description: " Turning at unlaned roundabouts",
        steps: [
            "Comply with give way rules, signalling and correct vehicle positioning at unlaned roundabouts;",
            "Negotiate every roundabout at a safe speed under full control;",
            "Observe in the appropriate directions when approaching and during turns at unlaned roundabouts; and",
            "Comply with the ‘System of Car Control’."
        ]
    },

    {
        id: 35,
        taskId: 19,
        description: " Turning at laned roundabouts",
        steps: [
            "Demonstrate compliance with give way rules, signalling, arrows and correct vehicle positioning at roundabouts;",
            "Negotiate every roundabout at a safe speed under full control;",
            "Observe in the appropriate directions when approaching and during turns at laned roundabouts; and",
            "Comply with the ‘System of Car Control’."
        ]
    },

    {
        id: 36,
        taskId: 19,
        description: "Travelling straight on at a roundabout",
        steps: [
            "Demonstrate compliance with give way rules, signalling, arrows and co roundabout;",
            "Negotiate every roundabout at a safe speed under full control;",
            "Look in the appropriate directions when approaching and proceding through roundabouts; and",
            "Comply with the ‘System of Car Control’."
        ]
    },

    {
        id: 37,
        taskId: 20,
        description: "Turning left and right at traffic lights (without arrows)",
        steps: [
            "Comply with the law for traffic light signals, associated stop lines, turning lines and arrows;",
            "Enter and correctly position vehicle lawfully within the intersection when stopping to give way to opposing traffic;",
            "When turning right, keep the front wheels straight (where practicable) while waiting to give way to on-coming traffic; and",
            "Comply with Tasks 17 and 18 requirements when turning."
        ]
    },

    {
        id: 38,
        taskId: 20,
        description: "Following a straight course through traffic lights",
        steps: [
            "Comply with the law for traffic light signals and associated stop lines;",
            "Comply with ‘System of Car Control’ approaching lights; and",
            "Apply correct stopping procedure (Task 4) as applicable."
        ]
    },

    {
        id: 39,
        taskId: 20,
        description: "Turning left through a slip lane (without arrows)",
        steps: [
            "Comply with all ‘Give Way’, signalling and road law;",
            "Comply with turning left requirements for Tasks 17 and 18 including safe speed of approach to the turn; and",
            "Demonstrate appropriate and timely observation patterns, and ‘System of Car Control’."
        ]
    },

    {
        id: 40,
        taskId: 21,
        description: "Pedestrian crossings, school zones and cross road intersections",
        steps: [
            "Comply with the laws for pedestrian crossings and school zones; and",
            "Accurately comply with the ‘System of Car Control’ at all cross road intersections on unlaned roads (centre mirror must be checked prior to observation)."
        ]
    },

    {
        id: 41,
        taskId: 21,
        description: "Speed limits",
        steps: [
            "Comply with all speed limits in speed zones and built-up areas whilst demonstrating awareness of changing speed limits; and",
            "Comply with speed limits for bridges, roadworks, schools, car parks and learner requirements."
        ]
    },

    {
        id: 42,
        taskId: 21,
        description: "Maintain reasonable progress",
        steps: [
            "Where safe and practicable, maintain a speed which is within 5 km/h of the legal speed limit but does not exceed the speed limit;",
            "Move off in a line of traffic without any unnecessary delay or obstructing other traffic;",
            "Does not slow excessively or stop unnecessarily at intersections where the view is open and clear, and it is safe to go; and",
            "Maintain at least a ‘3 second’ following distance between the vehicle in front and the learner’s vehicle."
        ]
    },

    {
        id: 43,
        taskId: 22,
        description: "Negotiating bends and crests",
        steps: [
            "Comply with speed limits, road markings, keeping left and ‘Due Care’ requirements while maintaining reasonable progress;",
            "Demonstrate a safe speed and position of approach to all bends and crests;",
            "Comply with ‘System of Car Control’ approaching bends and crests (including selection of the correct gear before the bend or crest);",
            "Comply with the Rules of Braking and ‘acceleration sense’ approaching bends and crests;",
            "Comply with the Rules of Steering when braking and cornering;",
            "Demonstrate good forward observation (Aim high in steering) and complies with the Rules of Observation; and",
            "Display safe and complete control of the vehicle at all times."
        ]
    },

    {
        id: 44,
        taskId: 22,
        description: "Overtaking other vehicles",
        steps: [
            "Correctly select a safe and suitable location to overtake while complying with the law (road markings, sufficient clear view);",
            "Maintain a reasonable following distance before overtaking in order to comply with the Rules of Observation; and",
            "Comply with ‘System of Car Control’ and use appropriate gears and acceleration where necessary; or",
            "If suitable overtaking situations do not occur, verbally demonstrate to the Authorised Examiner the selection of five safe and suitable locations where there is sufficient distance to overtake safely."
        ]
    },

    {
        id: 45,
        taskId: 23,
        description: "Safe positioning of the vehicle in traffic",
        steps: [
            "Keep at least 3 seconds time interval between the learner’s vehicle and the vehicle in front, increasing this interval for adverse weather conditions or if being closely followed;",
            "Where safe and practicable, keep at least 1.2 metre clearance when passing parked vehicles, or other hazards;",
            "Allow a minimum safety margin of 1 metre when passing a cyclist where the speed limit is 60kmh or less, and 1.5 metres where the speed limit is over 60kmh;",
            "Adjust the vehicle’s position by holding back if the vehicle in front obstructs the view ahead (Observation - Get the big picture);",
            "Maintain the vehicle’s position in a line of traffic without obstructing following traffic where it is safe and legal to do so;",
            "Avoid unnecessary travel in blind spots of other vehicles (Observation - Leave yourself an OUT);",
            "Where practicable, stop in a position behind other vehicles to allow sufficient space to turn away from the vehicle in front;",
            "Without obstructing the intersection stop in a line of traffic (road law); and",
            "Comply with all appropriate road rules."
        ]
    },

    {
        id: 46,
        taskId: 23,
        description: "System of Car Control’ as applied to traffic hazards",
        steps: [
            "Comply with the features of the ‘System of Car Control’ in the correct sequence when approaching hazards in traffic;",
            "Comply with ‘System of Car Control’ when approaching traffic lights (eg. check mirror, cover the brake, etc.);",
            "Demonstrate ‘System of Car Control’ when passing stationary buses or other similar hazards; and",
            "Demonstrate ‘System of Car Control’ when giving way."
        ]
    },

    {
        id: 47,
        taskId: 24,
        description: "Lane selection in traffic",
        steps: [
            "Identify potential hazards well in advance and take safe and appropriate action (Observation - Get the Big Picture);",
            "Confidently select safe gaps when changing lanes; and",
            "Select suitable and timely locations when changing lanes (‘System of Car Control’ - select the course)."
        ]
    },

    {
        id: 48,
        taskId: 24,
        description: "Lane changing in traffic",
        steps: [
            "Competently apply the ‘System of Car Control’ when changing from one lane to another (either left or right);",
            "Check the appropriate blind spot just before changing lanes;",
            "Co-operate with other drivers by accepting and giving reasonable offers of courtesy when safe; and",
            "Change lanes in traffic only when safe without significantly interfering with the flow of traffic in the newly selected lane."
        ]
    },

    {
        id: 49,
        taskId: 25,
        description: "Turning left onto and from busy roads",
        steps: [
            "Display compliance with all ‘Give Way’ and ‘turning’ rules (observation, braking and steering);",
            "Maintain full vehicle control throughout each turn (ie. no wide exits, question-mark turns, or stalls);",
            "When exiting or entering a busy road, keep as near as reasonably practicable to the left;",
            "Comply with the ‘System of Car Control’ throughout the assessment;",
            "Display competent selection of safe gaps when entering a traffic flow; and",
            "Display competent acceleration skills when entering a gap (See ‘System of Car Control’)."
        ]
    },

    {
        id: 50,
        taskId: 25,
        description: "Turning right onto and from busy roads",
        steps: [
            "Display compliance with all ‘Give Way’ and turning’ rules (observation, braking and steering);",
            "Maintain full vehicle control throughout each turn (ie. no wide exits, question-mark turns, or stalls);",
            "Comply with the ‘System of Car Control’ throughout the assessment;",
            "Make early selection of the most appropriate and lawful lane for turning;",
            "Display competent selection of safe gaps when entering or crossing a traffic flow when turning right; and",
            "Display competent acceleration skills when entering a safe gap or crossing a flow of traffic - (See ‘System of Car Control’)."
        ]
    },

    {
        id: 51,
        taskId: 26,
        description: "Managing traffic at unlaned roundabouts",
        steps: [
            "Comply with the requirements and standard as documented in Task 19 (1) - turning at unlaned roundabouts;",
            "Display competent and confident decision making when selecting safe gaps in traffic on the roundabout; and",
            "Demonstrate competent use of acceleration when joining and leaving a traffic stream on the carriageway of the roundabout."
        ]
    },

    {
        id: 52,
        taskId: 26,
        description: "Managing traffic at laned roundabouts",
        steps: [
            "Comply with the requirements and standard as documented in Task 19 (2) - turning at laned roundabouts;",
            "trate early selection of correct lanes before, during and after turning or when travelling straight on at the roundabout;",
            "Display competent and confident decision making when selecting safe gaps in traffic at the roundabout; and",
            "Demonstrate competent use of acceleration when joining and leaving a traffic stream on the carriageway of the roundabout."
        ]
    },

    {
        id: 53,
        taskId: 27,
        description: "Selecting a safe U-turn starting position",
        steps: [
            "Select a suitable position whilst complying with ‘System of Car Control’",
            "Select a position where only one major flow of traffic is required to be crossed during the U-turn; and",
            "Select the most appropriate position that minimises the disruption to overtaking or following traffic for that road (eg. a right turn store lane opposite a quiet road)."
        ]
    },

    {
        id: 54,
        taskId: 27,
        description: "Perform a safe and complete U-turn",
        steps: [
            "Comply with all road markings, and the ‘Give Way’ rules for turning and moving off (as required);",
            "Confidently select a safe gap in the traffic flow when presented;",
            "Use safe stopping areas within the U-turn as required; and",
            "Complete the U-turn safely without reversing while maintaining full control of the vehicle."
        ]
    },

    {
        id: 55,
        taskId: 27,
        description: "Select a safe alternative to the U-turn due to traffic",
        steps: [
            "If traffic conditions change where the U-turn could become confusing or dangerous to any road users, select an acceptable safe option; and",
            "Perform the optional action with safety."
        ]
    },

    {
        id: 56,
        taskId: 28,
        description: "Turning left and right at traffic lights (without arrows)",
        steps: [
            "Comply with Task 20;",
            "While waiting to turn right or left , correctly position the vehicle within the intersection when permitted by the traffic lights;",
            "Demonstrate confident selection of safe gaps when turning into or across a traffic flow;",
            "Display appropriate use of acceleration for safety during the turn while maintaining full control of the vehicle; and",
            "Ensure that other vehicles are not unnecessarily obstructed when turning."
        ]
    },

    {
        id: 57,
        taskId: 28,
        description: "Following a straight course through traffic lights",
        steps: [
            "Comply with Task 20; and",
            "Display correct and confident decision making on approach to traffic lights having regard for weather, road conditions and following traffic (type of vehicle and how near they are)."
        ]
    },

    {
        id: 58,
        taskId: 28,
        description: "Negotiating ‘slip’ lanes (without arrows)",
        steps: [
            "Comply with Task 20;",
            "Demonstrate confident selection of safe gaps when turning left through a ‘slip’ lane into a flow of traffic; and",
            "Display appropriate use of acceleration for safety during and after the turn while maintaining full control of the vehicle."
        ]
    },

    
    {
        id: 59,
        taskId: 29,
        description: null,
        steps: [
            "Demonstrate compliance with all appropriate road laws (eg. as near as practicable to the left, etc.);",
            "Maintain full control of the vehicle at all times (skidding or sliding at any time is considered to be loss of control – see system of car control);",
            "Demonstrate a safe speed of approach to bends, crests and intersections at all times;",
            "Demonstrate safe and correct entry lines into bends (for good view and being seen - Rules of Observation);",
            "Demonstrate safe and correct exit lines from bends (ensuring the vehicle leaves the bend on the correct side of the road – if any part of the vehicle strays onto the incorrect side of the road it is a road law fault – see step (a));",
            "Comply with the ‘System of Car Control’, Rules of Braking, Steering and Observation;",
            "Correctly adjust speed to that which is suitable to any change of road surface;",
            "Correctly adjust the following distance and use headlights as required when following another vehicle (eg. decreased visibility due to dust etc.); and",
            "Correctly adjust the speed (minimum use of the accelerator) when passing another vehicle travelling in the opposite direction (to reduce the risk of possible windscreen damage)."
        ]
    },


    {
        id: 60,
        taskId: 30,
        description: "Recognition of current skills and knowledge",
        steps: [
            "Question learner on speed limits, keeping to the left, 3-Second Rule Formula, Use of headlights, ‘System of Car Control’, Rules of Braking, Steering and Observation; and"
        ]
    },

    {
        id: 61,
        taskId: 30,
        description: "Driving at night",
        steps: [
            "Explain adjustments required in speed and positioning in regard to visual deficiencies.",
            "Explain the requirements in relation to clean windscreens and headlights.",
            " Explain the requirements in relation to dipping headlights. (eg when following within 200m from the rear of other traffic and when approaching vehicle reaches a point 200m from your vehicle or immediately the headlights of an approaching vehicle are dipped, whichever is sooner).",
            "Explain the confusion that may occur when driving in built up areas due to the mixture of neon signs, traffic lights, store lights, street lighting, etc.",
            "Explain the need to be ‘seen’ (eg do not forget to turn on headlights). Explain the lack of visual eye contact with other road users.",
            "Demonstrate correct application of ‘System’."
        ]
    },

    {
        id: 62,
        taskId: 30,
        description: "Demonstrate night driving",
        steps: [
            "Trainee to demonstrate under full instruction",
            "Trainee to demonstrate with instruction as required; and",
            "Trainee to practice until competent."
        ]
    },

    {
        id: 63,
        taskId: 31,
        description: "Review of all tasks in Unit 1",
        steps: [
            "Accurately perform Task 1 - cabin drill and controls",
            "Accurately perform Task 2 - starting up and shutting down the engine",
            "Accurately perform Task 3 - moving off from the kerb",
            "Accurately perform Task 4 - stopping and securing the vehicle",
            "Accurately perform Task 5 - stop and go (using the park brake)",
            "Accurately demonstrate Task 6 - gear changing",
            "Accurately demonstrate Task 7 - control of the steering (forward and reverse)"
        ]
    },

    {
        id: 64,
        taskId: 31,
        description: "Review of all tasks in Unit 2",
        steps: [
            "Accurately perform Task 9 - stopping and securing the vehicle on a hill and moving off uphill",
            "Accurately perform Task 10 - the U-turn",
            "Accurately perform Task 11 - the 3-point turn",
            "Accurately perform Task 12 - entering and leaving a 90 degree angle park",
            "Accurately perform Task 13 - reverse parallel parking"
        ]
    },

    {
        id: 65,
        taskId: 32,
        description: null,
        steps: [
            "Comply with all road laws;",
            "Comply with the ‘System of Car Control’ to left and right turns, traffic lights, stopping, lane changes and other potential traffic hazards;",
            "Comply with the Rules of Braking, Steering and Observation; and",
            "Demonstrate appropriate forward planning, correct and timely road positioning, and safe driving strategies."
        ]
    },


];

var TASK_REF_CHANGE_CONTROLS_TABLE = [
    {
        id: 1,
        taskId: 1,
        name: "Group 1 (any 1)",
        steps: [
            "Brake",
            "Accelerator",
            "Steering Wheel",
            "Gear Lever (Including autos)"
        ]
    },

    {
        id: 1,
        taskId: 1,
        name: "Group 2 (any 1)",
        steps: [
            "Clutch (Manual only)",
            "Park Break",
            "Warning Device",
            "Signals"
        ]
    },

    {
        id: 1,
        taskId: 1,
        name: "Group 3 (any 1)",
        steps: [
            "Heater/Demister",
            "Wipers and washers",
            "Warning lights (any 3)",
            "Vehicle lights",
            "Gauges"
        ]
    }
];

// One to Many Relationship
var TASK_REF_NOTES_TABLE = [
    {
        id: 1,
        taskId: 1,
        note: ["This procedure may change due to manufacturer’s requirements"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_CONTROL
    },

    {
        id: 2,
        taskId: 2,
        note: ["This procedure may change due to manufacturer’s requirements"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 3,
        taskId: 3,
        note: ["This procedure may change due to manufacturer’s requirements"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 4,
        taskId: 4,
        note: ["This procedure may change due to manufacturer’s requirements"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 5,
        taskId: 5,
        note: ["different types of handbrakes"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 6,
        taskId: 5,
        note: [
            "This exercise is not ‘stopping at the kerb’ / ‘moving off from the kerb’ but may be assessed when stopping and moving away from a stop line, or stopping and moving away when turning right or left, or when momentarily stopping on a slight gradient in a line of traffic.",
            "This procedure may change due to manufacturer’s requirements e.g. hill hold"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 7,
        taskId: 6,
        note: ["This procedure may change due to manufacturer’s requirements"],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 8,
        taskId: 7,
        note: [
            "The exercise is to reverse through approximately 90 degrees and then recover to a straight position. It is a steering control exercise and NOT a ‘Reversing Around a Corner’ manoeuvre although a quiet corner may be used.",

            "Reversing cameras and other factory fitted driving aids do not replace required observations. However, they may be used as a reference."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 9,
        taskId: 9,
        note: [
            "This procedure may change due to manufacturer’s requirements",
            "A reasonable hill for the purpose of this exercise is the one with a gradient sufficient enough to create a likelihood of the vehicle rolling backwards. The automatic hill holder must be switched off.",
            "If, due to vehicle design, it is not possible to switch off the automatic hill-holder, the gradient must be sufficient enough to cause the automatic hill-holder to activate. A verbal explanation must also be provided covering the operation of a vehicle that is not fitted with an automatic hill holder as outlined above."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 10,
        taskId: 10,
        note: [
            "1. All five examples of U-turns must be trained, however under assessment the applicant must demonstrate two U-turns, which are not the same.",
            "2. Dry steering is not permitted as it can damage the road, particularly in hot weather."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 11,
        taskId: 10,
        note: [
            "This procedure may change due to manufacturer’s requirements"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 12,
        taskId: 11,
        note: [
            "This procedure may change due to manufacturer’s requirements"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 13,
        taskId: 12,
        note: [
            "This procedure may change due to manufacturer’s requirements",
            "When assessing this task, both left and right must be included, however under assessment the applicant may choose either left or right"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_RECORD
    },

    {
        id: 14,
        taskId: 13,
        note: [
            "Two attempts are permitted for a successful attempt at this manoeuvre to be recorded."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 15,
        taskId: 14,
        note: [
            "Two attempts are permitted for a successful attempt at this manoeuvre to be recorded."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 16,
        taskId: 19,
        note: [
            "Refer to Task 19 in CBT&A manual regarding the bracketed boxes"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 17,
        taskId: 20,
        note: [
            " If intersections controlled by traffic lights are not reasonably accessible, Task 28A must be conducted instead of Task 20 and 28."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 18,
        taskId: 22,
        note: [
            "Refer (2d) regarding the use of the bracketed boxes when recording five verbally demonstrated overtaking locations"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 19,
        taskId: 26,
        note: [
            "Refer Task 26 in CBT&A manual regarding the bracketed boxes"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },

    {
        id: 20,
        taskId: 29,
        note: [
            "This task is a replacement task for locations where there is no reasonable access to traffic lights and replaces Tasks 20 and 28"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_MODULE
    },

    {
        id: 21,
        taskId: 30,
        note: [
            "Task 28B is an optional Task. It is not compulsory for the Authorised Examiner to sign. This task has been placed in the Driving Companion primarily for the use by the Qualified Supervising Driver for guidance when recording the compulsory 15 hours of night driving."
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_MODULE
    },

    {
        id: 22,
        taskId: 32,
        note: [
            "See FAQ regarding Task requirements"
        ],
        // Decided where to display note on the screen
        type: NOTE_TYPE_REQUIREMENT
    },
];

// One to many relationship
var TASK_REF_ASSESSMENT_TABLE = [
    {
        id: 1,
        taskId: 1,
        name: "Cabin Drill",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 2,
        taskId: 1,
        name: "Group 1",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 3,
        taskId: 1,
        name: "Group 2",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 4,
        taskId: 1,
        name: "Group 3",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 5,
        taskId: 2,
        name: "(1) Starting the engine",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 6,
        taskId: 2,
        name: "(2) Shutting down the engine",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 7,
        taskId: 3,
        name: "Move off from the kerb",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 8,
        taskId: 4,
        name: "(1) Stop the vehicle (including slowing)",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 9,
        taskId: 4,
        name: "(2) Secure the vehicle to prevent rolling (a prolonged stop)",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 10,
        taskId: 5,
        name: "Stop and go (using the park brake)",
        checkboxes: [
            1,
            2
        ]
    },

    {
        id: 11,
        taskId: 6,
        name: "(1) Change gears up and down (100% accurate and a minimum of 5 demonstrations)",
        checkboxes: [
            1,
            2,
            3,
            4,
            5
        ]
    },

    {
        id: 12,
        taskId: 6,
        name: "(2) Accurately select appropriate gears for varying speeds (100% accuracy and a minimum of 5 demonstrations",
        checkboxes: [
            1,
            2,
            3,
            4,
            5
        ]
    }
];

var TASK_REF_CHECKLIST_ITEM_TABLE = [
    {
        id: 1,
        taskId: 32,
        steps: [
            "Do not overtake turning vehicle.",
            "Road work signs and speeds.",
            "Lane(s) closed signs.",
            "Stopping and or queueing over a railway crossing.",
            "Amber traffic lights flashing.",
            "Traffic lights not working.",
            "Giving way to emergency vehicles.",
            "Speed required past a stationary emergency vehicle.",
            "Use of vehicle lights at night (Inc. high beam etc.)"
        ]
    }
];


// Get Ref Data By Ids
// Utility methods
function getRefTaskByUnitId(unitId) {
    return TASK_REF_TABLE.filter(
        task => {
            return task.unitId === unitId;
        }
    )
};

function getLearningOutcomeByTaskId(taskId) {
    return TASK_REF_LEARNING_OUTCOME_TABLE.filter(
        learningOutcome => {
            return learningOutcome.taskId === taskId;
        }
    )
};

function getAssessmentStandardByTaskId(taskId) {
    return TASK_REF_ASSESSMENT_STANDARD_TABLE.filter(
        assessmentStandard => {
            return assessmentStandard.taskId === taskId;
        }
    )
};

function getRequirementsByTaskId(taskId) {
    return TASK_REF_REQUIREMENT_TABLE.filter(
        requirement => {
            return requirement.taskId === taskId;
        }
    )
};

function getChangeControlsByTaskId(taskId) {
    return TASK_REF_CHANGE_CONTROLS_TABLE.filter(
        changeControl => {
            return changeControl.taskId === taskId;
        }
    )
};

function getAssessmentsByTaskId(taskId) {
    return TASK_REF_ASSESSMENT_TABLE.filter(
        assessment => {
            return assessment.taskId === taskId;
        }
    )
};

function getNotesByTaskIdAndType(taskId, noteType) {
    return TASK_REF_NOTES_TABLE.filter(
        note => {
            return note.taskId == taskId && note.type == noteType;
        }
    )
};

function getChecklistItemsByTaskId(taskId) {
    return TASK_REF_CHECKLIST_ITEM_TABLE.filter(
        checklistItem => {
            return checklistItem.taskId === taskId;
        }
    )
};

// END REF DATA


// START USER INPUT DATA
// Data to be populated by user
var USER_TASK_DATA = [
    {
        id: "",
        userId: "",
        taskId: "",
        qsdId: "",
        isActive: true,
        status: "",

        // Possibly pre-populate
        learnerDriverName: "",
        licenceNo: "",
        learnerSignature: "",

        // Possibly pre-populate
        authorisedExaminerNo: "",
        authorisedExaminerSignature: "",

        MDINo: "",
        dateCompleted: ""

    }
];

// One to Many relationship
var USER_TASK_EXAMINER_NOTE = [
    {
        id: "",
        taskId: "",
        userId: "",
        qsdId: "",
        note: "",
        dateCreated: "",
        dateUpdated: ""
    }
];

var USER_TASK_ASSESSMENT_CHECKBOX_RECORD = [
    {
        id: "",
        taskId: "",
        assessmentId: "",
        assessmentCheckboxId: "",
        isComplete: null,
        dateCompleted: null
    }
];

var USER_TASK_CHECKLIST_ITEM = [
    {
        id: "",
        taskId: "",
        checklistItemId: "",
        isComplete: null,
        dateCompleted: null
    }
];
// END USER INPUT DATA