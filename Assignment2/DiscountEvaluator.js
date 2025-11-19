// Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let updatedCart = [];

// Step 1: Apply item-level category discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;    // 10%
    } else if (product.category === "fashion") {
        discount = 5;     // 5%
    }

    let discountedPrice = product.price - (product.price * discount / 100);

    updatedCart.push({
        item: product.item,
        category: product.category,
        originalPrice: product.price,
        discountApplied: discount + "%",
        finalPrice: discountedPrice
    });
}

// Step 2: Calculate total cart value using reduce()
let totalAfterItemDiscounts = updatedCart.reduce((sum, p) => sum + p.finalPrice, 0);

// Step 3: Extra 5% discount if total > 50000
let extraDiscount = 0;
if (totalAfterItemDiscounts > 50000) {
    extraDiscount = 5;
}

let finalPayable = totalAfterItemDiscounts - (totalAfterItemDiscounts * extraDiscount / 100);

// Output Summary
console.log(" Dynamic Discount Evaluator ");
console.table(updatedCart);

console.log("Total After Item-Level Discounts:", Math.round(totalAfterItemDiscounts));
console.log("Extra Discount Applied:", extraDiscount + "%");
console.log("Final Amount Payable:", Math.round(finalPayable));