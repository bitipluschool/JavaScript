/*  ---  JavaScript Basics - Adding Elements  ---  */
const list = [3, 4];

// 1. unshift() - Beginning
list.unshift(1, 2); // [1, 2, 3, 4]

// 2. push() - End
list.push(5, 6); // [1, 2, 3, 4, 5, 6]

// 3. slice() - Middle
list.splice(2, 0, 2.5); // [1, 2, 2.5, 3, 4, 5, 6]

/*  ---  JavaScript Basics - Adding Elements  ---  */
/**
 * We learn that in JavaScript Array are also an object
 * We have 3 methods that we can use to add elements to an array:
 * 1.
 */

const list = [3, 4];

// 1. unshift() - Start -  Inserts new elements at the start of an array.
list.unshift(1, 2); // [1, 2, 3, 4]

// 2. push() - End - Appends new elements to an array, and returns the new length of the array.
list.push(5, 6); // [1, 2, 3, 4, 5, 6]

// 3. slice() - Middle - Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
list.splice(2, 0, 2.5); // [1, 2, 2.5, 3, 4, 5, 6]
