/*  ---  JavaScript Basics - Strings  ---  */

let message = "You are Hero"; // string literal syntax

message.trim(); // "You are hero" -> Removes whitespace from both ends of a string
message.toLowerCase(); // "you are hero"
message.toUpperCase(); // "YOU ARE HERO"
message.substring(0, 3); // 'You' extracts from index 0 to 3
message.substr(8); // 'Hero' extracts from index 8
message.startsWith("Y"); // true
message.split(" "); // ['You', 'are', 'Hero] split(seperator)
message.slice(0, 4); // 'You'
message.repeat(2); // 'You are HeroYou are Hero'
message.indexOf("H"); // 8
message.charAt(8); // H
message.includes("H"); // true
message.length; // 12

function getResult() {
  return message.trim(); // "You are hero" -> Removes whitespace from both ends of a string
  return message.toLowerCase(); // "you are hero"
  return message.toUpperCase(); // "YOU ARE HERO"
  return message.substring(0, 3); // 'You' extracts from index 0 to 3
  return message.substr(8); // 'Hero' extracts from index 8
  return message.startsWith("Y"); // true
  return message.split(" "); // ['You', 'are', 'Hero] split(seperator)
  return message.slice(0, 4); // 'You'
  return message.repeat(2); // 'You are HeroYou are Hero'
  return message.indexOf("H"); // 8
  return message.charAt(8); // H
  return message.includes("H"); // true
  return message.length; // 12
}

console.log(getResult());

/**
 * substring() Method
 * string.substring(start, end)
 */
// All string methods return a new value. They do not change the original variable.
