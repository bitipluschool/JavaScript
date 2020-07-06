/*  ---  JavaScript Basics - Loops  ---  */
/*  ---  For...in  ---  */

const person = {
  name: "Orel",
  age: 20,
};

for (let key in person) {
  console.log(key, person[key]);
}

// what if we want to get the value of the property?

// Dot Notation
// person.name;

// Brackets Notation
// person["name"];

// when we dont know the properties we are going to access
// When the property is calculate during code execution

// we cant use person.key
// instead use person[key]

// const colors = ["red", "yellow", "green"];
// for (let index in colors) {
//   console.log(index);
// }

// for-of is ideal way to iterate over array
