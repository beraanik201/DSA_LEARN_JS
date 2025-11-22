function reverseArrayUsingRecursion(arr, start = 0, end = arr.length - 1) {
    if (arr.length === 0) return [];

    if (start >= end) return arr;

    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return reverseArrayUsingRecursion(arr, start + 1, end - 1);

}

console.log(reverseArrayUsingRecursion([1, 2, 3, 4, 5]));