"use strict";

/*
Pyramid Pattern Generator — VS Code / Node / Browser ready

Features:
1. Generates a pyramid like:
   *
   * *
   * * *
   * * * *
2. Provides two versions (LET vs VAR) so you can observe scoping differences.
3. Includes a small async demo (setTimeout) to show variable re-use differences.
4. Outer loop limit is user-controlled:
   - In browser: will use prompt(...) if available.
   - In Node: you can pass a number as the first CLI argument (node file.js 7)
   - Defaults to 5 if no input provided.
5. "use strict" is enabled to catch undeclared variables.
6. Debug hints (debugger;) are included so you can step through in VS Code and watch variables.
*/

/* Helper: get limit from user */

function getLimitFromUser(defaultLimit = 5) {
  // Browser prompt if available
  if (typeof prompt === "function") {
    const raw = prompt(`Enter pyramid height (default ${defaultLimit}):`);
    const n = Number(raw);
    return Number.isInteger(n) && n > 0 ? n : defaultLimit;
  }

  // Node: check process.argv
  if (typeof process !== "undefined" && Array.isArray(process.argv)) {
    const arg = process.argv[2];
    const n = Number(arg);
    return Number.isInteger(n) && n > 0 ? n : defaultLimit;
  }

  // Fallback
  return defaultLimit;
}

/* 1) Pyramid using let */

function pyramidWithLet(limit = 5) {
  console.log("\n Pyramid using let ");
  for (let i = 1; i <= limit; i++) {
    // Place a debugger here in VS Code to inspect i and line
    // Add i to WATCH panel to observe its value per iteration
    // debugger;

    let lineParts = [];
    for (let j = 0; j < i; j++) {
      lineParts.push("*");
    }
    // Join with a single space so pattern matches requested format
    console.log(lineParts.join(" "));
  }
}

/* 2) Pyramid using var */

function pyramidWithVar(limit = 5) {
  console.log("\n Pyramid using var ");
  for (var i = 1; i <= limit; i++) {
    // debugger; // you may enable this when stepping through var-based loop
    var lineParts = [];
    for (var j = 0; j < i; j++) {
      lineParts.push("*");
    }
    console.log(lineParts.join(" "));
  }

  // Note: i and j are still accessible here (function/global scoped) because we used var.
  // In strict mode, they were declared, so no ReferenceError — but their scope is different.
  try {
    // show after-loop availability (for demonstration only)
    // In node/console this will print the final values of i and j
    console.log(`(After var-loop) i = ${i}, j = ${j}`);
  } catch (e) {
    // If environment doesn't allow, ignore
  }
}

/* 3) Debug step: async demo to show variable re-use
   - let preserves each iteration's binding
   - var will show the last value for all callbacks
*/

function asyncDemoLet(limit = 5) {
  console.log("\n Async Demo with let (correct per-iteration capture) ");
  for (let i = 1; i <= limit; i++) {
    // debugger; // watch 'i' in VS Code while loop runs
    setTimeout(() => {
      // This will print 1,2,3,...limit because `let` creates per-iteration binding.
      console.log(`let callback sees i = ${i}`);
    }, i * 50);
  }
}

function asyncDemoVar(limit = 5) {
  console.log("\n Async Demo with var (shows variable re-use issue) ");
  for (var i = 1; i <= limit; i++) {
    // debugger; // watch 'i' change; after loop, i === limit+1
    setTimeout(() => {
      // Because `var` is function-scoped, all callbacks will see the final value of i
      console.log(`var callback sees i = ${i}`);
    }, i * 50);
  }
  // After the loop completes, i === limit + 1; callbacks will print that same number.
}

/* 4) Run everything using user-provided limit */

(function main() {
  const limit = getLimitFromUser(5);

  console.log(`\nPyramid height (limit) = ${limit}`);

  // 1) Synchronous pyramids
  pyramidWithLet(limit);
  pyramidWithVar(limit);

  // 2) Async demos to observe closure/scoping differences
  asyncDemoLet(limit);

  // Add a small delay to separate output clearly
  setTimeout(() => {
    asyncDemoVar(limit);
  }, (limit + 1) * 60);
})();

/*
Notes for VS Code debugging:
- Open this file in VS Code and press F5 (Start Debugging).
- Put breakpoints (click gutter) or uncomment 'debugger;' lines to pause automatically.
- In the DEBUG side panel:
  * Add WATCH expressions: i, j, lineParts
  * Observe the CALL STACK and SCOPE panel while paused
- Pay attention:
  * In pyramidWithLet: i and j are block-scoped and will not be available outside their blocks.
  * In pyramidWithVar: i and j are function-scoped; after the loop they remain accessible and hold the final loop values.
  * In asyncDemoLet vs asyncDemoVar: let preserves per-iteration values; var results in all callbacks seeing the final value.
*/
