function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least two elements.";
  }
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return second;
}

let arr = [12, 35, 1, 10, 34, 1, 35];
let result = secondLargest(arr);
console.log("The second largest element is:", result);
