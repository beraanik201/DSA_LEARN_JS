//Insertion Sort
//Time complexity - o(n^2);
//Space complexity - o(1);

let arr3 = [7, 1, 5, 12, -10, 0, 4, 3, 2];

function insertionSort(arr3) {
  for (let i = 1; i < arr3.length; i++) {
    let temp = arr3[i];
    let j = i - 1;
    // for(;j>=0;j--){
    while (j >= 0 && arr3[j] > temp) {
      arr3[j + 1] = arr3[j];
      j--;
    }
    arr3[j + 1] = temp;
  }

  return arr3;
}

console.log(insertionSort(arr3));
