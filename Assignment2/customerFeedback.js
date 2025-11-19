// Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let words = feedback.split(" ");
let wordCount = words.length;

// Check for negative keywords
let hasNegative =
  feedback.toLowerCase().includes("bad") ||
  feedback.toLowerCase().includes("poor");

// Decision
if (!hasNegative) {
  console.log("Feedback Status: Positive Feedback");
} else {
  console.log("Feedback Status: Needs Improvement");
}

// Output Summary
console.log(" Feedback Analysis Report ");
console.log("Feedback:", feedback);
console.log("Word Count:", wordCount);
console.log("Contains Negative Words:", hasNegative);