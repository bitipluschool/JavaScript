/*  ---  JavaScript Basic - Constructor Fuction  ---  */
/**
 * The Problem: creating an object with the same properties and methods as another object.
 * ❌ Bad: Copy and paste the same code over and over for every new object
 * ✅ Good: Using the Factory Function or the Constructor Function
 */

/**
 * The Constructor Function
 * this function responsible for construct or creating an object.
 * but the naming convension is diffrent than the Factory function.
 * When creating a Constructor Function we need to use Pascal Notation.
 */

function Warrior(name) {
  (this.name = name),
    (this.attack = function () {
      console.log("Warrior Attack");
    });
}

const spartacus = new Warrior("Spartacus");
const hercules = new Warrior("Hercules");
spartacus.attack();
