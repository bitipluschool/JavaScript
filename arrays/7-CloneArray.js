/*  ---  JavaScript Basics - Cloning an Array  ---  */

const weapons = ["sword", "axe", "bow"];

const inventory = [...weapons];
inventory[0] = "new weapon";

const bag = weapons.slice();
bag[0] = "slice weapon";

const from = Array.from(weapons);
from[0] = "from weapon";

console.log("weapons", weapons);
console.log("inventory", inventory);
console.log("bag", bag);
console.log("from", from);
/**
 * Shallow Copy - ertain (sub-)values are still connected to the original variable.
 * Deep Copy - all of the values of the new variable are copied and disconnected from the original variable.
 */

/**
 * Example to bad "cloning"
 * const referenceCopy = weapons; // ❌ Not Gonna Work
 * referenceCopy[0] = "Not clone";
 * console.log("referenceCopy", referenceCopy);
 */
