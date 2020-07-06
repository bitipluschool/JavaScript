/*  ---  JavaScript Basic - Reset Array  ---  */

let list = [1, 2, 3, 4, 5];
let another = list;

// Option 1 - ✅ short
list = [];

// Option 2 - ✅ full reset
list.length = 0;

// Option 3 - ❌ long
list.splice(0, list.length);

// Option 4 - ❌ performance
while (list.length > 0) list.pop();

/**
 * We have learned how to remove elements from array
 * now let's learn how to remove all the elements from the array
 */

/**
 * used only if there are no references to the array
 * when no references exist the Garbage Collector will release the unused memory*/
