/*  ---  JavaScript Basics - Filter  ---  */

/* Filtering Array of primitives */
const scores = [25, 65, 80, 40];

const passed = scores.filter((score) => {
  return score > 60;
});

/* Filtering Array of objects */
const players = [
  { name: "batman", score: 25 },
  { name: "thor", score: 80 },
  { name: "spiderman", score: 40 },
];

const winners = players.filter((player) => {
  return player.score > 60;
});

console.log("passed", passed);
console.log("winners", winners);

/**
 * The filter() method
 * Returns the elements of an array that meet the condition specified in a callback function.
 * filter() does not change the original array.
 * To test each element of the array. Return true to keep the element, false otherwise.
 */
