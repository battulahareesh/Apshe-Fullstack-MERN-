// 1. Output Methods
console.log("Hello, World!");
alert("Welcome to JavaScript!");
document.write("This is a simple JavaScript code.");

// 2. Variables & typeof
let promise = false;
console.log(typeof promise); // "boolean"

// 3. Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (remainder)

// 4. Assignment Operator (+=)
let score = 10;
score += 5; // score = score + 5
console.log(score); // 15

// 5. Comparison Operators (== vs ===)
let x = 10;    // number
let y = "10";  // string
console.log(x == y);  // true (value only)
console.log(x === y); // false (value + type)

// 6. If...Else
let age = 20;
if (age > 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote");
}

// 7. Switch Case
let day = 5;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

// 8. For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i); // 1 to 10
}

// 9. While Loop
let count = 5;
while (count >= 0) {
    console.log(count); // 5 to 0
    count--;
}
