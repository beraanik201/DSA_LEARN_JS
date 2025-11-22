/**
 * Performs binary search on a sorted array.
 * @param {Array} arr - The sorted array to search.
 * @param {*} target - The value to find.
 * @returns {number} - The index of the target if found, else -1.
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Example usage:
const arr = [2, 3, 4, 5, 8]; // Must be sorted
const target = 4;
const result = binarySearch(arr, target);
console.log(`Index of ${target}:`, result); // Output: Index of 4: 2

// Time Complexity: O(log n) - where n is the number of elements in the array.
// Space Complexity: O(1) - uses constant extra space.
