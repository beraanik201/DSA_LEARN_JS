var singleNumber = function (nums) {
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        answer ^= nums[i];
    }

    return answer;
};

const arr = [4, 1, 2, 1, 2];

console.log(singleNumber(arr));