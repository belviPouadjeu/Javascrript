
console.log("Hello from external JavaScript file");

// /**
//  *  EXAMPLE 1 - Variable declaration
//  */

// var a;

// console.log(a); // Undefined

// // console.log(b); // Uncaught ReferenceError: b is not defined

// let c;
// console.log(c); // Undefined

// const d; // Uncaught SyntaxError: Missing initializer in const declaration 

// /**
//  * EXAMPLE 2 - "let"
//  */

// let myNumber = 10; // Statement

// console.log(myNumber); // Expression Statement // 10

// // declaration
// let myString; 

// // assignment
// myString = "Hello from String"; // Expression Statement

// console.log(myString);

// // re-assignment
// myString = "New value for String variable";

// console.log(myString);


// /**
//  * EXAMPLE 3 - "var"
//  */

// var myNumber = 10; // Statement

// console.log(myNumber); // Expression Statement // 10

// // declaration
// var myString; 

// // assignment
// myString = "Hello from String"; // Expression Statement

// console.log(myString);

// // re-assignment
// myString = "New value for String variable";

// console.log(myString);
/**
 * EXAMPLE 4 - "const
 *
 */

// const myBoolean = true;

// console.log(myBoolean);

// myBoolean = false; // Assignment to constant variable.

// const myBoolean = false; Uncaught SyntaxError: Identifier 'myBoolean' has already been declared

// /**
//  * CHALENGE 1
//  * 
//  * Declare variable "myObject" and 
//  *  assign value {}.
//  * Print this variable to the console.
//  * NOTE : variable "myObject" will NOT be reassigned in the future
//  */
// const myObject = {};

// console.log(myObject);

/**
 * CHALENGE 2
 * 
 * Declare "x" and assign value 10 to it
 * Declare "y" and assign value true
 * Declare "myObject" and assign object with two name-value pairs
 * Declare "anotherObject".
 * Later assign value to it - object with three name-value pair
 */

// let x = 10;
// const y = true;
// const myObject = {
//     a: x,
//     b: y
// };

// console.log(myObject);

// /**
//  * {a: 10, b: true, _proto_: Object }
//  */

// x = 20;
// let anotherObject;
// anotherObject = {
//     newA : x,
//     b: y,
//     c: myBoolean
// }

// console.log(anotherObject);

// /**
//  * {newA: 20, 
//  * b: true, 
//  * c: {a: 10, 
//  * b: true, 
//  * _proto_: Object }, 
//  * _proto_:Object }
//  */


/**
 * CHALLENGE 3
 * 
 * 1. Declare new variable with any name you want
 * 2. Assign value null to it. Determine type of the variable after this assignment
 * 3. Assign number 15 to the same variable. What is the type of the variable now?
 * 4. Reassign value false to the same variable. What is the final type of the variable?
 */

// Step 1: Declare a variable and assign null to it
let b = null;
console.log(b); // Output: null
console.log(typeof b); // Output: "object" (null is considered an object in JavaScript)
console.log(`Value: ${b}, Type: ${typeof b}`);

// Step 2: Assign the number 15 to the same variable
b = 15;
console.log(b); // Output: 15
console.log(typeof b); // Output: "number"
console.log(`Value: ${b}, Type: ${typeof b}`);

// Step 3: Reassign the value false to the same variable
b = false;
console.log(b); // Output: false
console.log(typeof b); // Output: "boolean"
console.log(`Value: ${b}, Type: ${typeof b}`);



