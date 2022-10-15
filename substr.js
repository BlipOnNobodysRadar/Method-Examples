/*
String.prototype.substr()

Type: String

Description: 
A deprecated method that returns a portion of a string, starting at a specified index and
continuing a specified amount of characters afterwards.

Time complexity: O(n)
*/

let str = "A string.";

// Example 1
// Starting from index 0, returns a substring of length 1 ('A')
console.log(`Example 1: ${str.substr(0, 1)}`);

// Example 2
// Given no length, constructs a substring until the end of the string.
console.log(`Example 1: ${str.substr(1)}`);

// Example 3
// Starting from index 2, returns a substring of length 6 ('string')
console.log(`Example 1: ${str.substr(2, 6)}`);
