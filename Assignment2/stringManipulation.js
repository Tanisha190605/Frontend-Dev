// String Manipulation Report

let productName = " wireless headphones PRO ";

// Step 1: Trim spaces + convert to lowercase
let cleaned = productName.trim().toLowerCase();

// Step 2: Capitalize first letter of each word
let formatted = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

// Step 3: Replace "pro" → "Pro Edition"
let finalTitle = formatted.replace("Pro", "Pro Edition");

// Step 4: Display title & length
console.log("Cleaned Product Title:", finalTitle);
console.log("Title Length:", finalTitle.length);