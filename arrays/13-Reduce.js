/*  ---  JavaScript Basic - Reduce ---  */

const scores = [25, 65, 80, 40];

// old method
let total = 0;
for (let score of scores) {
  total += score;
}

// using reduce
const sum = scores.reduce((total, score) => {
  return total + score;
}, 0);

console.log("total =", total); // 210
console.log("sum =", sum); // 210

/**
 * The reduce() method
 * reduces the array to a single value.
 * executes a provided function for each value of the array (from left-to-right)
 * The return value of the function is stored in an accumulator
reduce method parameters:
 * 1. callback function
 * 2. initial value for the accumulator
Callback function parameters:
 * 1. accumulator - a battery that collects and stores electricity
 * 2. currentValue - current element who iterated
 * finally the method return the accumulated result
 * if no initial value was specify JS will assign to the accumulator the first element value in the array
 */
