// Destructuring - Syntax

const list = [item1, item2, item3];
const [item] = list; // Unpack item from list of items

const object = {
  key: value,
};
const { key } = object.key; // Unpack key from object's property

// Array Destructuring
const numbers = ["one", "two", "three"];

const [red, yellow, green] = numbers;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// -----------------------------------
// Object destructuring

const person = {
  firstName: "Orel",
  lastName: "Hassid",
  gender: "male",
  age: 20,
};

const { firstName, gender, male } = person; // With
// Without
person.firstName;
person.gender;
person.male;

// Assigning to new variable names
const { firstName: name } = person;
console.log(name); // Orel
