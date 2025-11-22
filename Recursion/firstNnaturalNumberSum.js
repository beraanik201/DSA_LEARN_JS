function sum(n) {
  //   console.log(n);
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(5));

function arrSum(n) {
  if (n === 0) return arr[0];

  return arr[n] + arrSum(n - 1);
}

let arr = [5, 2, 6, 1, 3];
let result = arrSum(arr.length - 1);
// console.log(result);
