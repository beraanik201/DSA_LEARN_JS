function print1ToN(n, current = 1) {
    if (current > n) return;

    console.log(current);
    print1ToN(n, current + 1);
}

print1ToN(5);



//print n to 1
function printNto1(n, current = n) {
    if (current < 1) return;

    console.log(current);
    printNto1(n, current - 1);
}

printNto1(5);