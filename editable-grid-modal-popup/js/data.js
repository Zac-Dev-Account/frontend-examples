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
        date: new Date(2022, 03, 10),
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
        date: new Date(2022, 03, 11),
        start: "9:00 AM",
        finish: "10:00 PM",
        duration: "1 Hour",
        from: "Flagstaff Hill",
        to: "Hallett Cove",
        road: ROAD_BUSY,
        weather: WEATHER_DRY,
        traffic: TRAFFIC_HIGH,
        learnerSignature: "X",
        qsdFullName: "Mary Baker",
        qsdLicense: "NXT225",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 12),
        start: "9:00 AM",
        finish: "13:00 PM",
        duration: "4 Hours",
        from: "Flagstaff Hill",
        to: "Brighton",
        road: ROAD_SEALED,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 13),
        start: "9:00 AM",
        finish: "14:00 PM",
        duration: "5 Hours",
        from: "Aberfoyle Park",
        to: "Seaford",
        road: ROAD_QUIET,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 14),
        start: "11:00 AM",
        finish: "1:00 PM",
        duration: "2 Hours",
        from: "Seaford",
        to: "Elizabeth",
        road: ROAD_UNSEALED,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Mary Baker",
        qsdLicense: "NXT225",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 15),
        start: "10:00 AM",
        finish: "11:00 PM",
        duration: "1 Hour",
        from: "Flagstaff Hill",
        to: "Blackwood",
        road: ROAD_SEALED,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 16),
        start: "6:00 AM",
        finish: "7:00 AM",
        duration: "1 Hour",
        from: "Belair",
        to: "Aberfoyle Park",
        road: ROAD_QUIET,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Tom Baker",
        qsdLicense: "AET136",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 17),
        start: "9:00 AM",
        finish: "12:00 PM",
        duration: "3 Hours",
        from: "Blackwood",
        to: "Golden Grove",
        road: ROAD_QUIET,
        weather: WEATHER_DRY,
        traffic: TRAFFIC_MID,
        learnerSignature: "X",
        qsdFullName: "Mary Baker",
        qsdLicense: "NXT225",
        qsdSignature: "X"
    },

    {
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 18),
        start: "8:00 AM",
        finish: "12:00 PM",
        duration: "4 Hours",
        from: "Smithfield Plains",
        to: "Norwood",
        road: ROAD_MULTI_LANED,
        weather: WEATHER_WET,
        traffic: TRAFFIC_LIGHT,
        learnerSignature: "X",
        qsdFullName: "Mary Baker",
        qsdLicense: "NXT225",
        qsdSignature: "X"
    }
];



