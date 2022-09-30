/*
includes() 

Type: String

Description: 
Searches the string for a given substring, returning true if one is found and false if not. Does not accept regex arguments. 
Can include a second argument to specify the index within the string to start searching for the substring.

Time complexity: O(n) where n is the number of characters within the searched string.
*/

let str = "A string.";
let substring = "string";

// Example 1
// Searches for 'string' within str, returning true
console.log(`Example 1: ${str.includes(substring)}`);

// Example 2
// Searches for 'string' within str beginning at index 4 ('r'), returning false because the full substring ('string') is not found past index 4.
console.log(`Example 2: ${str.includes(substring, 4)}`);

// Example 3
//Searches for 'string' within str beginning at index 1 (' '), returning true because the full substring ('string') is found past index 1.
console.log(`Example 3: ${str.includes(substring, 1)}`);
