/*  ---  JavaScript Basic - Functions are objects  ---  */
/**
 * What people dont know about functions in JavaScript is that functions are also an object.
 * let's verify it. try to access function property like so - functionName.
 * you will get a list of properties and methods just like you see in objects
 */

function Warrior(name) {
  (this.name = name),
    (this.attack = function () {
      console.log("Warrior Attack");
    });
}

Warrior.name; // "Warrior" (= the name of the function)
Warrior.length; // 1 (= number of arguments)
Warrior.constructor; // Function() { [native code] } (= build-in constructor in JavaScript)

// Using the Function() build-in constructor directly. same as above
const Wizard = new Function(
  "name",
  `
(this.name = name),
(this.attack = function () {
  console.log("Warrior Attack");
});
`
);

const harry = new Wizard("Harry");
const spartacus = new Warrior("Spartacus");
