/*  ---  JavaScript Basics - Functions  ---  */
/*  ---  Closure  ---  */

let life = 100;

function damage() {
  life -= 10;
}

damage(); // 90
damage(); // 80
damage(); // 70

life = 200; // ❌ Not good
console.log(life); // 200

function damage2() {
  let life = 100;
  function reduce() {
    life -= 10;
  }
  reduce();
  return life;
}

console.log("Closure: ", damage2());

let damage3 = (function () {
  let life = 100;
  return function () {
    life -= 10;
    return life;
  };
})();

console.log("Damage 3: ", damage3());
console.log("Damage 3: ", damage3());
/**
 * This is called a JavaScript closure.
 * It makes it possible for a function to have "private" variables.
 */
