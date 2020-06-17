/*  ---  JavaScript Basics - Date  ---  */
/**
 * JavaScript Date Object lets us work with dates:
 * Date objects are created with new Date().
 */

const date = new Date();
// Date Object Methods

function getResult() {
  // Returns the year
  return date.getFullYear();
  // Returns the day of the week (from 0-6)
  return date.getDay(); // 6

  // Returns the day of the month (from 1-31)
  return date.getDate(); // 9
}

console.log(getResult());
