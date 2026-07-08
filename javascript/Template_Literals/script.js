// Template Literals
// Introduced in ES6 (ECMAScript 2015)

let firstName = "Mano";
let lastname = "Haran";
let city = "Chennai";

// String concatenation
console.log(firstName + " " + lastname + " Lives in " + city);

// Template literal (recommended)
console.log(`${firstName} ${lastname} Lives in ${city}`);

let msg = `happy
new year`;

// Single and double quotes in strings
msg = "cat's name is toto";
console.log(msg);

msg = `cat's name is "toto"`;
console.log("msg is backtick:", msg);

// Exercise 4
let masg = `You have 5 items in your cart.
Your bill amount is $95`;

console.log("Exercise_msg: " + masg);