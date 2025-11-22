// 12345
// 1234
// 123
// 12
// 1

function numberPattern1(n) {
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i+1;j++){
            process.stdout.write(j+" ")
        }
        console.log();
    }
}

numberPattern1(10);