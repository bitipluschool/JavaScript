/*  ---  JavaScript Basic - Values vs References Data Types  ---  */
/**
 * In JavaScript we have two categories of data types:
 * 1. Values / Primitives / Simple
 * 2. References / Complex
 */
/**
Values Type
 * String
 * Number
 * Boolean
 * Symbol
 * null
 * undefined
 */

/**
References Type
 * Object
 * Function
 * Array
 */

// Values Types - Example
let x = 10;
let y = x;

x = 20;
// console.log(x); // 20
// console.log(y); // 10
// The value of x is *coppied* to y so this is why when we change the value of x its not effected the value of y.

// References Types - Example
const warrior = { name: "thor" };
const magician = warrior;

warrior.name = "Captain America";
// console.log(warrior); // { name: "Captain America" }
// console.log(magician); // { name: "Captain America" }

/**
 * when we creating an object we store him in the memory and then store the location in the memory inside of the variable.
 * so the value of the warrior variable is something like: 55555 (memory location)
 * 55555 is *reference* to the object in the memory
 * when we assign _magican_ to warrior we basically assign the memory location
 * which means both warrior and magican pointed to the same object
 * so when we modify the propery of that object is effected all the variables that *reference* to him
 */

// Another Example:

// primitive type example
let score = 20;

function addScore(score) {
  score++;
}

addScore(score);
console.log("Score (primitive) = ", score); // 20

// reference type example
let player = { score: 20 };

function addPlayerScore(player) {
  player.score++;
}
addPlayerScore(player);
console.log("Score (reference) = ", player.score); // 21
