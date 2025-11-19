// Odd–Even Number Analyzer

const numbers = [];
const results = [];

// Step 1: Push numbers 1–30 using a loop
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Step 2: Analyze each number
for (let num of numbers) {
  
  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } 
  else if (num % 2 === 0) {
    results.push("Even");
  } 
  else {
    results.push("Odd");
  }
}

// Step 3: Display results
console.log("Numbers:", numbers);
console.log("Analysis Results:", results);