/*  ---  JavaScript Basic - Math Object  ---  */
/**
 * Math is a built-in object that allows you to perform mathematical tasks on numbers.
 * Unlike many other global objects, Math is not a constructor.
 * properties and methods are static
 * you don't have to create an instance to use the Math object.
 * in other words you don't have to write: const math = new Math()
 */

/*  ---  Math Object Methods  ---  */
const math = new Math();
// Returns the absolute value of -5
Math.abs(-5); // 5

// Returns number, rounded downwards to the nearest integer
Math.floor(2.2); // 2

// Returns number, rounded upwards to the nearest integer
Math.ceil(2.2); // 3

// Rounds x to the nearest integer
Math.round(2.4); // 2

// Returns the square root of 4
Math.sqrt(4); // 4 * 4 -> 16

// Returns the number with the highest value
Math.max(5, 2, -4, 1); // 5

// Returns the number with the lowest value
Math.min(5, 2, -4, 1); // -4

// Returns a random number between 0 and 1
Math.random(); // 0.74

// JavaScript Random Integers
// Math.random() used with Math.floor() can be used to return random integers.
Math.floor(Math.random() * 11); // returns a random integer from 0 to 10

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  // Math.floor(0.5 * (20 - 10)) + 10
  // Math.floor(0.5 * 10)) + 10
  // Math.floor(5) + 10
  //   return 15
}
