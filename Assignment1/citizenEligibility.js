// Citizen Eligibility Validator

age = 19;         // input age
let isCitizen = true; // true / false

console.log("Age:", age);
console.log("Citizen:", isCitizen);

if (age >= 18) {  
    // Age condition satisfied
    if (isCitizen) {
        // Citizen + 18 or above
        if (age >= 18 && age >= 21) {
            console.log("Eligible for all services.");
        } 
        else if (age >= 18 && age < 21) {
            console.log("Eligible to vote only.");
        }
    } 
    else {
        console.log("Only age criteria met.");
    }
}
else {
    // Age < 18
    console.log("Not eligible yet.");
}