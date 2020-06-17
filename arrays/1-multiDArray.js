// JavaScript Multidimensional Array
/**
 * you can create a multidimensional array by defining an array of elements,
 * where each element is also another array.
 */

// # Declare an empty multidimensional array
let table = [
  [1, "naruto", "123"],
  [2, "luffy", "456"],
  [3, "gon", "789"],
  [4, "goku", "000"],
];
// console.table(table);

/**
 * Access an element of the multidimensional array:
 * 1. Use square brackets to access an element of the outer array
 * 2. Use another square bracket to access the element of the inner array.
 */
// console.log(table[1][1]); // "naruto"

/**
 * Adding elements to the JavaScript multidimensional array
 * You can use the Array methods such as push() and splice() to manipulate elements of a multidimensional array.
 * For example, to add a new element at the end of the multidimensional array, you use the push() method as follows:
 */
table.push([table.length, "deco", "111"]);
// console.table(table);

/**
 * We can adding elements to the middle of the array by using splice() method.
 * The ffollowing example adding an item to the second position
 */
table.splice(1, 0, [table.length, "orel", "222"]);
// console.table(table);

/**
 * How to Iterate over each item in the table array?
 */

// table.forEach((item) => console.log(item));

for (item of table) {
  const hash = item[1] + item[2];
  item[3] = hash;
}
// console.table(table);

/**
 * Removing elements from the JavaScript multidimensional array
 */
table.pop(); // Remove tha last element / item

for (item of table) {
  item.pop(1);
}
// console.table(table);

/**
 * To iterate a multidimensional array,
 * you use a _nested_ for loop as in the following example.
 */

for (item of table) {
  for (index of item) {
    // console.log(index);
  }
}
