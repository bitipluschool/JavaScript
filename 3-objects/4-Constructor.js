/*  ---  JavaScript Basic - Constructor Property  ---  */
/**
 * Every object in JavaScript have a constructor property
 * and this property reference the function that was used to create that object.
 */

// Factory
function createWarrior(name) {
  return {
    name,
    attack() {
      console.log("Warrior Attack!");
    },
  };
}
// Constructor
function Warrior(name) {
  (this.name = name),
    (this.attack = function () {
      console.log("Warrior Attack");
    });
}

const hercules = new Warrior("Hercules");
const spartacus = createWarrior("Spartacus");

const name = new String(); // "", '', ``
const age = new Number(); // 1, 2, 3, ...
const isAlive = new Boolean(); // true, false
const warrior = new Object(); // {}
const list = new Array(); // []
const attack = new Function(); // function () {}

const displayName = new String("Hey");
typeof displayName; // "object"

const message = "This is type of string";
typeof message; // "string"
