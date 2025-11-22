/**
 * Performs linear search on an array.
 * @param {Array} arr - The array to search.
 * @param {*} target - The value to find.
 * @returns {number} - The index of the target if found, else -1.
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Time Complexity: O(n) - where n is the number of elements in the array.
// Space Complexity: O(1) - uses constant extra space.

// Example usage:
const arr = [5, 3, 8, 4, 2];
const target = 4;
const result = linearSearch(arr, target);
console.log(`Index of ${target}:`, result); // Output: Index of 4: 3
