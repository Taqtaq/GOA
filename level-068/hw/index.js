import Chance from "chance";

const chance = new Chance();

// generate random data
console.log("Random name:", chance.name());
console.log("Random email:", chance.email());
console.log("Random city:", chance.city());