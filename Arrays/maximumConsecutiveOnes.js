//brute force approach
// var findMaxConsecutiveOnes = function (nums) {
//     let maxCount = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == 1) {
//             let count = 1;

//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[j] == 1) {
//                     count++;
//                 } else {
//                     break;
//                 }
//             }
//             maxCount = Math.max(maxCount, count);
//         }
//     }
//     return maxCount;
// };

// o(n)

var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            maxCount = Math.max(currentCount, maxCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
};

const arr = [1, 1, 0, 1, 1, 1];

console.log(findMaxConsecutiveOnes(arr));