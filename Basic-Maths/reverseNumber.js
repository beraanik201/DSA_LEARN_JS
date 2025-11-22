var reverse = function (x) {
    let result = 0;
    let x1 = Math.abs(x);
    while (x1 > 0) {
        const digit = x1 % 10;
        result = (result * 10) + digit;
        x1 = Math.floor(x1 / 10);
    }

    if (result < -(2 ** 31) || result > (2 ** 31 - 1)) {
        return 0;
    }

    if (x < 0) {
        return (result * -1);
    }
    return result;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));