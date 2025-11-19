// Academic Performance Evaluator

// Input marks of 5 subjects (Array)
let marks = [76, 89, 92, 58, 81];  // you can change values

// Validation: Any subject < 35 → Detained 
let isFail = false;
for (let i = 0; i < marks.length; i++) {
  if (marks[i] < 35) {
    isFail = true;
    break;
  }
}

// Calculate total
total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}

// Calculate average & percentage
average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Determine result using logical operators
let result = "";

if (isFail || percentage < 50) {
  result = "Detained";
} 
else if (percentage >= 85) {
  result = "Promoted with Distinction";
} 
else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
}

// Output
console.log(" Academic Performance Evaluator ");
console.log("Marks:", marks);
console.log("Total:", total);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Result:", result);