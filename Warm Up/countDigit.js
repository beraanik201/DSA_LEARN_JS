function countDigits(n) {
  n = Math.abs(n);
  let count = 0;

  if (n === 0) return 1;

  while (n !== 0) {
    n = Math.floor(n / 10);
    count++;
  }

  return count;
}

console.log(countDigits(-3245));
