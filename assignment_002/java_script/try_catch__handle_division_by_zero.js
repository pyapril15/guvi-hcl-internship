// Declare two variables
let a = 10;
let b = 0;

console.log("Variables: a =", a, ", b =", b);
console.log("-----------------------------------");

// Use try...catch to handle division by zero
try {
    // Check if b is zero and throw an error if it is
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    
    // Perform division if b is not zero
    let result = a / b;
    console.log("Result of a / b:", result);
    
} catch (error) {
    // Catch and display the error message
    console.log("Error:", error.message);
}

console.log("-----------------------------------");
console.log("Program completed successfully!");

// Example with different values
console.log("\nTesting with different values:");

// Test case 1: Normal division
a = 15;
b = 3;
console.log(`\nTesting: a = ${a}, b = ${b}`);
try {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    let result = a / b;
    console.log("Result of a / b:", result);
} catch (error) {
    console.log("Error:", error.message);
}

// Test case 2: Division by zero
a = 20;
b = 0;
console.log(`\nTesting: a = ${a}, b = ${b}`);
try {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    let result = a / b;
    console.log("Result of a / b:", result);
} catch (error) {
    console.log("Error:", error.message);
}