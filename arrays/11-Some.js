/*  ---  JavaScript Basics - Some  ---  */

/**
 * The some() method checks if any of the elements in an array pass a test (provided as a function).
 */

// In order to becoming a knight you need some

const exp = [0, 25, 50, 75, 100];

const isKnight = exp.some((score) => {
  return score > 50;
});

console.log("Do you have more than 50 exp?", isKnight);
