/*
toUpperCase()

Type: String

Description: 
Returns a new string where every alphabetical character in the original string is converted to uppercase.


Time complexity: O(n)
*/

let str = "a string...";

// Example 1
// Returns every alphabetical character uppercases, leaving symbols the same.
console.log(`Example 1: ${str.toUpperCase()}`);

// Example 2
// Given only non-alphabetical characters, the resulting stream is identical to the original.
console.log(`Example 1: ${"5123".toUpperCase()}`);

// Example 3
// Characters that are already uppercase remain so, while lowercase characters are converted.
console.log(`Example 1: ${"A tHiRd ExAmPlE".toUpperCase()}`);
