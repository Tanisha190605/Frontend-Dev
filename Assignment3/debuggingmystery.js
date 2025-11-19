"use strict";

/*
Task 1: Why this throws an error?

In strict mode, JavaScript does NOT allow undeclared variables.
The line:
    greeting = "Welcome";
tries to create an implicit global variable.
Strict mode blocks this and throws:
    ReferenceError: greeting is not defined
*/

/*
Task 2: Fix + Explain Scope Change

Fix: Declare the variable using let/const.
    let greeting = "Welcome";
This keeps the variable inside the function (local scope) and
strict mode accepts it. Scope is now controlled and safe.
*/

/*
Task 3: Debugger (Watch Variable)

Using "debugger;" stops execution in VS Code.
Then:
1. Open Debugger (RUN → Start Debugging or F5)
2. VS Code pauses at `debugger;`
3. In the WATCH panel → add: greeting
4. Observe the call stack and variable behavior
*/

function showMessage() {
    debugger;   // Pause execution to inspect variables in VS Code

    let greeting = "Welcome"; // FIX: Proper variable declaration

    console.log(greeting);
}

showMessage();
