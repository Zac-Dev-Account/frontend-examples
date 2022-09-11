// STATUSES
const STATUS_APPROVED = "Approved";
const STATUS_AWAITING_APPROVAL = "Awaiting Approval...";
const STATUS_REJECTED = "Rejected";
const STATUS_LIST = [
    STATUS_APPROVED,
    STATUS_AWAITING_APPROVAL,
    STATUS_REJECTED
]

const ROAD_SEALED = 'S';
const ROAD_UNSEALED = "U";
const ROAD_QUIET = "Q";
const ROAD_BUSY = "B";
const ROAD_MULTI_LANED = "ML";
const ROAD_LIST = [
    ROAD_SEALED,
    ROAD_UNSEALED,
    ROAD_QUIET,
    ROAD_BUSY,
    ROAD_MULTI_LANED
]

const WEATHER_DRY = "D";
const WEATHER_WET = "W";
const WEATHER_LIST = [
    WEATHER_DRY,
    WEATHER_WET
]

const TRAFFIC_LIGHT = "L";
const TRAFFIC_MID = "M";
const TRAFFIC_HIGH = "H";
const TRAFFIC_LIST = [
    TRAFFIC_LIGHT,
    TRAFFIC_MID,
    TRAFFIC_HIGH
]

// Simple data model for demo purposes
const TABLE_DATA = [
    {
        status: STATUS_APPROVED,
        date: new Date(),
        start: "9:00 AM",
        finish: "12:00 PM",
        duration: "3 Hours",
        from: "Flagstaff Hill",
        to: "Aberfoyle Park",
        road: ROAD_BUSY,
        weather: WEATHER_DRY,
        traffic: TRAFFIC_HIGH,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"

    },
    {
        status: STATUS_APPROVED,
        date: new Date() + 1,
        start: "9:00 AM",
        finish: "12:00 PM",
        duration: "3 Hours",
        from: "Flagstaff Hill",
        to: "Aberfoyle Park",
        road: ROAD_BUSY,
        weather: WEATHER_DRY,
        traffic: TRAFFIC_HIGH,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date() + 5,
        start: "9:00 AM",
        finish: "12:00 PM",
        duration: "3 Hours",
        from: "Flagstaff Hill",
        to: "Aberfoyle Park",
        road: ROAD_QUIET,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    }
];



