# JavaScript Assignments Collection

This repository contains a collection of JavaScript programming assignments covering fundamental concepts including mathematical operations, error handling, object-oriented programming, and DOM manipulation.

## Table of Contents

1. [Assignment 1: Mathematical Operations](#assignment-1-mathematical-operations)
2. [Assignment 2: Error Handling with Try-Catch](#assignment-2-error-handling-with-try-catch)
3. [Assignment 3: Constructor Functions and instanceof](#assignment-3-constructor-functions-and-instanceof)
4. [Assignment 4: Email Validation Form](#assignment-4-email-validation-form)

---

## Assignment 1: Mathematical Operations

### Objective

Create a JavaScript program that performs basic mathematical operations on two numbers.

### Requirements

- Declare two variables `a` and `b`
- Compute and display:
  - Sum (a + b)
  - Difference (a - b)
  - Product (a * b)
  - Quotient (a / b) rounded to two decimal places
  - Convert the quotient to an integer

### Key Concepts Covered

- Variable declaration
- Basic arithmetic operations
- Number formatting with `toFixed()`
- Type conversion with `Math.floor()`

### Sample Output

```
Numbers: a = 15 , b = 4
-----------------------------------
Sum (a + b): 19
Difference (a - b): 11
Product (a * b): 60
Quotient (a / b) rounded to 2 decimal places: 3.75
Quotient converted to integer: 3
```

---

## Assignment 2: Error Handling with Try-Catch

### Objective

Implement proper error handling for division by zero using try-catch blocks.

### Requirements

- Declare two variables `a` and `b`
- Use try-catch to handle division by zero
- If `b` is 0, catch the error and display "Error: Cannot divide by zero"
- Otherwise, display the result of a / b

### Key Concepts Covered

- Exception handling with try-catch
- Throwing custom errors
- Error message handling
- Conditional logic

### Sample Output

```
Variables: a = 10 , b = 0
-----------------------------------
Error: Cannot divide by zero
-----------------------------------
Program completed successfully!
```

---

## Assignment 3: Constructor Functions and instanceof

### Objective

Demonstrate object-oriented programming concepts using constructor functions and instanceof operator.

### Requirements

- Create a constructor function `Vehicle` with a property `type`
- Create an object `car` using `new Vehicle("Car")`
- Use `instanceof` to check if `car` is an instance of `Vehicle` and `Object`
- Print the results

### Key Concepts Covered

- Constructor functions
- Object instantiation with `new` keyword
- Prototype chain understanding
- `instanceof` operator usage

### Sample Output

```
Constructor function Vehicle created
-----------------------------------
Object car created using new Vehicle('Car')
Car object: Vehicle { type: 'Car' }
Car type: Car
-----------------------------------
instanceof checks:
car instanceof Vehicle: true
car instanceof Object: true
```

---

## Assignment 4: Email Validation Form

### Objective

Create a web form with client-side email validation using JavaScript and DOM manipulation.

### Requirements

- Create an input field for email and a submit button
- Validate that the input contains `@` and `.com`
- If invalid, display error message: "Invalid email!"
- Provide user feedback for both valid and invalid inputs

### Key Concepts Covered

- DOM manipulation
- Event handling
- Form validation
- CSS styling
- User interface design

### Features

- Real-time validation feedback
- Styled error and success messages
- Form submission prevention
- Input field focus management

### Validation Logic

- **Valid**: Must contain both `@` and `.com`
- **Invalid**: Missing either `@` or `.com`

---

## How to Run the Assignments

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE
- Basic understanding of HTML, CSS, and JavaScript

### Running JavaScript Files (Assignments 1-3)

1. Open browser developer tools (F12)
2. Navigate to Console tab
3. Copy and paste the JavaScript code
4. Press Enter to execute

### Running HTML File (Assignment 4)

1. Save the HTML code as `email-validation.html`
2. Open the file in a web browser
3. Test the form with various email inputs

## Learning Outcomes

After completing these assignments, you will have learned:

- **Basic JavaScript Syntax**: Variable declaration, operators, and functions
- **Mathematical Operations**: Arithmetic calculations and number formatting
- **Error Handling**: Using try-catch blocks for robust code
- **Object-Oriented Programming**: Constructor functions and prototype chain
- **DOM Manipulation**: Interacting with HTML elements using JavaScript
- **Form Validation**: Client-side input validation techniques
- **Event Handling**: Responding to user interactions
- **CSS Integration**: Styling web forms and providing user feedback

## Best Practices Demonstrated

1. **Code Organization**: Clear structure and commenting
2. **Error Handling**: Proper exception management
3. **User Experience**: Intuitive interface design
4. **Validation**: Input sanitization and validation
5. **Responsive Design**: Mobile-friendly layouts
6. **Console Logging**: Debugging and monitoring

## Extension Ideas

### Assignment 1 Extensions

- Add more mathematical operations (power, square root, etc.)
- Implement scientific calculator functionality
- Add input validation for numeric values

### Assignment 2 Extensions

- Handle multiple types of errors
- Implement custom error classes
- Add error logging functionality

### Assignment 3 Extensions

- Create inheritance with child constructors
- Add methods to the Vehicle constructor
- Implement multiple vehicle types

### Assignment 4 Extensions

- Add more email validation rules
- Implement server-side validation
- Add multiple form fields with validation
- Create a complete registration form

## Troubleshooting

### Common Issues

1. **Syntax Errors**: Check for missing semicolons, brackets, or quotes
2. **Reference Errors**: Ensure variables are declared before use
3. **Type Errors**: Verify correct data types for operations
4. **DOM Errors**: Ensure HTML elements exist before JavaScript access

### Debugging Tips

1. Use `console.log()` for variable inspection
2. Check browser developer tools for error messages
3. Validate HTML and CSS syntax
4. Test with different input values
5. Use breakpoints for step-through debugging

---

## Conclusion

These assignments provide a comprehensive introduction to JavaScript programming, covering essential concepts from basic operations to advanced DOM manipulation. Each assignment builds upon previous knowledge while introducing new concepts and best practices.

The progression from simple mathematical operations to interactive web forms demonstrates the versatility and power of JavaScript in both computational and web development contexts.
