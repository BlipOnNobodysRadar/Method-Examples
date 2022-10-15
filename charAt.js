/*
String.prototype.charAt() 

Type: String

Description: 
Returns the character at the given index, defaulting to index 0 if none is given. If given an index out of bounds, returns an empty string.

Time complexity: O(1)
*/

let str = "A string.";

// Example 1
// Defaults to index 0, returning 'A';
console.log(`Example 1: ${str.charAt()}`);

// Example 2
// Returns the character at index 3 of the string, 't';
console.log(`Example 2: ${str.charAt(3)}`);

// Example 3
// Given an index out of bounds, returns an empty string.
console.log(`Example 3: ${str.charAt(-50)}`);
