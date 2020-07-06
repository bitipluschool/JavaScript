/*  ---  JavaScript Basic - Chaining  ---  */

const players = [
  { firstName: "tony", lastName: "stark", score: 100 },
  { firstName: "steve", lastName: "rogers", score: 75 },
  { firstName: "bruce", lastName: "banners", score: 25 },
];

const winners = players
  .filter((p) => p.score > 50)
  .map((p) => p.firstName + " " + p.lastName);

console.log("winners", winners);
/**
 * Sometimes we need to use multiple operations (methods) on array data
 * Defining variable for every operation is very tedius, messy and force us beeing creative when choosing a variables names.
 * Chaining comes to solve this problem.
 * with chaining we can join multiple operations by using dot one after the other
 */
