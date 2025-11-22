function oddNumberSum(n) {
  //   console.log(arr[n]);
  if (n === 0 && arr[n] % 2 !== 0) return arr[0];
  if (n === 0) return 0;

  if (arr[n] % 2 !== 0) return arr[n] + oddNumberSum(n - 1);

  if (arr[n] % 2 === 0) return oddNumberSum(n - 1);
}

let arr = [12, 35, 1, 10, 34, 1];

let result = oddNumberSum(arr.length - 1);
console.log(result);
