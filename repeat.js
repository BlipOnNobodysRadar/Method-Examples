/*
repeat() 

Type: String

Description: 
returns a new string consisting of the string it was called upon repeated and concatened together X times
Takes in a positive integer as the count argument

Time complexity: 
*/

let str = "Repeat me.";

// Example 1
// Returns the string repeated 3 times.
console.log(`Example 1: ${str.repeat(3)}`);

// Example 2
// Truncates non-integers to integer, so repeats 2x.
console.log(`Example 1: ${str.repeat(2.6)}`);

// Example 3
// Given 0, returns an empty string.
console.log(`Example 1: ${str.repeat(0)}`);
