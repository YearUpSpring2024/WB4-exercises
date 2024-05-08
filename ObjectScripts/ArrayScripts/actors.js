"use strict";
let academyMembers = [
    {
        memID: 101,
        name: "Bob Brown",
        films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
        memID: 142, name: "Sallie Smith",
        films: ["A Good Day", "A Better Day"]
    },
    {
        memID: 187,
        name: "Fred Flanders",
        films: ["Who is Fred?", "Where is Fred?",
            "What is Fred?", "Why Fred?"]
    },
    {
        memID: 203,
        name: "Bobbie Boots",
        films: ["Walking Boots", "Hiking Boots",
            "Cowboy Boots"]
    },
];

// Who is the Academy Member whose ID is 187?
function whoseIdAtAcademyIs() {
    let whoseId = [];

    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].memID === 187) {
            whoseId.push(academyMembers[i].name)
        }
    }
    return whoseId;
}

console.log("Who is the Academy Member whose ID is 187? \n" + whoseIdAtAcademyIs())
// Who has have been in at least 3 films?
function whoHasAtLeastThreeFilms() {
    let atLeastThreeFilms = [];

    for (let i = 0; i < academyMembers.length; i++) {
        if (academyMembers[i].films.length >= 3) {
            atLeastThreeFilms.push(academyMembers[i].name)
        }
    }
    return atLeastThreeFilms;
}
console.log("\nWho has have been in at least 3 films? " + whoHasAtLeastThreeFilms());
// Who has a name that starts with "Bob"?

function nameStartsWith() {
    let bobName = [];

    for (let i = 0; i < academyMembers.length; i++) {
        let name = academyMembers[i].name.toLowerCase()
        if (name.length >= 3 && name[0].toLocaleLowerCase() === "b" & name[1] === "o" && name[2] === "b") {
            bobName.push(name)
        }
    }
    return bobName
}

console.log("\nName starts with " + nameStartsWith());
// HARDER: Which Academy Members have been in a film
function whichAcademyMemberHaveBeenInAFilm() {
    let hasBeenInaFilm = [];

    for (let i = 0; i < academyMembers.length; i++) {
        let films = academyMembers[i].films;
        for (let j = 0; j < films.length; j++) {
            if (films[j][0].toLocaleUpperCase() === "A") {
                hasBeenInaFilm.push(academyMembers[i].name);
            }
        }
    }
    return hasBeenInaFilm;

}
console.log("\nwhich Academy member that has been in a film and name starts with A? " + whichAcademyMemberHaveBeenInAFilm());
// that starts with "A"