/*  ---  JavaScript Basics - Functions  ---  */
/*  ---  Getter and Setter  ---  */

// Task - Create a property that display the full name of a player object

// Solution 1 - using a method
/*
const player = {
  firstName: "orel",
  lastName: "hassid",
  fullName: () => {
    return `${player.firstName} ${player.lastName}`;
  },
};

console.log(player.fullName());
*/

/**
 * There are two problems with this approach
 * 1. We cannot change the player's fullName from the outside, like player.fullName = "New Name"
 * 2. We access the property like a method
 * Solution
 * 1. Getter -> Access Properties
 * 2. Setter -> Change Properties
 */

// Solution 2 - using getter and setter

const player = {
  firstName: "Orel",
  lastName: "Hassid",
  get fullName() {
    return `${player.firstName} ${player.lastName}`;
  },
  set fullName(value) {
    const names = value.split(" "); // convert string into an array
    this.firstName = names[0];
    this.lastName = names[1];
  },
};

player.fullName = "Harry Potter";

console.log(player.fullName);
