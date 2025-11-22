//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function starPattern2(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n - i; k++) {
            process.stdout.write(" ")
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            process.stdout.write("*")
        }
        console.log();
    }
    for (let a = n - 1; a >= 1; a--) {
        for (let k = 1; k <= n - a; k++) {
            process.stdout.write(" ");
        }
        for (let b = 1; b <= a * 2 - 1; b++) {
            process.stdout.write("*");
        }
        console.log();
    }

}

starPattern2(5);