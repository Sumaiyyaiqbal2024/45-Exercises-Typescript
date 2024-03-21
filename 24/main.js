// Define variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = "10";
var twenty = "20";
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple not equal to apple?");
console.log(apple != "apple");
// Tests using lower cae functions
console.log("\nIs apple equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs apple not equal to apple after converting to lower case?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Test
// Equal to
console.log("\Is ten equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("\nIs ten not equal to twenty?");
console.log(ten != twenty);
// Greater than
console.log("\nIs ten greater than zero?");
console.log(10 > 0);
// Less than
console.log("\nIs twenty less than 10?");
console.log(20 < 10);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(10 >= 5);
// Less than or equal to
console.log("\nIs twenty less than or equal to ten?");
console.log(20 <= 10);
// Less than or equal to
console.log("\nIs twenty less than or equal to ten?");
console.log(20 <= 10);
// Tests using "and & "or" operators
// Using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != ten && 20 > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != ten && 20 > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is incuded in array
console.log("\n Is orange included in my fruits array?");
console.log(fruits.includes("orange"));
