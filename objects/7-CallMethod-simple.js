/*  ---  JavaScript Basic - Call Method - simple  ---  */
/**
 * Calls a method of an object,
 * substituting another object for the current object.
 * params
 * 1. thisArg - The object to be used as the current object.
 * 2. argArray - A list of arguments to be passed to the method.
 */

function Warrior(name) {
  this.name = name;
  this.job = "warrior";
}

const thor = {
  age: 30,
  weapon: "Hummer",
};

Warrior.call(thor, "Thor");

console.log(thor);

/**
 * How it works?
 * 1. Calling or Invoke the Warrior function and passing "Thor" as an argument for the name parameter.
 * like so: Warrior("Thor")
 * 2. The Warrior function reference the _thor_ object as _this_ inside the function, so whenever we use this.name we assign property to that object
 * like so: this.name = name (is eq to) thor.name = "Thor"
 *
 * Now thor object has all the properties a Warrior is needed.
 */

// So when we use the _new_ operator we basically pass an empty object to the Warrior function and _this_ will reference to that empty object.
// this approach is equal to...
new Warrior("Spartacus");

// This one
Warrior.call({}, "Spartacus");

// only that the _new_ operator return the object.
