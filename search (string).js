/*
search() 

Type: String

Description: 
Takes a regex as an argument. Searches the string for substrings that match a regular expression, 
and returns the index of the first matching occurance if found, or -1 if not.

Time complexity: O(n)
*/

let str = "A string containing SOME uppercase letters and numbers: 12345";

// Example 1
// Searches for lowercase alphabetical letters, returns index of two ('s').
console.log(`Example 1: ${str.search(/[a-z]/g)}`);

// Example 2
// Returns the first occurance of a digit between 0 and 5(index 56)
console.log(`Example 1: ${str.search(/[0-5]/g)}`);

// Example 3
// Searches for numbers between 6 and 9. Finding none, returns -1.
console.log(`Example 1: ${str.search(/[6-9]/g)}`);
