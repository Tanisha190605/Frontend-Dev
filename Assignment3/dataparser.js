// Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log(" Dynamic Data Parsing Report \n");

apiData.forEach((value, index) => {
    const original = value;

    // Convert to different types
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);

    console.log(`Entry ${index + 1}:`);
    console.log(`  Original:`, original);
    console.log(`  As Number:`, asNumber);
    console.log(`  As Boolean:`, asBoolean);
    console.log(`  As String:`, `"${asString}"`);

    // Validate numeric data
    if (
        typeof value === "string" &&
        (value.trim() === "" || isNaN(asNumber))
    ) {
        invalidNumbers.push(value);
        console.log(" Invalid Number\n");
    } else if (value === null || value === undefined) {
        invalidNumbers.push(value);
        console.log(" Invalid Number\n");
    } else {
        validNumbers.push(asNumber);
        console.log(" Valid Number\n");
    }
});

// Final Summary Report
console.log("");
console.log("FINAL SUMMARY REPORT");
console.log("");

console.log("\n Valid Numeric Data:", validNumbers);
console.log(" Invalid Numeric Data:", invalidNumbers);
console.log("\nTotal Valid:", validNumbers.length);
console.log("Total Invalid:", invalidNumbers.length);
