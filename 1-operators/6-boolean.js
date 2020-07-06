// Truthy values
/**
 * true
 * {}
 * []
 * 42
 * "0"
 * "false"
 * new Date()
 */

// Falsy values
/**
 * null
 * NaN
 * 0
 * Empty string
 * undefined
 */

// const condition = 0 && 0;

// Example 1: Select Theme

// let defaultTheme = "light";
// let selectedTheme = "dark";
// let currentTheme = selectedTheme || defaultTheme;
// console.log(currentTheme); // dark

const user = {};
const isOnline = true;

// Begginners
if (isOnline === true) {
  console.log("Logout");
} else {
  console.log("Login");
}

// Advanced
if (user) console.log("Logout");
else console.log("Login");

// Pro
user && console.log("Logout");
user || console.log("Login");

// 1. false && true
// return false

// 2. true && true
// return the second (right = צודק) true

// 3. true && true
// return the second (right = צודק) true

// 4. false || true
// return true

// 5. true || false
// return true

// 6. true || true
// return the first (left behind = מאחורה) true
