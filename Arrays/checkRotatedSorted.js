//Check if the given array is rotated sorted array or not

var check = function (nums) {
  let arr = [...nums];

  for (let i = 0; i < nums.length; i++) {
    let sorted = true;

    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        sorted = false;
        break;
      }
    }

    if (sorted) return true;

    nums.push(nums.shift());
  }

  return false;
};

let arr = [3, 4, 5, 1, 2];

console.log(check(arr)); //Time complexity - o(n^2);
