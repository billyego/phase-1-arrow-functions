// index.js

// Function expression for divide
const divide = function(a, b) {
    return a / b;
};

// Arrow function for square
const square = (num) => {
    return num * num;
};

// Arrow function for add
const add = (a, b) => {
    return a + b;
};

// Exporting functions for testing
module.exports = {
    divide,
    square,
    add
};
