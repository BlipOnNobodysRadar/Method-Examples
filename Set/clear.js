/*
Set.prototype.clear()

Type: Set

Description: 
Removes all elements from a Set.


Time complexity: O(1)
*/

let aSet = new Set();

//! Look at the .values() method to understand what's done to log the values in the Set.

// Example (only one, pretty straightforward!)
// Adds 5 4 and 7 to the set
aSet.add(5).add(4).add(7);
// The set before clearing
let values = aSet.values();
let example = "Example before clearing: ";
for (value of values) {
  example += `${value}, `;
}
console.log(example);
// Calling the .clear() method on the set
aSet.clear();
// The set after clearing
values = aSet.values();
example = "Example after clearing: ";
for (value of values) {
  example1 += `${value}, `;
}
console.log(example);
