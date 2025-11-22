function factOfN(n) {
  if (n === 1) return 1;

  return n * factOfN(n - 1);
}

console.log(factOfN(5));
