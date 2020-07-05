/*  ---  JavaScript Basic - Objects  ---  */
// Syntax: let obj = {...}

let person = {
  name: "Orel Hassid", // Key: Value (Property)
  age: 23,
};

// Read and Write

// 1. Dot Notation
person.age = 16; // modify value

// 2. Bracket Notation - Dynamic Access
let option = "age";
person[option]; // person['age']

console.log(person);
