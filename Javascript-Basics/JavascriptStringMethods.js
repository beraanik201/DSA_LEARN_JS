// Javascript String Methods

let str = "Anik Bera";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("Anik")); //case sensitive and returns boolean
console.log(str.indexOf("B")); // case sensitive and if not found returns -1;
const getPart = str.slice(0, 6); //last index is not included
console.log(getPart);
const getSubPart = str.substring(0, 6);
console.log(getSubPart);

// [slice vs substring
// Use slice(start, end) when you want position-based slicing that supports negative indices (from the end).
// Use substring(start, end) when you want safe, positive indexing and don't care about negative values (they’re treated as 0) and auto-swapped  arguments.]

const newstr = "Hello world world";
const newSt = newstr.replace("world", "India");
console.log(newSt); //Replaces only first occurance(If you want to replace all occurance, use regex)

const splitString = newstr.split(" ");
console.log(splitString);

const newstr2 = "    Hello world   ";
console.log(newstr2.trim());

const startstr = "Tech Mahindta ltd.";
console.log(startstr.startsWith("Tech"));
console.log(startstr.endsWith("ltd."));

console.log(startstr.charAt(3));

console.log(startstr.replaceAll(" ", "-"));
console.log(startstr.concat(", kolkata"));

console.log(startstr.repeat(3));

// Note: All string methods return a new string; original is unchanged.
