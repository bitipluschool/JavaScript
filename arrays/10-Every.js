/*  ---  JavaScript Basics - Every  ---  */
/**
 * The every() method
 * checks if all elements in an array pass a test
 * executes the function once for each element present in the array
 * Note: every() does not change the original array
 */

const players = [
  { name: "batman", ready: "no" },
  { name: "thor", ready: "yes" },
  { name: "spiderman", ready: "yes" },
];

const isReady = players.every((player) => {
  console.log(player);
  return player.ready === "yes";
});

console.log("Are all players ready?", isReady);
// const isStrong = scores.every();
