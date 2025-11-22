//Bubble sort
//Time complexity - o(n^2);
//Space complexity - o(1);

let arr = [99999999995, 99999910, 1111111, 2222, 77, 9];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
}

console.log(bubbleSort(arr));
