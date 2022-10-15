/*
String.prototype.split() 

Type: String

Description: 
Takes in a delimiter as an argument, and splits the string between occurances of that delimiter,
storing the resulting substrings inside of an array. Returns the array. 

If given no arguments, returns the original string wrapped in an array.

Can take in a second optional argument (limit) that limits the amount of substrings created to
the provided positive integer amount. Skips any leftover text at that point.

The separator can be a string, a regexp, or any object with a Symbol.split() method. If given an empty string, returns an array containing
each individual character of the string as its entries.

Time complexity: Without a delimiter O(n), 
with a delimiter O(n * m) where n is string length and m is delimiter length.
*/

let str = "A string, with a comma";

// Example 1
// Returns an array containing the resulting substrings from splitting on ','
console.log(`Example 1: ${str.split(",")}`);

// Example 2
// Returns an array containing each space-seperated substring
console.log(`Example 1: ${str.split(" ")}`);

// Example 3
// Returns an array containing each character in the string
console.log(`Example 1: ${str.split("")}`);
