/*  ---  JavaScript Basics - Find method  ---  */
let list = [1, 2, 3, 4, 5];

// Beginning
const first = list.shift();
console.log(first); // 1

// End
const last = list.pop();
console.log(last); // 5

// Middle
list = [1, 2, 3, 4, 5];
const section = list.splice(2, 2);
console.log(section); // [3, 4]

/**
 * We can remove one or more items in a list (know as array)
 */
let list = [1, 2, 3, 4, 5];

// Removes the first item from a list and returns it.
const first = list.shift();
console.log(first); // 1

// Removes the last element from an array and returns it.
const last = list.pop();
console.log(last); // 5

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
list = [1, 2, 3, 4, 5];
const section = list.splice(2, 2); // start with the second and remove two items
console.log(section); // [3, 4]

/**
 *  Note💙 when we slicing list of premitives, their values are *copied*.
 *  but in references type, object's reference are set.
 */

list = [{ name: "harry" }, 1, 2, 3];
const section2 = list.splice(0);
console.log(section2);
