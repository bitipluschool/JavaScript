/*  ---  JavaScript Basic - Garbage Collector  ---  */

/**
 * Low-level languages like C, have manual memory management
 * In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore
 */

/**
 * Memory life cycle
 * Regardless of the programming language, the memory life cycle is pretty much always the same:
 * 1. Allocate the memory you need
 * 2. Use the allocated memory (read, write)
 * 3. Release the allocated memory when it is not needed anymore
 * The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.
 */

// 1. Allocation in JavaScript

// JavaScript will automatically allocate memory when values are initially declared.
let name = "Orel"; // allocates memory for a string
let age = 23; // allocates memory for a number

// Allocation via function calls
let date = new Date(); // allocates a Date object

// 2. Use the allocated memory (read, write)
// Using values basically means reading and writing in allocated memory.
date.getDate(); // reading the value of an object property

// 3. Release when the memory is not needed anymore
/**
 * The majority of memory management issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed.
 * Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.
 * Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as garbage collection (GC).
 * The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
 */

// # Garbage collection

/**
 * The Three Types of Common JavaScript Leaks
 * 1. Accidental global variables
 */

// 👉 Accidental global variables
// In the case of browsers, the global object is a “window”. For instance:
function setMessage() {
  message = "Hello! I'm a global variable";
}
// but, is in fact
function setMessage() {
  window.message = "Hello! I'm a global variable";
}
// To prevent these mistakes from happening, add 'use strict';
// at the beginning of your JavaScript files.
