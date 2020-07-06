/*  ---  JavaScript Basic - Arrays  ---  */
/*  ---  Find  ---  */

const players = [
  { firstName: "ragnar", lastName: "lothbrok", scores: 75 },
  { firstName: "harry", lastName: "potter", scores: 22 },
  { firstName: "orel", lastName: "hassid", scores: 100 },
];

const ragnar = players.find((player) => {
  return player.firstName === "ragnar";
});

console.log(ragnar);

/**
 * The find() method executes the function once for each element present in the array:
 * if the function return true the find() method will return the current element
 * Otherwise it returns undefined
 * Note: find() does not change the original array.
 */
