//     *
//    ***
//   *****
//  *******
// *********

function starPattern(n) {
    for(let i=1;i<=n;i++) {
        for(let k=1;k<=n-i;k++){
            process.stdout.write(" ")
        }
        for(let j=1; j<=i*2-1;j++){
            process.stdout.write("*")
        }
        console.log();
    }
}

starPattern(10);