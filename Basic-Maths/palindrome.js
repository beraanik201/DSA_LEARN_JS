var isPalindrome = function (x) {
    if (x < 0) return false;
    let x1 = x;
    let digit = 0;
    while (x1 > 0) {
        let getDigit = x1 % 10;
        digit = digit * 10 + getDigit;
        x1 = Math.floor(x1 / 10);
    }
    if (digit == x) {
        return true;
    }
    return false;

};

console.log(isPalindrome(121));