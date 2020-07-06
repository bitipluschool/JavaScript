/*  ---  JavaScript Basics - Cloning an Array  ---  */

/**
 * Shallow Copy - ertain (sub-)values are still connected to the original variable.
 * Deep Copy - all of the values of the new variable are copied and disconnected from the original variable.
 */

let weapons = ["sword", "axe", "bow", { id: 1 }];
let defense = ["armor", "helmet", "shield"];

const shallow = [...weapons];
shallow[0] = "new weapon";
shallow[3].id = 4;

const deep = JSON.parse(JSON.stringify(weapons));
deep[3].id = 50;

console.log("weapons", weapons);
console.log("shallow", shallow);
console.log("deep", deep);
