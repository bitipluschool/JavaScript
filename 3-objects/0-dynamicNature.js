// Objects in JavaScript are dynamics

/**
 * Which mean we can add, change and delete properties and methods of object.
 * one thing to note: objects can be change even if they created with _const_ keyword. because objects are not primitives types.
 * but we cannot reassign new object to that variable.
 */

const warrior = { name: "spartacus" };

// Dynamically added property and method after creating an object.
warrior.weapon = "sword";
warrior.attack = function () {
  console.log("Attack");
};

// delete weapon;

console.log("warrior", warrior);

// warrior = { key: "New Object" }; // Error: Assignment to constant variable.
