/*
concat() 

Type: String

Description: 
.concat() takes in string arguments and concatinates them with the original string it was called on, returning the result as a new string.
Given a non-string argument, .concat() attempts to coerce it into type string before concatenating.

Time complexity: O(n) where n is the number of concatinations in most JS engines. Slower in old browsers.
The answer is complicated due to low-level optimizations in different environments (browsers). 
In certain older browsers looped concatination can become exponenentially more expensive at O(n^2) or higher, in which case it is more efficient to
create string entries in an array and then.join('') the array than it is to concatenate strings directly.
Newer JS engines are optimized better, making string concatenation the fastest solution for concatenating strings.
*/

let str1 = "A string.";
let str2 = " Second string.";
let str3 = " Third string.";

// Example 1
// Concatenates str1 with str2 and str3, returning a new string of all 3 combined.
console.log(`Example 1: ${str1.concat(str2, str3)}`);

// Example 2
// Given a non-string argument, in this case an array, concat() coerces the array into a string before concatenation.
console.log(`Example 2: ${str1.concat(["This", "is", "an", "array."])}`);

// Example 3
// Given no arguments with which to concatenate, .concat() returns the original string.
console.log(`Example 3: ${str1.concat()}`);
