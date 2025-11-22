function print_divisors(n) {
    // code here
    const result = []
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
            if (Math.floor(n / i) !== i) {
                result.push(Math.floor(n / i));
            }
        }
    }
    result.sort((a, b) => a - b);

    console.log(result.join(" "));
}

print_divisors(12);