// Array Performance Analyzer

// Step 1: Create an array of 8 random scores (30–100)
let scores = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 71) + 30
);

// Step 2: Highest and lowest score
let highest = Math.max(...scores);
let lowest = Math.min(...scores);

// Step 3: Average score using reduce()
let total = scores.reduce((sum, val) => sum + val, 0);
let average = (total / scores.length).toFixed(2);

// Step 4: Number of students who passed (≥ 50)
let passedCount = scores.filter(score => score >= 50).length;

// Step 5: Full formatted summary
let summary = `
-- Array Performance Analyzer --
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average}
Students Passed (≥ 50): ${passedCount} out of ${scores.length}
`;

console.log(summary);