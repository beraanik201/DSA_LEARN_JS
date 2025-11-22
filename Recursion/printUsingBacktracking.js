function printBacktracking (i, n){
    if (i === 0) return;
    printBacktracking(i - 1, n);
    console.log(i);

}

printBacktracking(5, 5);


//print N to 1 using backtracking technique
function Nto1 (i, n){
    if(i > n) return;
    Nto1(i+1, n);
    console.log(i);
}

Nto1(1, 5);