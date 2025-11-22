// *********
//  *******
//   *****
//    ***
//     *

function starPattern1(n) {
    for(let s=n;s>0;s--){
        for(let k=1;k<=n-s;k++){
            process.stdout.write(" ");
        }
        for(let i=1;i<=s*2-1;i++){
            process.stdout.write("*");
        }
        console.log();
    }
}

starPattern1(10);