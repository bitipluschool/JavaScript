/*  ---  JavaScript Basics - Sort  ---  */

let letters = ["C", "B", "A", "D"];
let numbers = [10, 5, 20];
let compare = "";
let list = [];
console.log("numbers", numbers);
console.log("sort compare function(a, b)");

numbers.sort((a, b) => {
  console.log(`${a} - ${b} = ${a - b}`);
  compare = a - b > 0 ? "Greater" : "Less";
  color = a - b > 0 ? "#55B4D4" : "#4FBE99";
  console.log(
    `%cIs ${a} greater than or less than ${b}? ${compare} than, so add to the new list`,
    `color:${color}`
  );
  return a - b;
});

console.log("numbers", numbers);
console.log(` 
* If the result is negative - a is sorted before b.
* If the result is positive - b is sorted before a.
* If the result is 0 - no changes are done with the sort order of the two values.`);
/**
 * The sort() method sorts the items of an array.
 * By default, the sort() method sorts the values as strings in alphabetical and ascending order.
 * if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
 * You can fix this by providing a "compare function" as parameter.
 *
 * Return Value: The Array object, with the items sorted
 * Note🖤 This method changes the original array.
 */

/**
 * If the result is negative a is sorted before b.
 * If the result is positive b is sorted before a.
 * If the result is 0 no changes are done with the sort order of the two values.
 */

/**
 // 100, 25, 50, 300, 75
 than, so put these two numbers in our list: [${a},${b}]
  you'd start by comparing the first two numbers:
 * Is 100 greater than or less than 25? Less than, so put these two numbers in our list: 1,5
 * Is 3.14 greater than or less than 1? Greater than, so it goes after 1 in the new list
 * Is 3.14 greater than or less than 5 in our new list? Less than, so it goes before 5. Our new list is now [1,3.14,5]
 */

/**
 * Compare Function:
   Function used to determine the order of the elements.
   return a :
   * negative value - if first argument is less than second argument,
   * zero - if they're equal
   * positive value - otherwise.
   If omitted, the elements are sorted in ascending,
   ASCII character order.
*/
