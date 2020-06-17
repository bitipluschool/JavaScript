/*  ---  JavaScript Basics - Join  ---  */
/**
 * Convert the elements of an array into a string:
 * The join() method returns the array as a string.
 * seperator - A string used to separate one element of an array from the next
 * Note🖤 this method will not change the original array.
 */

const classes = ["warriors", "magicians", "thief", "archer"];

const comma = classes.join(",");
const dash = classes.join("-");

/** Example: Creating URL slug */
const title = "We need a Hero!";

const split = title.split(" ");
const url = split.join("-");

console.log("comma: ", comma);
console.log("dash: ", dash);
console.log("url: ", url);
