function largest(arr) {
    // code here
    let max = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    return max;
}

const arr = [1, 2, 4, 45, 3, 2, 3, 4, -99, 5];

console.log(largest(arr));