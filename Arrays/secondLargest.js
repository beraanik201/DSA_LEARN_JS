function getSecondLargest(arr) {
        // code here
        let largest = -Infinity;
        let secondLargest = -Infinity;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largest) {
                secondLargest = largest;
                largest = arr[i];
            } else if (arr[i] > secondLargest && arr[i] !== largest) {
                secondLargest = arr[i];
            }
        }

        return secondLargest === -Infinity ? -1 : secondLargest;
    }

const arr = [1, 2, 4, 45, 3, 2, 3, 4, -99, 5];

console.log(getSecondLargest(arr));