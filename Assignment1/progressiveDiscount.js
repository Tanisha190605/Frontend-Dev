// Progressive Discount System

total = 7500;  // input total purchase amount

let discountPercent = 0;

// Apply discount tiers
if (total >= 10000) {
    discountPercent = 25;
}
else if (total >= 5000) {
    discountPercent = 15;
}
else if (total >= 2000) {
    discountPercent = 5;
}
else {
    discountPercent = 0;
}

// Calculate discount amount & final price
let discountAmount = (total * discountPercent) / 100;
let finalPrice = total - discountAmount;

// Round using Math.round()
finalPrice = Math.round(finalPrice);
discountAmount = Math.round(discountAmount);

// Output
console.log(" Progressive Discount System ");
console.log("Original Total: ₹" + total);
console.log("Discount Applied: " + discountPercent + "%");
console.log("Final Price After Discount: ₹" + finalPrice);