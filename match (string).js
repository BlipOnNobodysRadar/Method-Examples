/*
String.prototype.match() 

Type: String

Description: 
Returns values that match a given regular expression in the current string as an array containing each match.
Returns null if no match is found.
If given no argument, returns an array with an empty string ""

Time complexity: O(n) to O(2^m) where m is the regular expression size.
*/

let str = "A string containing SOME uppercase letters and numbers: 12345";

// Example 1
// Returns an array of values that are uppercase and alphabetical within the string
console.log(`Example 1: ${str.match(/[A-Z]/g)}`);

// Example 2
// Returns an array of values that are digits within the string
console.log(`Example 1: ${str.match(/[0-9]/g)}`);

// Example 3
// Returns an array with an empty string, equivalent to using match(/(?:)/)
console.log(`Example 1: ${str.match()}`);
