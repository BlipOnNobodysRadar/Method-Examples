/*
Set.prototype.add()

Type: Set

Description: 
Inserts a new non-duplicate element into the Set object. Returns the updated Set object.

Time complexity: O(1)
*/

let aSet = new Set();

//! Look at the .values() method to understand what's done to log the values in the Set.

// Example 1
// Adds 5 (number) to the set; (need to )
aSet.add(5);
// Code below is just to display the result
let values = aSet.values();
let example1 = "Example1 1: ";
for (value of values) {
  example1 += `${value} (${typeof value}), `;
}
console.log(example1);

// Example 2
// Adds 5 (string) to the set;
aSet.add("5");
// Code below is just to display the result
values = aSet.values();
let example2 = "Example1 1: ";
for (value of values) {
  example2 += `${value} (${typeof value}), `;
}
console.log(example2);

// Example 3
// Since 5 (number) already exists in the set, the Set remains the same;
aSet.add(5);
// Code below is just to display the result
values = aSet.values();
let example3 = "Example1 1: ";
for (value of values) {
  example3 += `${value} (${typeof value}), `;
}
console.log(example3);
