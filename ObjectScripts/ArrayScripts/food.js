"use strict";

let lunch = [
    { item: "Steak fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "sweet Tea", price: 2.79 }
]


function calculateBill(items) {
    let subtotal = 0;

    for (let i = 0; i < items.length; i++) {
        subtotal = items[i].price;
    }
    let tax = subtotal * 0.8;
    let tip = subtotal * 0.18;

    let totalDue = tax + tip + subtotal;

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        tip: tip.toFixed(2),
        totalDue: totalDue.toFixed(2)

    };
}

let bigBills = calculateBill(lunch);
console.log("subTotal: $" + bigBills.subtotal);
console.log("tax 8% : $" + bigBills.tax);
console.log("tip $" + bigBills.tip);
console.log("total Due $" + bigBills.totalDue);


// write a code loop through the array and add up the price of everything i ate and print it out
// also display the tax total on that total assume  8% , the tip on that total assume 18 percent and the total due