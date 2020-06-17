/*  ---  JavaScript Basic - Merge Arrays  ---  */

/**
 * The concat() method is used to join two or more arrays.
 */
let weapons = ["sword", "axe", "bow"];
let defense = ["armor", "helmet", "shield"];

// Concat method
let bag = weapons.concat(defense);

// Spread Syntax
let inventory = [...weapons, ...defense];
