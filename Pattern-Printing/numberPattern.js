// 1
// 22
// 333
// 4444
// 55555

function numberPattern(n) {
    for(let i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            process.stdout.write(i+" ");
        }
        console.log();
    }
}

numberPattern(10);