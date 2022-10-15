/*
slice() 

Type: String

Description: 
Extracts (slices) a section of a string and returns it as a new string. Doesn't modify the original string.
Taking in a starting index and optionally an ending index as parameters.

Slices up to the ending index, but does not include the ending index in the slice.

If given a negative index, begins from the back of the string.

Time complexity: O(1); the V8 engine has optimized string slicing to O(1)
*/

let str = "A string.";

// Example 1
// Returns a new string starting from the 2nd index ('s') in the original string.
console.log(`Example 1: ${str.slice(2)}`);

// Example 2
// Returns a new string from the characters between index 2 (inclusive) and index 5 (noninclusive)
console.log(`Example 1: ${str.slice(2, 5)}`);

// Example 3
// Returns a new string between index 2 and 4 indexes before the end of the string.
console.log(`Example 1: ${str.slice(2, -4)}`);
