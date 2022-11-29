// STATUSES
const STATUS_APPROVED = "Approved";
const STATUS_AWAITING_APPROVAL = "Awaiting Approval...";
const STATUS_REJECTED = "Rejected";
const STATUS_LIST = [
    STATUS_APPROVED,
    STATUS_AWAITING_APPROVAL,
    STATUS_REJECTED
]

const ROAD_SEALED = 'Sealed';
const ROAD_UNSEALED = "Unsealed";
const ROAD_QUIET = "Quiet";
const ROAD_BUSY = "Busy";
const ROAD_MULTI_LANED = "Multilaned";
const ROAD_LIST = [
    ROAD_SEALED,
    ROAD_UNSEALED,
    ROAD_QUIET,
    ROAD_BUSY,
    ROAD_MULTI_LANED
]

const WEATHER_DRY = "Dry";
const WEATHER_WET = "Wet";
const WEATHER_LIST = [
    WEATHER_DRY,
    WEATHER_WET
]

const TRAFFIC_LIGHT = "Light";
const TRAFFIC_MID = "Medium";
const TRAFFIC_HIGH = "High";
const TRAFFIC_LIST = [
    TRAFFIC_LIGHT,
    TRAFFIC_MID,
    TRAFFIC_HIGH
]

// Simple data model for demo purposes
const TABLE_DATA = [
    {
        id: 1,
        status: STATUS_APPROVED,
        date: new Date(2022, 03, 10),
        start: new Date(2022, 03, 10, 10, 00),
        finish: new Date(2022, 03, 10, 13, 00),
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
        id: 2,
        status: STATUS_APPROVED,
        date: new Date(2022, 03, 11),
        start: new Date(2022, 03, 10, 20, 00),
        finish: new Date(2022, 03, 10, 23, 00),
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
        id: 3,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 12),
        start: new Date(2022, 03, 10, 12, 00),
        finish: new Date(2022, 03, 10, 22, 00),
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
        id: 4,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 13),
        start: new Date(2022, 03, 10, 14, 00),
        finish: new Date(2022, 03, 10, 16, 00),
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
        id: 5,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 14),
        start: new Date(2022, 03, 10, 12, 00),
        finish: new Date(2022, 03, 10, 13, 00),
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
        id: 6,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 15),
        start: new Date(2022, 03, 10, 08, 00),
        finish: new Date(2022, 03, 10, 15, 00),
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
        id: 7,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 16),
        start: new Date(2022, 03, 10, 09, 00),
        finish: new Date(2022, 03, 10, 13, 00),
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
        id: 8,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 17),
        start: new Date(2022, 03, 10, 21, 00),
        finish: new Date(2022, 03, 10, 24, 00),
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
        id: 9,
        status: STATUS_AWAITING_APPROVAL,
        date: new Date(2022, 03, 18),
        start: new Date(2022, 03, 10, 20, 30),
        finish: new Date(2022, 03, 10, 21, 30),
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



