let count = 0;
function printNumber(n) {
    if (count === n) return;
    console.log("Namaste Recursion");
    count++;
    printNumber(n);
}

printNumber(5);


//Instead of using global variable we can pass it as a parameter.
function printNumber(n, count = 0) {
    if (count === n) return;
    console.log("Namaste Recursion");
    printNumber(n, count + 1);
}

printNumber(10);

//Time Complexity - O(n) - As one function call is made for each value from 1 to n.
//Space Complexity - O(n) - As the maximum depth of the recursion tree can go up to n.