// Employee Salary Projection

let currentSalary = 35000;     // monthly salary
let incrementRate = 8;         // annual increment in %

let salaryTable = [];

let salary = currentSalary;

for (let year = 1; year <= 5; year++) {

    // Apply increment using assignment operator
    let incrementAmount = (salary * incrementRate) / 100;
    salary += incrementAmount;    // salary = salary + incrementAmount

    // Round salary
    let roundedSalary = Math.round(salary);

    // Store in table
    salaryTable.push({
        Year: "Year " + year,
        Salary: "₹" + roundedSalary
    });
}

// Print formatted table
console.log(" 5-Year Salary Projection ");
console.table(salaryTable);