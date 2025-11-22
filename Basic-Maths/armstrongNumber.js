function armstrongNumber(n) {
    let n1 = n;
    // code here
    function digitCalculator(n) {
        let count = 0;
        let number = n;
        while (number > 0) {
            count++;
            number = Math.floor(number / 10);
        }
        return count;
    }

    const power = digitCalculator(n);

    let result = 0;
    while (n > 0) {
        let digit = n % 10;
        result = result + Math.pow(digit, power);
        n = Math.floor(n / 10);
    }

    if (n1 === result) return true;

    return false;
}

console.log(armstrongNumber(151));