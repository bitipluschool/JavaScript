// Conditional Statements
let condition = true;

if (condition) console.log("The condition is true!");
else console.log("The condition is false.");

/**
 * Write a condition:
 * if username and password is incorrect display: "You're Logged In!"
 * if username is incorrent display: "username is incorrect."
 * if password is incorrent display: "password is incorrect."
 */

let username = "orelh";
let password = "1234";

if (username == "orelh" && password == "1234") console.log("You're Logged In!");
else {
  if (username !== "orelh") console.log("username is incorrect.");
  if (password !== "1234") console.log("password is incorrect.");
}
