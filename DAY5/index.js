// ============================================
//  DAY 5 - JavaScript Concepts
//  Topics: Functions, Arrays, Objects,
//          Template Literals, Arrow Functions,
//          Spread & Rest Operators
// ============================================


// --------------------------------------------
//  1. FUNCTIONS (Basic)
// --------------------------------------------
// A function is a reusable block of code.
// We define it once and can call it many times.

function greetStudent() {
    console.log("Welcome to fullstack class");
    console.log("Today we are learning functions");
}

// Calling (executing) the function
greetStudent();


// --------------------------------------------
//  2. FUNCTIONS WITH PARAMETERS & RETURN
// --------------------------------------------
// Parameters let us pass values INTO a function.
// "return" sends a value BACK to where the function was called.

function add(num1, num2) {
    return num1 + num2;
}

// Calling the function with different arguments
let sum = add(2, 3);
let sum2 = add(4, 5);

// Logging the results
console.log(sum);   // Output: 5
console.log(sum2);  // Output: 9


// --------------------------------------------
//  3. ARRAYS
// --------------------------------------------
// An array stores multiple values in a single variable.
// Values are accessed by their index (starting from 0).

let players = ["Virat", "Rohit", "Dhoni", "Jadeja"];

console.log(players);          // All values: ["Virat", "Rohit", "Dhoni", "Jadeja"]
console.log(players[0]);       // Access a single value: "Virat"
console.log(players.length);   // Total number of values in the array: 4


// --------------------------------------------
//  4. OBJECTS
// --------------------------------------------
// An object stores data as key-value pairs.
// Keys are like labels, values are the data.

let student = {
    name: "John",
    age: 20,
    grade: "A",
    isPassed: true
};

// Update an existing value
student.age = 21;

// Add a new key-value pair to the object
student.city = "Hyderabad";

// Two ways to access values:
console.log(student["city"]);  // Bracket notation → "Hyderabad"
console.log(student);          // All values in the object
console.log(student.name);     // Dot notation → "John"
console.log(student.age);      // Dot notation → 21


// --------------------------------------------
//  5. TEMPLATE LITERALS
// --------------------------------------------
// Template literals use backticks (` `) instead of quotes.
// They allow embedding variables directly using ${variable}.

const name = "Alice";
const age = 26;

// Traditional way (string concatenation with +)
console.log("Hi, my name is " + name + " and I am " + age + " years old");

// Modern way (template literals — cleaner & easier to read)
console.log(`Hi, my name is ${name} and I am ${age} years old`);


// --------------------------------------------
//  6. ARROW FUNCTIONS
// --------------------------------------------
// Arrow functions are a shorter way to write functions.
// Syntax:  const functionName = (params) => { ... }

// Regular function
function addRegular(a, b) {
    return a + b;
}
console.log(addRegular(2, 3));  // Output: 5

// Arrow function (same thing, shorter syntax)
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(4, 5));    // Output: 9


// --------------------------------------------
//  7. SPREAD OPERATOR (...)
// --------------------------------------------
// The spread operator (...) "spreads" the elements of
// an array into individual items.
// Useful for combining (merging) arrays.

let arr1 = [1, 2, 3, 7, 8, 9];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3);  // Output: [1, 2, 3, 7, 8, 9, 4, 5, 6]


// --------------------------------------------
//  8. REST OPERATOR (...)
// --------------------------------------------
// The rest operator (...) collects multiple arguments
// into a single array. It looks the same as spread,
// but is used in function PARAMETERS.

const showNumbers = (...numbers) => {
    console.log(numbers);
};

showNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
