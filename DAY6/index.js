// --- Array Destructuring ---
const colors = ["red", "blue", "green", "yellow"];
const [first, colorSecond] = colors;

console.log(first);       // red
console.log(colorSecond);  // blue


// --- Object Destructuring ---
const employee = {
    id: 101,
    name: "Amit",
    department: "IT",
};

const { name, department } = employee;

console.log(name);        // Amit
console.log(department);   // IT


// --- Selecting Elements from HTML ---
const heading = document.getElementById("title");
const para = document.querySelector(".info");

// Change text inside an element
heading.textContent = "Welcome to JS";

// Change the style of an element
heading.style.color = "blue";

// Change innerHTML (can include HTML tags)
para.innerHTML = "<b>Now in bold!</b>";


// --- Creating and Adding a New Element ---
const list = document.getElementById("tasklist");

const newItem = document.createElement("li");
newItem.textContent = "Buy groceries";
list.appendChild(newItem);


// --- Removing an Element ---
const notice = document.querySelector(".notice");
notice.remove();


// --- Button Click Event ---
const box = document.getElementById("nameBox");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    const typedName = box.value;
    output.textContent = `Hello my name is ${typedName}`;
});


// --- Form Submit Event ---
const form = document.getElementById("LoginForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // stops the page from reloading

    const username = document.getElementById("user").value;

    if (username === "") {
        alert("please enter your name");
    } else {
        msg.textContent = `Welcome, ${username}`;
    }
});
