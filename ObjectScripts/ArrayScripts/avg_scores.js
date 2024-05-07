"use strict";

let myScrores = [99, 100, 89, 100, 45, 44, 44, 67, 78];
let yourScores = [99, 110, 99, 99, 99, 99, 99, 99, 79];

function getAverage(scores) {
    let sum = 0

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i]
    }

    let average = sum / scores.length;
    return average;
}
console.log(getAverage(myScrores));
console.log(getAverage(yourScores));