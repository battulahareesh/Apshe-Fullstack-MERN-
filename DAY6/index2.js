// --- Callback Function Example ---
function greet(name, callback) {
    console.log(`Hi my name is ${name}`);
    callback();
}

greet("Rohit", () => {
    console.log("Welcome to the class");
});
