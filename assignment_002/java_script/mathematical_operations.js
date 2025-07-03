// Declare two numbers
let a = 15;
let b = 4;

console.log("Numbers: a =", a, ", b =", b);
console.log("-----------------------------------");

// Compute and print Sum
let sum = a + b;
console.log("Sum (a + b):", sum);

// Compute and print Difference
let difference = a - b;
console.log("Difference (a - b):", difference);

// Compute and print Product
let product = a * b;
console.log("Product (a * b):", product);

// Compute and print Quotient rounded to two decimal places
let quotient = a / b;
let quotientRounded = quotient.toFixed(2);
console.log("Quotient (a / b) rounded to 2 decimal places:", quotientRounded);

// Convert quotient to integer
let quotientInteger = Math.floor(quotient);
console.log("Quotient converted to integer:", quotientInteger);