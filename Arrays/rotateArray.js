var rotate = function (nums, k) {
    k = k % nums.length;
    let arr = [];

    for (let i = nums.length - k; i < nums.length; i++) {
        arr.push(nums[i]);
    }
    for (let i = 0; i < nums.length - k; i++) {
        arr.push(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = arr[i];
    }
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

rotate(arr, k);

console.log(arr);
