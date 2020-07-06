/*  ---  JavaScript Basics - Advanced  ---  */
/*  ---  Regular Expression  ---  */

/** Syntax
 * /pattern/modifiers; */
let regExp = /javascript/i;

/**
 * Regular Expression Modifiers */
/day/i; // ignoreCase
/day/gi; // global & ignoreCase
/day/m; // multiline

let message = "A Day Without Laughter Is A Day Wasted.";

/**
 * RegExp Object */
//console.log("exec", /day/gi.exec(message));
//console.log("test", /day/i.test(message));

/**
 * String Methods */
message.search(/day/i);
message.replace(/day/gi, "week");
message.match(/day/i);

let digit = "I have served in army 2 years and 8 month";
console.log("message\n", message);
// console.log("digit string\n", digit);

/**
 * Metacharacters */
/*
console.log("digits:", digit.match(/\d/g));
console.log("non-digits:", digit.match(/\D/g));
console.log("whitespace:", message.match(/\s/g));
console.log("newline:", message.match(/\n/g));
console.log("Dot:", message.match(/w./gi));
*/

/**
 * Quantifiers */
// console.log("n+:", message.match(/w+/gi));
// n*
// n?

/**
 * Brackets */
/*
console.log("How much uppercase words?", message.match(/[A-Z]/g));
console.log("How much [g-m] characters?", message.match(/[g-m]/g));
console.log("How much are numbers?", message.match(/[0-9]/g));
console.log("How much are not numbers?", message.match(/[^0-9]/g));
console.log("How much 'day' and 'is'?", message.match(/day|is/gi));
*/
