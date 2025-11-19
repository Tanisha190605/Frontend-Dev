// Global variable
let bonus = 5000;

function calculateSalary() {
    // Local variables
    let salary = 40000;
    let isPermanent = true; // change this to false to see the effect

    console.log("Inside function → Is Permanent:", isPermanent);

    if (isPermanent) {
        salary += bonus;   // bonus is taken from global scope
    }

    console.log("Total Salary (Inside Function): ₹" + salary);
}

// Call the function
calculateSalary();

// Demonstrating scope effect
console.log("Global Bonus (Outside Function): ₹" + bonus);