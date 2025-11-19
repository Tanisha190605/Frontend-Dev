// Multi-Type Data Summary

// Declare variables of different data types
userName = "Mahi";              // string
let age = 20;                       // number
let isActive = true;                // boolean
let skills = ["HTML", "CSS", "JS"]; // array
let profile = { city: "Indore", job: "Developer" }; // object
let dataNull = null;                // null
let dataUndefined;                  // undefined

// Create a report array using formatted objects
let report = [
    {
        label: "User Name",
        value: userName,
        type: typeof userName
    },
    {
        label: "Age",
        value: age,
        type: typeof age
    },
    {
        label: "Is Active",
        value: isActive,
        type: typeof isActive
    },
    {
        label: "Skills",
        value: skills,
        type: Array.isArray(skills) ? "array" : typeof skills
    },
    {
        label: "Profile",
        value: profile,
        type: typeof profile
    },
    {
        label: "Null Data",
        value: dataNull,
        type: typeof dataNull  // JS returns "object" for null
    },
    {
        label: "Undefined Data",
        value: dataUndefined,
        type: typeof dataUndefined
    }
];

// Print formatted report using console.table()
console.table(report);