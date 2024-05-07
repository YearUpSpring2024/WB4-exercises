"use strict";

let partCode1 = "XYZ:1234-L";
let partCode2 = "ABC:234-L";
let partCode3 = "ACME:6-5";


let example1 = partCode1
parsePartCode(example1);

function parsePartCode(partCode) {
    let result = {
        supplier: getSupplier(partCode),
        productNumber: getProductNumber(partCode),
        size: getSize(partCode)
    }
    return result;
}
function getSupplier(code) {
    return (code.substring(0, code.indexOf(":")));
}
function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));

}

function getSize(code) {
    return code.substring(code.indexOf("-") + 1);
}

// console.log(getSupplier(thisPart));
// console.log(getProductNumber(thisPart));
// console.log(getSize(thisPart))

console.log(parsePartCode(example1).supplier + " supplier");
console.log(parsePartCode(example1).productNumber + " product Number");
console.log(parsePartCode(example1).size + " size");

console.log(parsePartCode(example1));