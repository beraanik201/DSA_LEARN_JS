//Selection Sort
//Time complexity - o(n^2);
//Space complexity - o(1);
let arr1 = [7, 1, 5, 12, -10, 0, 4, 3, 1];

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minimum = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minimum]) minimum = j;
    }
    if (minimum !== i) {
      let temp = nums[i];
      nums[i] = nums[minimum];
      nums[minimum] = temp;
    }
  }

  return nums;
}

// console.log(selectionSort(arr1));
