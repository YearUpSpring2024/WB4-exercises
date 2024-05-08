"use strict";
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];
// Which candies costs less than $4.00?
function getCandiesCostUnderFour() {
    let candyCostUnderFour = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price < 4) {
            candyCostUnderFour.push(products[i].product)
        }
    }
    return candyCostUnderFour;
}

console.log("Candy that are price under 50 dollars? " + getCandiesCostUnderFour());
// Which candies has "M&M" its name?
function candiesWithMM() {
    let candiesWithMM = [];

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].product;
        let mmindex = productName.indexOf("M&M");

        if (mmindex !== -1) {
            candiesWithMM.push(productName);
        }
    }
    return candiesWithMM;
}
console.log("\ncandy with M&M in name? " + candiesWithMM());
// Do we carry "Swedish Fish"?
function doCarrySweedishFish() {
    for (let i = 0; i < products.length; i++) {
        if (products[i].product === "Swedish Fish") {
            return "We at Swedishy carry Swedish Fish"
        }
    }
    return "No unfortunately we do not have any in stock, come back later"
}

console.log("\nDo we carry swedish fish? " + doCarrySweedishFish());