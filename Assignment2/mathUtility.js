// Math Utility Dashboard

let x = 16.75;

// Calculations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10;  // 10–50

// Display formatted summary using template literals
summary = `
--Math Utility Dashboard--
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
x³ (Power): ${powerValue}
Random Number (10–50): ${randomValue}
`;

console.log(summary);