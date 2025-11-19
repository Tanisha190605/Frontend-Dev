"use strict";

/*
JSON Audit — VS Code / Node / Browser ready

Tasks implemented:
1. Parse each raw JSON entry with try..catch.
2. Detect invalid JSON and missing keys (user, age).
3. Push valid entries to `cleanData`; log errors with line numbers.
4. Include debugger statements so you can step through and observe control flow on errors.
5. Bonus: convert age to Number and build `minors` list (age < 18).
*/

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

const cleanData = [];   // valid parsed entries with age converted to Number
const invalidLogs = []; // { line, raw, reason }
const minors = [];      // valid entries filtered where age < 18

console.log(" JSON Audit Starting \n");

rawData.forEach((entry, index) => {
  const lineNumber = index + 1;

  // Debugger: put a breakpoint here to step into each iteration
  // In VS Code: run the debugger (F5) and step through iterations
  // debugger;

  try {
    let parsed;

    // Try parsing JSON — this may throw
    parsed = JSON.parse(entry);

    // Validate presence of required keys
    if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
      const missing = [];
      if (!parsed.hasOwnProperty("user")) missing.push("user");
      if (!parsed.hasOwnProperty("age")) missing.push("age");

      const reason = `Missing key(s): ${missing.join(", ")}`;
      invalidLogs.push({ line: lineNumber, raw: entry, reason });
      console.warn(`Line ${lineNumber}  ${reason} — ${entry}`);
      // Optional: trigger debugger to inspect the parsed object with missing keys
      // debugger;
      return; // continue to next entry
    }

    // Convert age to Number (bonus). This could produce NaN.
    const ageNum = Number(parsed.age);

    if (Number.isNaN(ageNum)) {
      const reason = `Invalid age value (not a number): ${parsed.age}`;
      invalidLogs.push({ line: lineNumber, raw: entry, reason });
      console.warn(`Line ${lineNumber} ${reason} — ${entry}`);
      // debugger; // step here to inspect why conversion failed
      return;
    }

    // All checks passed — normalize and store
    const cleaned = {
      user: String(parsed.user),
      age: ageNum,
      // preserve other keys if needed
      ...Object.keys(parsed)
        .filter(k => k !== "user" && k !== "age")
        .reduce((acc, k) => (acc[k] = parsed[k], acc), {})
    };

    cleanData.push(cleaned);

    // Bonus: collect minors
    if (cleaned.age < 18) {
      minors.push(cleaned);
    }

    console.log(`Line ${lineNumber}  Parsed & cleaned:`, cleaned);

  } catch (err) {
    // JSON.parse error or unexpected runtime error
    const reason = `Invalid JSON: ${err.message}`;
    invalidLogs.push({ line: lineNumber, raw: entry, reason });
    console.error(`Line ${lineNumber}  ${reason} — ${entry}`);
    // Debugger: uncomment to pause on parse errors when debugging in VS Code
    // debugger;
  }
});

// Final summary report
console.log("\n  AUDIT SUMMARY ");
console.log(`Total entries processed : ${rawData.length}`);
console.log(`Valid entries (clean)   : ${cleanData.length}`);
console.log(`Invalid entries         : ${invalidLogs.length}`);
console.log(`Minors (age < 18)      : ${minors.length}`);

if (cleanData.length) {
  console.log("\n Clean Data ");
  console.table(cleanData);
}

if (minors.length) {
  console.log("\n Minors ");
  console.table(minors);
}

if (invalidLogs.length) {
  console.log("\n Invalid Logs (with line numbers) ");
  invalidLogs.forEach(log => {
    console.log(`Line ${log.line} : ${log.reason} -> ${log.raw}`);
  });
}

console.log("\n JSON Audit Complete ");
