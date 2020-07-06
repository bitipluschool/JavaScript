// Object constructor
// It will be called each time an object is created.
// We can use them with the new keyword.
// Object constructor is useful when we want to create multiple objects with the same properties and methods.

function Player(job, equipment, nickname, state) {
  console.log(this);
  this.job = job;
  this.nickname = nickname;
  this.equipment = equipment;
  this.state = state;
}
const warrior = new Player("warrior", "sword", "OrelWarrior", "Attack");
const wizard = new Player("Magician", "wand", "OrelMagic", "Attack");

// warrior and wizard create an instance of Player and assigned it to a variable.
console.log(warrior);
