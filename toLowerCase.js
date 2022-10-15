/*
String.prototype.toLowerCase()

Type: String

Description: 
Returns a new string where every alphabetical character in the original string is converted to lowercase.


Time complexity: O(n)
*/

let str = "A VERY AGGRESSIVE STRING!";

// Example 1
// Returns every alphabetical character lowercased, leaving symbols the same. The string is not longer as aggressive.
console.log(`Example 1: ${str.toLowerCase()}`);

// Example 2
// Given only non-alphabetical characters, the resulting string is identical to the original.
console.log(`Example 1: ${"5123".toLowerCase()}`);

// Example 3
// Characters that are already lowercase remain so, while uppercase characters are converted.
console.log(`Example 1: ${"A tHiRd ExAmPlE".toLowerCase()}`);
