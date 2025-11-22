// Input: n = 5
// Output:
// *****
// ****
// ***
// **
// *

function printInvertedRightHalfPyramidPattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            process.stdout.write("* ")
        }
        console.log();
    }
}

printInvertedRightHalfPyramidPattern(5);