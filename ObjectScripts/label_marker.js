"use strict";


// object

let customer = {
    name: "Etson Dori",
    address: "798 nw CocoMelon Road",
    city: "Atlanta",
    state: "Georgia",
    zip: "33205"
};
printContact(customer);

function printContact(contact) {
    console.log(contact.name);
    console.log(contact.address);
    console.log(`${contact.city}, ${contact.state}, ${contact.zip}`)
}