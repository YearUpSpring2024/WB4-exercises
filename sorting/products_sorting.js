"use strict";

let products = [
    { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, item: "Black Pens (12 pk)", price: 5.70 },
    { prodId: 22, item: "Stapler", price: 12.79 },
    { prodId: 44, item: "Ztapler", price: 15.79 },
    { prodId: 54, item: "Capler", price: 19.79 }
];


function sortProductsByName(a, b) {
    const aUpper = a.item.toUpperCase();
    const bUpper = b.item.toUpperCase();

    if (aUpper < bUpper) {
        return -1;
    } else if (aUpper > bUpper) {
        return 1;
    } else {
        return 0;
    }
}

products.sort(sortProductsByName);

for (let i = 0; i < products.length; i++) {
    console.log("Sort By name in Alphabetical order: " + products[i].item);
}


console.log("------------------------------------------------------");


function sortByPrice(a, b) {
    return b.price - a.price;
}

products.sort(sortByPrice);

for (let i = 0; i < products.length; i++) {
    console.log("Sort by descending number: " + products[i].price);
}