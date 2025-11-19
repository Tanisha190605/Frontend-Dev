// Monthly Expense Tracker

// 5 categories: food, travel, rent, bills, leisure
let expenses = [8000, 2000, 12000, 3000, 1500];  

// Calculate total expenses
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

// Calculate average expense
let average = total / expenses.length;

// Add 10% tax using arithmetic + assignment operator
let tax = total * 0.10;
let finalAmount = total;
finalAmount += tax;  // assignment operator

// Round using toFixed(2)
total = total.toFixed(2);
average = average.toFixed(2);
finalAmount = finalAmount.toFixed(2);

// Display results
console.log(" Monthly Expense Tracker ");
console.log("Total Expenses: ₹" + total);
console.log("Average Expense: ₹" + average);
console.log("Final Amount After 10% Tax: ₹" + finalAmount);