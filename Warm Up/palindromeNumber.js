var isPalindrome = function (x) {
  if (x < 0) return false;

  let copyX = x;

  let result = 0;

  while (copyX > 0) {
    let lastNum = copyX % 10;
    result = result * 10 + lastNum;
    copyX = Math.floor(copyX / 10);
  }

  if (result === x) return true;

  return false;
};

let num = 121;
console.log(isPalindrome(num));
