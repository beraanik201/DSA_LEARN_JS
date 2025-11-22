//   star-pattern-1
let b = 4;

for (let i = 0; i < b; i++) {
  let row = "";
  for (let j = 0; j < b; j++) {
    row = row + "* ";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-2
//    n=4
//    *
//    * *
//    * * *
//    * * * *

let c = 4;

for (let i = 0; i < c; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "* ";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-3
//    n=4
//    1
//    1 2
//    1 2 3
//    1 2 3 4

let d = 4;

for (let i = 0; i < d; i++) {
  let row = "";
  for (let j = 1; j < i + 2; j++) {
    row = row + j + " ";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-4
//    n=4
//    1
//    2 2
//    3 3 3
//    4 4 4 4

let e = 4;

for (let i = 1; i <= e; i++) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + i + " ";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-5
//    n=4
//    1 2 3 4 5
//    1 2 3 4
//    1 2 3
//    1 2
//    1

let f = 5;

for (let i = 1; i <= f; i++) {
  let row = "";
  let count = 1;
  for (let j = i; j <= f; j++) {
    row = row + count + " ";
    count++;
  }
  console.log(row);
}

for (let i = 1; i <= f; i++) {
  let row = "";
  for (let j = 1; j <= f - i + 1; j++) {
    row = row + j + " ";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-6
//    n=5
//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

let g = 5;

for (let i = 1; i <= g; i++) {
  let row = "";
  for (let j = 1; j <= g - i; j++) {
    row = row + " ";
  }
  for (let k = 1; k <= i; k++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("\n");

//   star-pattern-7
//    n=5

//    1
//    1 0
//    1 0 1
//    1 0 1 0
//    1 0 1 0 1

let h = 6;

for (let i = 1; i <= h; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      row = row + "0 ";
    } else {
      row = row + "1 ";
    }
  }
  console.log(row);
}

console.log("\n");
