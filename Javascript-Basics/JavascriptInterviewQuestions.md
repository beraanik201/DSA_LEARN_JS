1.  In JS, Fixed values are called Literals.

2.  why in js everything is object?
    => JavaScript is prototype-based, so objects form the core of the language. Even primitives get temporary wrapper objects, which is why they expose methods. Everything that isn't a primitive is an object, and everything behaves like an object to keep the language flexible and consistent.

3.  How primitive and non-primitive data store in stack and heap in js?
    => Primitive - String, Number, Boolean, Null, Symbol, BigInt, Undefined
    ✔ Stored as actual values
    ✔ Fast access
    ✔ Copy-by-value semantics

        Example:
        let p1 = "sameer";
        let p2 = p1;  // copies the VALUE
        p1 = "Hitesh";
        console.log(p2); // "sameer"

        Explanation:
        p1 stores "sameer" directly in stack memory
        p2 gets a separate copy
        Changing p1 does not affect p2

    Non-Primitive - Object, Array, Function
    ✔ Actual data stored in heap
    ✔ Stack stores only a reference (memory address)
    ✔ Copy-by-reference semantics

        Example:
        let p3 = { fname: "sameer" };
        let p4 = p3;  // copies the REFERENCE, not object
        p4.fname = "piyush";
        console.log(p3.fname); // "piyush"

        Explanation:
        The actual object { fname: "sameer" } lives in the heap
        p3 holds a reference (like 0x123) in the stack
        p4 = p3 means p4 now points to the same heap location
        Mutating through p4 affects data referenced by p3 as well

4.  let p1 = "sameer";
    let p2 = p1;
    p1 = "Hitesh";
    console.log(p2)
    let p3 = {
    fname:'sameer'
    }
    let p4=p3;
    p4.fname = 'piyush'
    console.log(p3.fname);
    what is the answer and how the internal work is done?

5.  What is garbage collection and pointer in js?
    => JavaScript has automatic garbage collection, meaning the developer does not manually manage memory.
    Instead, the JS engine periodically removes values from memory that are no longer reachable in the program.
    ✔ Uses Mark-and-Sweep Algorithm
    The algorithm works like this:
    JS engine starts from global roots (global object, currently executing functions, variables in scope).
    It marks all values that can still be reached from these roots.
    Anything not marked is unreachable, meaning the program has no way to access it.
    These unreachable objects are freed from heap memory.

    Example:
    let person = { name: "Sam" };
    person = null; // Object becomes unreachable
    // On next GC cycle, JS removes this object from memory

    It helps avoid memory leaks.

    JavaScript does not expose pointers directly like C/C++, but it uses pointer-like references internally.
    ✔ A pointer = memory address
    ✔ In JS, objects and arrays are always accessed via references

    Example:
    let a = { value: 10 };
    let b = a; // b gets the reference to the same object
    b.value = 20;
    console.log(a.value); // 20 → both refer to same heap object

    Explanation:
    i>a and b do not store the object itself
    ii>They store a reference (pointer-like value) to the heap
    iii>JS hides the actual memory address from you for security + simplicity

6.  JavaScript is single-threaded and synchronous to keep DOM manipulation safe and the language simple.
    Asynchronous behavior is handled by the event loop, not multiple threads.

7.  what are various datatypes?
    => primitive-String, Number, Bigint, Boolean, Undefined, Null, Symbol,
    reference(non-primitive)- Object, Arrays, Functions

8.  what is typeOf()?
    => typeof() (or simply typeof) is an operator in JavaScript that returns a string indicating the data type of a value.
    typeOf(null) - object

9.  Type conversion in js.
    => Type conversion is the process of converting a value from one data type to another.
    JavaScript supports two types of type conversion:

        i> Implicit Type Conversion (Coercion)
        "5" + 2       // "52"  → number converted to string
        "5" - 2       // 3     → string converted to number
        true + 1      // 2
        "10" * "2"    // 20

        ii> Explicit
        To Number:
        Number("123")     // 123
        parseInt("20px")  // 20
        Number("abc")     // NaN

        To String:
        String(100)       // "100"
        (100).toString()  // "100"

        To Boolean:
        Boolean(1)        // true
        Boolean("")       // false
        Boolean([])       // true

10. what is NaN?
    => NaN is a special numeric value representing an invalid number result. It’s of type number, not equal to itself,
    and appears when numeric operations fail.

11. What is the difference between a linear and a non-linear data structure?
    => A linear data structure is one in which data elements are arranged sequentially—one after another.
    Characteristics - i> Elements are stored in a single level.
    ii>Traversal is sequential (one after another).
    iii> Memory usage is continuous in many cases.
    Examples - Array, Linked List, Queue, Stack.

        A non-linear data structure is one in which data elements are arranged hierarchically — not sequentially.
        Characteristics -   i> Elements are stored in multiple levels.
                            ii>Traversal is non-sequential (branching possible).
                            iii> Memory may be scattered.

12. prefix and postfix?
=>  Prefix:
    The value is incremented/decremented first, then the updated value is returned.

    Example:
    let i = 5;
    let result = ++i;  
    console.log(result); // 6
    console.log(i);      // 6

    Postfix:
    The current value is returned first, then increment/decrement happens afterwards.

    Example:
    let i = 5;
    let result = i++;  
    console.log(result); // 5 (old value)
    console.log(i);      // 6 (incremented after returning)

13. == vs === ?
=>  1️⃣ == (Loose Equality)
    Compares values only
    Performs type coercion before comparison
    Can lead to unexpected results

    Examples:
    "5" == 5        // true (string converted to number)
    true == 1       // true
    "" == false     // true
    null == undefined // true

    2️⃣ === (Strict Equality)
    Compares value + data type
    No type coercion
    Always safe and predictable

    Examples:
    "5" === 5       // false
    true === 1      // false
    "" === false    // false
    null === undefined // false


14. call by value vs call by reference?
=> 

15. How is JS Dynamically Typed ?
=>  JavaScript is dynamically typed because variable types are determined at runtime, 
    not at compile time.
    You don’t declare types — JS infers them based on the value assigned.
    ✔ A variable can hold any type
    ✔ And can change its type at any time

    Example:
    let x = 10;     // number
    x = "hello";    // now string
    x = true;       // now boolean


16. const id=Symbol('123')
    const anotherId=Symbol('123')
    console.log(id === anotherId)
    what will be the output?
=> Output: false (Even if both symbols have the same description ('123'), each Symbol() call creates a unique value.)


17. Stack memory(primitive), heap(non-primitive)memory

18. What is String Interpolation?
=>  String interpolation is the technique of inserting variables or expressions directly into a string using 
    template literals(backticks `` `). It allows dynamic string creation without concatenation.

    Example:
    const name = "Anik";
    const age = 25;
    const message = `My name is ${name} and I am ${age} years old.`;
    console.log(message);

19. String(methods)- slice, trim, replace, includes, split, String concat using backticks

20. toFixed(), toPrecision(), toLocaleString method in js

21. Math.-abs, round, ceil, floor, min, max, random

22. JavaScript Date objects represent a single moment in time in a platform-independent format.

23. toDateString() method:
=> toDateString() is a Date object method that returns the date portion only (no time) in a human-readable string format.
    Example:
    const today = new Date();
    console.log(today.toDateString());


24. Array methods- push, pop, unshift(), shift, includes, indexOf(), join, of

25. slice vs splice(manipulates original array).
=> 1️⃣ slice()
    ✔ Does NOT modify the original array
    ✔ Returns a new array
    ✔ Used to extract a portion of the array
    ✔ Arguments → (start, end)

    Example:
    const arr = [1, 2, 3, 4, 5];
    const result = arr.slice(1, 4);

    console.log(result); // [2, 3, 4]
    console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)


    2️⃣ splice()
    ✔ Modifies the original array (mutates it)
    ✔ Can add, remove, or replace elements
    ✔ Arguments → (start, deleteCount, ...itemsToAdd)

    Example:
    const arr = [1, 2, 3, 4, 5];
    const result = arr.splice(1, 3); 

    console.log(result); // [2, 3, 4] (removed elements)
    console.log(arr);    // [1, 5] (modified)

26. How to join two arrays?
=> 1️⃣ Using concat()
    Does not modify original arrays. Returns a new array.

    Example:
    const a = [1, 2];
    const b = [3, 4];
    const result = a.concat(b);
    console.log(result); // [1, 2, 3, 4]

    2️⃣ Using Spread Operator (...)
    Modern and more popular approach.

    Example:
    const a = [1, 2];
    const b = [3, 4];

    const result = [...a, ...b];
    console.log(result); // [1, 2, 3, 4]

27. what are object literals?
=>  Object literals are the simplest and most common way to create objects in JavaScript using curly braces {} with key–value pairs.
    They allow you to define an object in a single expression without using a class or constructor.

    Example:
    const user = {
    name: "Anik",
    age: 25,
    isLoggedIn: true
    };





28. what is Singleton?
=>  A Singleton is a design pattern that ensures only one instance of an object or class can exist throughout the entire application.
    No matter how many times you try to create it, you always get the same instance.

    ✔ Why use Singleton?
    Shared configuration (e.g., app settings)
    Shared services (e.g., logging, caching, database connection)
    Prevents inconsistent state across the app

    Singleton Example (Object Literal)

    Example:
    const config = {
    appName: "MyApp",
    version: "1.0"
    };
    There's only one config object.

    ✔ Singleton Example (Using a Class)

    Example:
    class Singleton {
    constructor() {
        if (Singleton.instance) {
        return Singleton.instance;
        }
        this.value = Math.random();
        Singleton.instance = this;
    }
    }

    const a = new Singleton();
    const b = new Singleton();

    console.log(a === b); // true

29. How to access objects?
=>  const jsUser={
    name: "anik"
    }
    we can access- jsUser.name
    jsUser["name"] (best way)

30. Take a symbol, add in object keys and print.
=>  You can use a Symbol as an object key, but you must use bracket notation to assign and access it.

    Example:
    // 1. Create a symbol
    const id = Symbol("userId");

    // 2. Use it as an object key
    const user = {
    name: "Anik",
    age: 25,
    [id]: 101  // Symbol as key
    };

    // 3. Print the symbol-keyed value
    console.log(user[id]);        // 101

    // 4. Notice: it won't show up in normal Object.keys()
    console.log(Object.keys(user)); // ["name", "age"]

    // 5. To get symbol keys:
    const symbols = Object.getOwnPropertySymbols(user);
    console.log(symbols);         // [ Symbol(userId) ]
    console.log(user[symbols[0]]); // 101

    When using a Symbol as an object key, you must use [symbol] during definition and access, and it’s not included in normal key iterations like Object.keys().

31. How to declare objects with the help of constructors?(Singleton object)
=>  Using constructor functions, we can implement a Singleton by storing the created instance on the function itself 
    and returning it  on subsequent constructor calls.

32. What is Optional Chaining in JavaScript?
=>  Optional chaining (?.) is a safe way to access deeply nested object properties without throwing an error 
    if any part of the chain is null or undefined.

    Example:
        const user = {
    profile: {
        address: {
        city: "Kolkata"
        }
    }
    };

    console.log(user.profile.address.city); // works
    console.log(user.profile.work.company); // ❌ Error if 'work' doesn't exist
    console.log(user.profile?.work?.company); // undefined (no error even if 'work' is undefined)

33. How to merge two objects?
=>  ✅ 1. Using Spread Operator (Most Common)
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };

        const merged = { ...obj1, ...obj2 };
        console.log(merged); // { a: 1, b: 2 }


        ✔ Creates a new object
        ✔ Does not mutate originals
        ✔ Preferred in modern JS

    ✅ 2. Using Object.assign()
        const obj1 = { a: 1 };
        const obj2 = { b: 2 };

        const merged = Object.assign({}, obj1, obj2);
        console.log(merged); // { a: 1, b: 2 }


        ✔ Also returns a new object
        ✔ First argument is the target

    ✅ 3. Mutating merge (Not preferred)
        Object.assign(obj1, obj2); 
        // obj1 becomes { a: 1, b: 2 }


        ✔ Merges into existing object
        ❌ Mutates original, so avoid unless needed

34. const user={
    name: "Anik",
    email: "anik@gmail.com"
    }
    console.log(Object.keys(user))

    output: ["name", "email"]

    Object.keys() returns an array of all enumerable keys of an object. In this case, it prints ['name', 'email']

35. what will be the return type of keys or values in a object?
=>  1️⃣ Object.keys(obj)

    Returns an array of strings (the property names).

    Example:
    Object.keys({ a: 1, b: 2 }); 
    // ["a", "b"]
    ➡ Return type: Array<string>

    2️⃣ Object.values(obj)

    Returns an array of the property values.

    Example:
    Object.values({ a: 1, b: 2 }); 
    // [1, 2]
    ➡ Return type: Array<any>
    (values can be numbers, strings, objects, etc.)

    Both Object.keys() and Object.values() return arrays — keys return an array of strings, and values return an array of values.

36. how to check if a key is present or not in an object?
=>  ✅ 1. hasOwnProperty() (Most Common & Recommended)

        Example:
        const user = { name: "Anik" };
        console.log(user.hasOwnProperty("name")); // true
        console.log(user.hasOwnProperty("age"));  // false

        ✔ Checks only the object’s own properties
        ✔ Does not check the prototype chain

    ✅ 2. in operator

        Example:
        "name" in user; // true
        "age" in user;  // false

        ✔ Checks the object and its prototype chain

    ✅ 3. Direct comparison (less preferred)

        Example:
        user.name !== undefined

        ❌ Not reliable if value itself may be undefined.

37. what is Destructuring? give a code example. Can we destructure Array also?
=>  Destructuring is an ES6 feature that allows you to extract values from objects or arrays and assign them to variables in a clean, concise way.

It helps avoid repetitive access like obj.name, arr[0], etc.

✅ 1. Object Destructuring

    Example:
    const user = {
    name: "Anik",
    age: 25,
    location: "Kolkata"
    };

    const { name, age, location } = user;

    console.log(name);      // "Anik"
    console.log(age);       // 25
    console.log(location);  // "Kolkata"

    ✔ Benefits:
    Clean syntax
    Less repetition
    You only extract what you need

✅ 2. Renaming While Destructuring

    Example:
    const { name: userName } = user;
    console.log(userName);

✅ 3. Setting Default Values

    Example:
    const { phone = "Not Provided" } = user;
    console.log(phone); // "Not Provided"

✅ Can We Destructure Arrays? → YES

    Array destructuring is position-based, not key-based.

    Example:
    const numbers = [10, 20, 30];

    const [a, b, c] = numbers;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30

    🚀 Skip Values in Array Destructuring

    Example:
    const [first, , third] = [1, 2, 3];
    console.log(first, third); // 1 3



38. what is function in js?
=>  A function in JavaScript is a reusable block of code designed to perform a specific task.
    It allows you to avoid repetition, improve structure, and maintain clean code.

    Functions can:
    Take inputs (parameters)
    Perform operations
    Return a value

    ✔ Basic Function:
    Example:
    function greet(name) {
    return `Hello, ${name}!`;
    }
    console.log(greet("Anik")); 
    // "Hello, Anik!"

    ✔ Why Functions Are Important?
    Reusability
    Modularity
    Maintainability
    Abstraction
    Avoid repeating logic
    Foundation of callbacks, closures, and higher-order functions

    ✔ Different Ways to Create a Function
    1. Function Declaration:

    Example:
    function add(a, b) {
    return a + b;
    }

    2. Function Expression

    Example:
    const add = function(a, b) {
    return a + b;
    };

    3. Arrow Function (ES6)

    Example:
    const add = (a, b) => a + b;

    4. Anonymous Functions
    Functions without names, usually passed as callbacks:

    Example:
    setTimeout(function() {
    console.log("Hello");
    }, 1000);



39. argument and parameter in js
=>  Parameters are variables listed in the function definition, while arguments are the actual values passed to the 
    function when calling it

    Example:
    function add(a, b) {   // a and b are PARAMETERS
    return a + b;
    }
    add(5, 10);  // 5 and 10 are ARGUMENTS

40. what is rest operator? rest vs spread?
=>  The rest operator (...) allows you to collect multiple remaining values into a single array.
    It is used when you want to accept variable number of arguments or collect leftover properties/elements.

    ✔ Rest Operator (Function Parameters):

    Example:
    function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
    }
    console.log(sum(1, 2, 3, 4)); // 10
    Here, ...numbers collects all passed arguments into an array.

    ✔ Rest Operator in Object Destructuring

    Example:
    const user = { name: "Anik", age: 25, city: "Kolkata" };
    const { name, ...details } = user;
    console.log(details); 
    // { age: 25, city: "Kolkata" }

    ✔ Rest Operator in Array Destructuring

    Example:
    const [first, ...rest] = [10, 20, 30, 40];
    console.log(rest); // [20, 30, 40]

    🔥 REST Summary
    Rest gathers values into an array.

    ✅ Spread Operator (...)
    The spread operator expands (or “spreads out”) elements of an array or object.
    It is used for:
    Merging arrays
    Copying arrays/objects
    Passing array items as function arguments

    ✔ Spread Operator (Array Merge)

    Example:
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const result = [...arr1, ...arr2];
    console.log(result); // [1, 2, 3, 4]

    ✔ Spread in Object Copy

    Example:
    const user = { name: "Anik", age: 25 };
    const copy = { ...user };
    console.log(copy);  // { name: "Anik", age: 25 }

    ✔ Spread in Function Calls

    Example:
    function add(a, b, c) {
    return a + b + c;
    }
    const nums = [1, 2, 3];
    console.log(add(...nums)); // 6

    🔥 SPREAD Summary
    Spread expands values.

41. how to pass object in a function in js?
=>  Example:
    function printUser(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    }

    const person = {
    name: "Anik",
    age: 25
    };

    printUser(person);


    Destructuring Inside Function Parameter (Modern & Clean)(This is preferred when you only need specific properties:)

    Example:
    function printUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
    }

    const user = { name: "Anik", age: 25 };

    printUser(user);

42. What is memoized function in js? Write a function memoize(fn) that returns a memoized version of fn. 
    The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.

=>  Memoization is an optimization technique where a function caches the result of a computation based on its input.
    If the same input occurs again, the function returns the cached result instead of recomputing, improving performance.
    Common use cases:
    Expensive calculations
    API calls (rare but possible)
    Repeated function calls with same arguments

    ✅ Write memoize(fn) Function

    Example:
    function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
        console.log("Returning cached result");
        return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
    }

    🧪 Usage Example
    function add(a, b) {
    console.log("Calculating...");
    return a + b;
    }

    const memoizedAdd = memoize(add);

    console.log(memoizedAdd(2, 3)); // Calculating... → 5
    console.log(memoizedAdd(2, 3)); // Returning cached result → 5
    console.log(memoizedAdd(5, 10)); // Calculating... → 15
    console.log(memoizedAdd(5, 10)); // Returning cached result → 15

43. Make an array of first 5 numbers. write a function and pass the array.
=>  

    Example:
    function printArray(arr) {
    arr.forEach(num => console.log(num));
    }
    const numbers = [1, 2, 3, 4, 5];
    printArray(numbers);

44. Block Scope vs Global Scope.
=>  1️⃣ Block Scope
    Variables declared inside curly braces {} are block-scoped.
    Includes: let, const
    ✔ Accessible only inside that block
    ✔ Cannot be used outside that {}

    Example:
    {
    let x = 10;
    const y = 20;
    }
    console.log(x); // ❌ Error

    Common block examples:
    if { }
    for { }
    while { }
    any { } pair

    2️⃣ Global Scope
    A variable is global if it is:
    Declared outside all blocks and functions, or
    Implicitly created (bad practice)
    ✔ Accessible everywhere in the program

    Example:
    let a = 100;  // global
    function test() {
    console.log(a); // ✔ accessible
    }

    In browsers, global variables become part of the window object.

45. let vs const vs var?
=>  1️⃣ var
    ✔ Function-scoped
    ✔ Can be re-assigned
    ✔ Hoisted with undefined
    ✔ Allows re-declaration
    ❌ Creates bugs → avoid

    Example:
    var x = 10;
    var x = 20;   // allowed

    Problem: function scope + hoisting

    Example:
    console.log(a); // undefined (hoisted)
    var a = 5;

    2️⃣ let
    ✔ Block-scoped
    ✔ Can be re-assigned
    ❌ Cannot be re-declared in same scope
    ✔ Hoisted but inside Temporal Dead Zone (TDZ)

    Example:
    let y = 10;
    // let y = 20; // ❌ Error (can't redeclare)
    y = 30; // ✔ allowed

    3️⃣ const
    ✔ Block-scoped
    ❌ Cannot be re-assigned
    ❌ Cannot be re-declared
    ✔ Hoisted but inside TDZ
    ⚠ Value not immutable — object properties can still change

    Example:
    const z = 10;
    // z = 20; // ❌ Error

    Example:
    const user = { name: "Anik" };
    user.name = "Rahul"; // ✔ allowed (object reference same)

46. Explain Closure.
=>  A closure is created when a function remembers the variables from its outer (parent) scope, even after the parent 
    function has finished executing.
    In other words:
    A function along with its surrounding variables bundled together.

    Example:
    function outer() {
    let count = 0;

    function inner() {
        console.log(count);
    }

    return inner;
    }

    const fn = outer();
    fn();  // prints 0 (even though outer() already finished)

47. Explain Hoisting.
=>  Hoisting means declarations are moved to the top of their scope before execution. var becomes undefined, functions 
    are fully hoisted, and let/const are hoisted but not accessible due to the Temporal Dead Zone.

    ✔ Function Hoisting

    Example:
    greet();  // works
    function greet() {
    console.log("Hello");
    }

    ✔ Variable Hoisting

    Example:
    console.log(a); // undefined
    var a = 10;

    Example:
    console.log(b); // ❌ ReferenceError
    let b = 20;

48. What is defer?
=>  defer is an attribute used in <script/> tags that tells the browser to:
    ✔ Download the script in parallel (non-blocking)
    ✔ Execute the script only after the HTML is fully parsed
    ✔ Maintain the execution order of scripts

49. console.log(addOne(5))
    function addOne(num){
    return num + 1
    }
    console.log(addTwo(5))
    const addTwo = function(num){
    return num + 2
    }
    What will be the output?

50. const user = {
    username : "Rohit",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website.`)
        }
    }
    user.welcomeMessage()
    What is this?

51. function chai(){
    const username= "Anik"
    console.log(this.username)
    }
    chai()

52. What is Arrow function? Implicit return in Arrow function.
=>  Arrow functions are a shorter and cleaner way to write functions in JavaScript, introduced in ES6. 
    They use the => syntax and do not have their own this, arguments, super, or new.target, making them ideal 
    for callbacks and functional programming patterns.

    Example:
    const add = (a, b) => a + b;

    Arrow functions support implicit return, which means:
    If the function body contains a single expression and you don’t use {}, that expression is automatically returned. No return keyword needed.

    Example:
    const add = (a, b) => a + b;          // implicit return

    Example:
    const double = n => n * 2;            // single expression

    Example:
    const add = (a, b) => { return a + b; };  // explicit return required

53. What is IIFE (Immediately Invoked Function Expression)?
=>  An IIFE is a function in JavaScript that is defined and executed immediately at the same time.
    Its main purpose is to create a private scope and avoid polluting the global namespace.

    Example:
    (function () {
    console.log("IIFE runs immediately");
    })();

54. What is Javascript Execution Context?
=>  Execution Context is the environment in which JavaScript code is evaluated and executed.
    It decides what variables, functions, and this value are accessible at any point.

    Types of Execution Context

    Example:
    i> Global Execution Context (GEC)
    Created when JS file starts.
    Creates global object (window in browser).
    Sets this to global object.
    Only one GEC in a program.

    Example:
    ii>Function Execution Context (FEC)
    Created every time a function is invoked.
    Has its own local variables, arguments, and new this value.
    Eval Execution Context (rare, not used generally)

    Phases of Execution Context
    Each context goes through 2 phases:

    Example:
    1. Creation Phase (Memory Creation Phase / Hoisting Phase)
    Allocates memory for:
    Variables → initialized with undefined
    Functions → full function stored
    Sets up:
    this binding
    Lexical Environment
    Variable Environment

    Example:
    2. Execution Phase
    Code runs line by line.
    Variables get assigned actual values.
    Functions get executed.
    Call Stack
    JS is single-threaded → uses call stack.
    When a function is called → new Execution Context pushed.
    When function finishes → popped.

55. function one(){
    console.log("one called");
    two();
    }
    function two(){
        console.log("two called");
    }
    one();
    two();
    what will be the output?

56. In a switch case statement if any case is matched and there no break all cases will be executed after the match except default.

57. truthy value - ("0", 'false', " ", [], {}, function(){})

58. falsy value - (0, -0, false, BigInt 0n, NaN, undefined, null,"")

59. How to check an object is empty or not?
=>  Object.keys(objectName).length===0

60. what is Nullish Coalescing Operator (??)
=>  The nullish coalescing operator (??) returns the right-hand value only when the left-hand value is null or undefined.

    Example:
    let result = value1 ?? value2;

    If value1 is null or undefined → return value2
    Otherwise → return value1

61. What are Higher Order Functions?
=>  A function is called a Higher Order Function if it accepts another function as an argument, returns a function, or does both.

    Example:
    function greet(fn) {
    return fn();     // taking a function
    }

    function multiplier(a) {
    return function(b) {   // returning a function
        return a * b;
    }
    }

    Example:
    map, filter,reduce

61. 