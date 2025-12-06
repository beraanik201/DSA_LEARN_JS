// JavaScript Array Methods :

// 1. push() : Adds one or more elements to the end of an array and returns the new lengthof the array.

const number = [1, 2, 3];
number.push(4, 5);
// console.log(number);

// 2. pop() : Removes the last element from an array and return that element.

const numbers = [1, 2, 3, 6, 0];
const getNum = numbers.pop();
// console.log(getNum);

// 3. shift() : Removes the first element from an array and returns that element.

const num = [1, 0, 9, -1];
const firstElem = num.shift();
// console.log(firstElem);
// console.log(num);

// 4. unshift() : Adds one or more elements to the beginning of an array and returns the new length of the array.

const numbers1 = [0, -1, 1, 4, 88];
const newLength = numbers1.unshift(0, -1);
// console.log(newLength);
// console.log(numbers1);

// 5. find() : The find() method is an array method used to retrieve the first element in an array that satisfies a provided testing function.
// If an element satisfying the condition is found, find() returns that element.
// If no element satisfies the condition, find() returns undefined.

const mixNumbers = [1, 1, -1, -88, 0, 2, 99];
const foundNumber = mixNumbers.find((num) => num > 1);
// console.log(foundNumber)

// 6. some() : This evaluates at least one element in the array passes the test implemented by the provided function. It returns true if any element passes the test, otherwise it returns false.

const nums = [1, 17, 5, 17, 19, 11];
const hasEven = nums.some((num) => num % 2 == 0);
// console.log(hasEven);

// 7. every() : Tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test, otherwise it returns false.

const check = [10, 2, 30, 4, 50];
const letCheck = check.every((num) => num % 2 === 0);
// console.log(letCheck);

// 8. sort() : Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// Default string sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// console.log(fruits);

// Numerical Sort (Ascending)
const num1 = [40, 100, 1, 5, 25, 10];
num1.sort((a, b) => a - b);
// console.log(num1);

// Numerical Sort (Descending)
num1.sort((a, b) => b - a);
// console.log(num1);

// 9. includes() : Determines whether an array includes a certain element, returning true or false as appropiate.

const nums2 = [1, 2, 3, 4, 5];
const includesThree = nums2.includes(3);
// console.log(includesThree);

// 10. slice() : Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array is not modified.

const array = [1, 2, 3, 4, 5];
const slicedArray = array.slice(0, 2);
// console.log(slicedArray);

// 11. map() : Creates a new array with the results of calling a provided function on every element in the calling array.

const arr3 = [1, 2, 3];
const doubleNumber = arr3.map((num) => num * 2);
// console.log(doubleNumber);
// console.log(arr3);

// 12. filter() : Creates a new array with all elements that pass the test implemented by the provided function.

const mixNumber5 = [1, 2, 3, 4, 5];
const evenNumber5 = mixNumber5.filter((num) => num % 2 === 0);
// console.log(evenNumber5);
// console.log(mixNumber5);

// 13. reduce() : Executes a reducer function on each element of the array, resulting in a single output value.

const num11 = [1, 2, 3, 4, 5];
const total = num11.reduce((num, total) => total + num, 0);
// console.log(total);

// 14. forEach() : Executes a provided function once for each array element.

const num21 = [1, 2, 3];
const getDouble = num21.forEach((num) => num * 2);
// console.log(num21);

// 15. indexOf() : Returns the first index at which a given element can be found in the array, or -1 if it is not present.

const fruits1 = ["apple", "banana", "orange", "orange"];
const orangeIndex = fruits1.indexOf("orange");
// console.log(orangeIndex);

// 16. lastIndexOf() : Returns last index at which a given element can be found in the array, or -1 if it is not present.

const fruit17 = ["banana", "orange", "pineapple", "banana", "orange"];
const lastIndex = fruit17.lastIndexOf("orange");
// console.log(lastIndex);

// 17. reverse() : Reverses the order of the elements of an array in place. The first element becomes the last, and the last element becomes the first.

const number101 = [1, 2, 3];
number101.reverse();
// console.log(number101);

// 18. concat() : Returns a new array that includes elements from the original array and additional elements.

const initialNumber = [1, 2, 3];
const moreNumbers = [4, 5];
const allNumbers12 = initialNumber.concat(moreNumbers);
// console.log(allNumbers12);

// 19. join() : Joins all elements of an array into a string. The elements are seperated by a specified seperator string.

const fruitArray = ["banana", "orange", "pineapple", "banana", "orange"];
const joinedFruitString = fruitArray.join(", ");
// console.log(joinedFruitString);

// 20. toString() : Returns a string representing the specified number or array and its elements.

const data1 = [1, 2, 3];
const data1String = data1.toString();
// console.log(data1String);

// Note: Most of the array methods do not change the original array; they return a new array or value. However, methods like push(), pop(), shift(), unshift(), sort(), reverse() do modify the original array.
