/*
String.prototype.charCodeAt() 

Type: String

Description: 
The UTF-16 code of the character at the given index in integer form. If not given an index, defaults to 0. If given an index out of bounds, returns NaN.

Time complexity: O(1)
*/

let str = "A string.";

// Example 1
// Defaults to index 0, returning the unicode representation of 'A', which is 65.
console.log(`Example 1: ${str.charCodeAt()}`);

// Example 2
// Returns the character code representation of 't' (116), the character at index 3 of the string.
console.log(`Example 2: ${str.charCodeAt(3)}`);

// Example 3
// Given an index out of bounds, returns NaN.
console.log(`Example 3: ${str.charCodeAt(-50)}`);
