"use strict";

/*
Nested Hoisting + Closures Demo

Original Code:

function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();


TASK 1 — Predict Output

• outer(): console.log(count) → UNDEFINED
  Reason: `var count` is hoisted (declared at top) but not assigned yet.

• inner(): console.log(count) → UNDEFINED
  Reason: inner has ITS OWN `var count`, also hoisted, shadowing outer's count.

So predicted output:
undefined
undefined


TASK 2 — Hoisting Memory Contexts

During execution:

OUTER EXECUTION CONTEXT:
• Memory before running:
    count → undefined
    inner → function

INNER EXECUTION CONTEXT:
• Memory:
    count → undefined

Each `var` gets its own environment record.
No closure is used because inner declares its own `count`,
so it never reaches outer’s count.


TASK 3 — Convert inner() to arrow function

Arrow functions DO NOT have their own `this`, `arguments`,
but still have a lexical scope.

However: var inside the arrow is STILL FUNCTION-SCOPED — but here
the arrow is inside outer(), so it still gets its own hoisted `var count`.

Meaning: Output stays the SAME: undefined, undefined.


TASK 4 — Add Debug Session Notes

• debugger; stops inside outer() and inner()
• Observe:
   - Call Stack: main → outer → inner
   - Scopes panel: different "count" bindings
*/

// FINAL IMPLEMENTATION CODE WITH DEBUGGER

function outer() {
    debugger;  // Pause here to inspect hoisting in VS Code

    console.log(count);  // undefined (from outer's var hoisting)
    var count = 5;

    // Convert inner() to an arrow function
    const inner = () => {
        debugger; // Observe new execution context

        console.log(count);  // undefined (inner's hoisted var shadows outer)
        var count = 10;
    };

    inner();
}

outer();

// CLEAN VERSION to illustrate correct behavior

function fixedOuter() {
    debugger;

    let count = 5;
    console.log("Outer count =", count);

    const inner = () => {
        // No var hoisting here because we removed var
        console.log("Inner uses outer count =", count); 
    };

    inner();
}

console.log("\n Correct ES6 Version (Closure Works) ");
fixedOuter();
