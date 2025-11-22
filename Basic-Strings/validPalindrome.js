var isPalindrome = function(s) {
    s = s.toLowerCase(); //as strings are immutable in js
    let newStr = "";
    for(var i=0;i<s.length;i++) {
        const ch = s[i];
        if((ch >= 'a'  && ch <= 'z') || (ch >= '0' && ch <= '9')) {
            newStr += ch;
        }
    }

    let g = 0;
    let e = newStr.length - 1;
    while(g < e) {
        if(newStr[g] !== newStr[e]){
            return false;
        }
        g++;
        e--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false