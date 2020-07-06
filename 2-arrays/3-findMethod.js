/*  ---  JavaScript Basics - Find method  ---  */
const heroes = [
  { name: "spartacus", class: "warrior" },
  { name: "harry", class: "wizard" },
];

const wizardIndex = heroes.findIndex(function (hero, index, heroes) {
  return hero.class === "wizard";
});

console.log(wizardIndex); // 1

const wizard = heroes.find(function (hero, index, heroes) {
  return hero.class === "wizard";
});

console.log(wizard); // { name: "harry", class: "wizard" }

/**
 * ℹ Note:
 * we can't search references types with the includes method.
 * because the object we pass as argument has diffrent reference (memory location)
 */
heroes.includes({ name: "spartacus", job: "warrior" }); // false

/**
 * Returns the value of the first element in the array where condition is true, and undefined otherwise.
 */
