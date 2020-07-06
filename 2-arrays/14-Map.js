/*  ---  JavaScript Basic - Map  ---  */

const players = [
  { firstName: "ragnar", lastName: "lothbrok", scores: 75 },
  { firstName: "harry", lastName: "potter", scores: 22 },
  { firstName: "orel", lastName: "hassid", scores: 100 },
];

const playersNames = players.map((player) => {
  return player.firstName + " " + player.lastName;
});

console.log(playersNames);
/**
 * The map() method
 * creates a new array with the results of calling a function for every array element.
 * Calls a defined callback function on each element of an array,
   and returns an array that contains the results.
 * Note: this method does not change the original array.
 */
