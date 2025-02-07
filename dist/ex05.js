"use strict";
// Create a function called sumAllNumbers.
// This function should accept any number of numbers using a rest parameter.
// It should return the sum of all the numbers passed to it.
function sumAllNumbers(a, b, ...result) {
    let sum = a + b;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log(sumAllNumbers(1, 2, 3, 4, 5)); // Expected output: 15
