"use strict";

// Custom Error Classes

class DivideByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivideByZeroError";
    }
}

class NegativeRootError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeRootError";
    }
}

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

// Smart Calculator Function

function calculate(operation, a, b) {
    switch (operation) {

        case "add":
            return a + b;

        case "subtract":
            return a - b;

        case "divide":
            if (b === 0) {
                throw new DivideByZeroError("Cannot divide by zero.");
            }
            return a / b;

        case "power":
            return a ** b;

        case "root":
            if (a < 0) {
                throw new NegativeRootError("Cannot take root of negative number.");
            }
            return Math.sqrt(a);

        default:
            throw new InvalidOperationError(`Operation "${operation}" not recognized.`);
    }
}

// Given Data

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

// Run Calculations With try...catch

console.log(" SMART CALCULATOR SUMMARY \n");

operations.forEach(op => {
    try {
        const result = calculate(op, num1, num2);

        console.log(`
Operation     : ${op}
Number 1      : ${num1}
Number 2      : ${num2}
Result        : ${result}
Status        : SUCCESS
`);

    } catch (error) {

        console.log(`
Operation     : ${op}
Number 1      : ${num1}
Number 2      : ${num2}
Error Type    : ${error.name}
Message       : ${error.message}
Status        : FAILED
`);
    }
});
