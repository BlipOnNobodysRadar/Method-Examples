/*
trim()

Type: String

Description: 
Returns a new string identical to the original string, but with whitespace removed from both ends.

Time complexity: O(n) where n is the amount of whitespace characters at either end.
Important to remember n here isn't the entire length of the string (unless it's all whitespace), but only the length of whitespace at either end.
*/

let str = "A string with some whitespace at the end  ";
let str2 = "   A string with some whitespace at the start";
let str3 = "   A string with some whitespace at both ends   ";

// Example 1
// Returns the string with whitespace at the end removed
console.log(`Example 1: ${str.trim()}`);

// Example 2
// Returns the string with whitespace at the start removed
console.log(`Example 1: ${str2.trim()}`);

// Example 3
// Returns the string with whitespace at both ends
console.log(`Example 1: ${str3.trim()}`);
