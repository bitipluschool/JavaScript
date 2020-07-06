/*  ---  JavaScript Basic - Factory Fuction  ---  */
/**
 * The Problem: creating an object with the same properties and methods as another object.
 * ❌ Bad: Copy and paste the same code over and over for every new object
 * ✅ Good: Using the Factory Function or the Constructor Function
 */

/**
 * The Factory Function
 * just like factory producing products this function produce objects.
 */

function createWarrior(name) {
  return {
    name,
    attack() {
      console.log("Warrior Attack!");
    },
  };
}

const spartacus = createWarrior("Spartacus");
const hercules = createWarrior("Hercules");
spartacus.attack();
