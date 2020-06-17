/*  ---  JavaScript Basics - Arrays  ---  */
/**
 * Array is like a list, allow us store one or more items inside a variable
 * items - could be any data types
 * index number - the location of an item inside the list
 * Syntax *
 * Create: let list = [item1, item2, item3];
 * Access: list[index]
 */
let inventory = ["sword", "shield", "gloves"];

inventory[0]; // Access first item
inventory[2] = "helmet"; // Assign or replace the fourth element (gloves) with new value (helmet)
inventory.length; // Get the items count

console.log(inventory.length);
console.log(inventory);
