/*  ---  JavaScript Basic - Clonning an object  ---  */
/**
 * sometimes we want to clone an object or combining multiple objects into a single object
 * In JavaScript we have 3 technique to achive it
 * 1. iterate using For In loop
 * 2. Object.assign method
 * 3. Spread operator
 */

// 1. iterate using For In loop
let naruto = { job: "ninja", exp: 0 };
let sasuke = {};

for (key in naruto) {
  sasuke[key] = naruto[key];
  // sasuke.job = naruto.job (= "ninja")
  // sasuke.exp = naruto.exp (= 0)
}

// 2. Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
naruto = { job: "ninja", exp: 0 };

// Object.assign(target, source) -> copy properties from source to target and return object.
sasuke = Object.assign({}, naruto);

// It's not have to be an empty object
obito = Object.assign({ name: "obito" }, naruto);

// 3. Spread operator unpacks the collected elements into single elements
kakashi = { ...naruto };

// It's not have to be an empty object
sakura = { name: "sakura", ...naruto };

/**
 * Object.assign() VS spread operator
 * the Object.assign *copies* the properties and methods from the source or sources objects into the target object and return it.
 * the spread operator *unpack* or *spread* all the properties and method inside the object.
 */
