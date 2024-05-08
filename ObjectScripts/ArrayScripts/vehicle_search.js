"use strict";

let vehicles = [
    {
        color: "Silver",
        type: "Minivan",
        registrationState: "CA",
        licenseNo: "ABC-101",
        registrationExpires: new Date("3-10-2022"),
        capacity: 7
    },
    {
        color: "Red",
        type: "Pickup Truck", registrationState: "TX",
        licenseNo: "A1D-2NC",
        registrationExpires: new Date("8-31-2029"),
        capacity: 3
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "A22-X00",
        registrationExpires: new Date("9-31-2043"),
        capacity: 6
    },
    {
        color: "Red",
        type: "Car",
        registrationState: "CA",
        licenseNo: "ABC-222",
        registrationExpires: new Date("12-10-2022"),
        capacity: 5
    },
    {
        color: "Black",
        type: "SUV",
        registrationState: "CA",
        licenseNo: "EEE-222",
        registrationExpires: new Date("12-10-2021"),
        capacity: 7
    },
    {
        color: "Red",
        type: "SUV",
        registrationState: "TX",
        licenseNo: "ZZ2-101",
        registrationExpires: new Date("12-30-2022"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "TX",
        licenseNo: "CAC-7YT",
        registrationExpires: new Date("1-31-2023"),
        capacity: 5
    },
    {
        color: "White",
        type: "Pickup Truck",
        registrationState: "CA", licenseNo: "123-ABC",
        registrationExpires: new Date("3-31-2023"),
        capacity: 5
    }
];

// Which vehicles are RED?
function getRedVehicle() {
    let redVehicle = [];

    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].color === "Red") {
            redVehicle.push(vehicles[i].licenseNo)
        }
    }
    return redVehicle;
}
console.log("which vehicle is red? " + getRedVehicle());

// Which vehicles have registrations that are expired?
function expiredRegistration() {
    let expiredVehicles = []
    const currentDate = new Date("4-08-2024");

    for (let i = 0; i < vehicles.length; i++) {
        const isRegistrationExpired = new Date(vehicles[i].registrationExpires);

        if (isRegistrationExpired < currentDate) {
            expiredVehicles.push(vehicles[i].licenseNo);
        }
    }
    return expiredVehicles
}

console.log("\nvehicle license plate with expired registration? " + expiredRegistration());
// Which vehicles that hold at least 6 people?

function atLeastSixPeople() {
    let hasSixPeople = [];

    for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].capacity >= 6) {
            hasSixPeople.push(vehicles[i].licenseNo);
        }
    }
    return hasSixPeople;
}
console.log("These vehicle has at least 6 people " + atLeastSixPeople());
// Which vehicles have license plates that end with "222"?

function plateEndsWith() {
    let plateEnd = [];

    for (let i = 0; i < vehicles.length; i++) {
        if ((vehicles[i].licenseNo).slice(-3) === "222") {
            plateEnd.push(vehicles[i].licenseNo)
        }
    }
    return plateEnd
}

console.log("vehicles end with 222 in the license plate: " + plateEndsWith());