/*  ---  JavaScript Basic - Call Method - Advanced  ---  */
/**
 * The call() method calls a function with a given this value and arguments provided individually.
 * Using call to chain constructors for an object
 */

// common properties
function Hero(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

function Warrior(name, weapon) {
  Hero.call(this, name, weapon);
  this.job = "warrior";
}

function Wizard(name, weapon) {
  Hero.call(this, name, weapon);
  this.job = "wizard";
}

const spartacus = new Warrior("Spartacus", "sword");
const harry = new Wizard("Harry", "wand");

/**
 * The call method. same as new Warrior("Spartacus")
 * we pass an empty object and when we use _this_ it will reference that empty object.
 * when we use the _new_ operator JS will create an empty object and this will reference the context of _this_
 * that is why when you don't use the _new_ operator _this_ will reference the window object in (browsers)
 */

// Warrior.call({}, "Thor", "hummer");
