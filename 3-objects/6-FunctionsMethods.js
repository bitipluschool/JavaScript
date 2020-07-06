/*  ---  JavaScript Basic - Functions Methods  ---  */
/**
 * earlier we learn that function are objects.
 * now lets take a look of some methods that available in Functions
 */

function Warrior(name, weapon) {
  (this.name = name),
    (this.weapon = weapon),
    (this.attack = function () {
      console.log(`${name} Attack!`);
    });
}
const person = {
  hello(name) {
    console.log(`Hello ${this.name}`);
  },
};
const orel = {
  name: "Orel",
};

const spartacus = new Warrior("Spartacus", "sword");
