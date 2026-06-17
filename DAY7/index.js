// ========== 1. setTimeout (Asynchronous behavior) ==========
// JavaScript doesn't wait for setTimeout to finish — it moves to the next line

console.log("1. Order placed");

setTimeout(() => {
    console.log("2. Food delivered");
}, 2000); // runs after 2 seconds (2000 milliseconds)

console.log("3. Browsing other apps");


// ========== 2. Promise ==========
// A Promise is like a guarantee: it will either succeed (resolve) or fail (reject)

const orderFood = new Promise(function (resolve, reject) {
    const inStock = false; // change to true to see the success message
    if (inStock) {
        resolve("Food is on the way to home");
    } else {
        reject("Sorry, we are out of stock");
    }
});

// .then() runs if the promise succeeds, .catch() runs if it fails
orderFood
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// ========== 3. Async / Await ==========
// async/await is a cleaner way to work with Promises

function getOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Food is ready");
        }, 1000);
    });
}

async function showOrder() {
    console.log("Waiting for order...");
    const result = await getOrder(); // waits until the promise resolves
    console.log(result);
}

showOrder();


// ========== 4. Async / Await with try-catch (error handling) ==========
// try-catch lets you handle errors cleanly inside async functions

function fetchBalance() {
    return new Promise((resolve, reject) => {
        const serverWorking = true; // change to false to see the error
        if (serverWorking) {
            resolve("Balance: 5000");
        } else {
            reject("Server down, please try later");
        }
    });
}

async function checkBalance() {
    try {
        const balance = await fetchBalance();
        console.log(balance);
    } catch (error) {
        console.log("Error:", error);
    }
}

checkBalance();


// ========== 5. Scope (where variables can be accessed) ==========
// Variables declared inside a function can't be used outside it

let city = "Mumbai"; // global scope — accessible everywhere

function showCity() {
    let pin = "150001"; // function scope — only accessible inside this function

    console.log(city); // works — city is global
    console.log(pin);  // works — pin is inside this function
}

showCity();
console.log(city); // works — city is global
// console.log(pin); // ERROR — pin is not accessible outside showCity()


// ========== 6. Scope Chain ==========
// Inner functions can access variables from outer functions and global scope

let country = "India"; // global scope

function outer() {
    let state = "Maharashtra"; // outer function scope

    function inner() {
        let innerCity = "Mumbai"; // inner function scope
        console.log(innerCity); // own variable — works
        console.log(state);     // from outer function — works
        console.log(country);   // from global — works
    }
    inner();
}

outer();


// ========== 7. Block Scope ==========
// const and let are only accessible inside the { } block where they are created

if (true) {
    const blockCity = "Delhi"; // only exists inside this if-block
    console.log(blockCity);    // works here
}

// console.log(blockCity); // ERROR — blockCity doesn't exist outside the block


// ========== 8. Closures ==========
// A closure is a function that remembers variables from its parent function,
// even after the parent function has finished running

function makeCounter() {
    let count = 0; // this variable is "remembered" by the returned function

    return function () {
        count = count + 1;
        return count;
    };
}

const clicks = makeCounter();
console.log(clicks()); // 1
console.log(clicks()); // 2
console.log(clicks()); // 3
console.log(clicks()); // 4
console.log(clicks()); // 5
console.log(clicks()); // 6
