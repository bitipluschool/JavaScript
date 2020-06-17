/*  ---  JavaScript Basics - Sort  ---  */

let letters = ["C", "B", "A", "D"];
let numbers = [100, 25, 50, 300, 75];

console.log("numbers", numbers);
console.log("sort compare function(a, b)");

numbers.sort((a, b) => {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
});

console.log("numbers", numbers);
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
