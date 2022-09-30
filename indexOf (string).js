/*
includes() 

Type: String

Description: 
Searches the string for a given substring, returning the index of the first occurance of the substring if found.
Returns -1 if not found, if not provided an argument returns 0.
Can be given a second Number argument to begin searching from a specific index.

Time complexity: O(n) where n is the number of characters within the searched string.
*/

let str = "A string.";
let substring = "string";

// Example 1
// Searches for 'string' within str, returning the index that 'string' begins at: 2. The search begins at index 0 by default, therefore searching the entire string.
console.log(`Example 1: ${str.indexOf(substring)}`);

// Example 2
// Searches for 'string' within str beginning at index 4 ('r'), returning -1 because the full substring ('string') is not found past index 4.
console.log(`Example 2: ${str.indexOf(substring, 4)}`);

// Example 3
// Searches for 'string' within str beginning at index 1 (' '), returning 2 because the full substring ('string') is found past index 1, beginning at index 2.
console.log(`Example 3: ${str.indexOf(substring, 1)}`);
