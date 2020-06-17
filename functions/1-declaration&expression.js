/*  ---  JavaScript Basics - Functions  ---  */
/*  ---  Declaration VS Expression  ---  */

// Function Declaration
function attack() {
  console.log("Attack");
}

// (Anonymous) Function Expression
let defence = function () {
  console.log("Defence");
};

let protect = defence;

protect();

// (Named) Function Expression
let walk = function walk() {
  console.log("Walk");
};
