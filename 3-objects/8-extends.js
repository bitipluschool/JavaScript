function Hero(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

class Warrior extends Hero {
  constructor(name, weapon) {
    super(name, weapon);
    this.job = "warrior";
  }
}

class Wizard extends Hero {
  constructor(name, weapon) {
    super(name, weapon);
    this.job = "wizard";
  }
}

const spartacus = new Warrior("Spartacus", "sword");
const harry = new Wizard("Harry", "wand");
