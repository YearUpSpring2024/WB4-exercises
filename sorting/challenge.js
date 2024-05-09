"use strict";

let myScores = [99, 100, 89, 100, 45, 44, 44, 67, 78, 10];
let yourScores = [99, 110, 99, 99, 99, 99, 99, 99, 79];

function getAverage(scores) {
    let sum = 0

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i]
    }

    let average = sum / scores.length;
    return average;
}
console.log(getAverage(myScores));
console.log(getAverage(yourScores));

console.log("---------------------------------");

function getMedian(scores) {
    scores.sort(function (a, b) {
        return a - b; //sorting the array in ascending order
    })
    const medianIndex = scores.length / 2; //calculating the index of the median element

    if (scores.length % 2 === 0) { //checking if the number of scores is divisible by 2---- even
        return (scores[medianIndex - 1] + scores[medianIndex]) / 2 //if it even return the the avegerage of the two middle
    } else {
        return scores[Math.floor(medianIndex)] // if odd return the middle element
    }

}
console.log("----------------My Median-------------------");

console.log("My Median is: " + getMedian(yourScores));



function getHighestScore(scores) {
    return Math.max(...scores); //return max value in the scoresArray
}
console.log("----------- My highest scores----------")
console.log("My Highest score is: " + getHighestScore(myScores));

console.log("----------- My Lowest scores----------")
function getLowestScore(scores) {
    return Math.min(...scores) //return minimum value in the scores array
}

console.log("My lowest score is: " + getLowestScore(myScores));


console.log("---------------Your Scores------------");

console.log("your highest Score is " + getHighestScore(yourScores));
console.log("-------------Your lower Scores------------");
console.log("Your Lowest Score is " + getLowestScore(yourScores));
console.log("----------------------Your Median--------------");
console.log("Your Median is: " + getMedian(yourScores));