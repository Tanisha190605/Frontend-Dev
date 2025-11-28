console.log("Start");

// Macrotask → setTimeout
setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

// Microtask → Promise.then
Promise.resolve().then(() => {
    console.log("Microtask: Promise.then");
});

// Synchronous log
console.log("Synchronous Log");

console.log("End");

/*EVENT LOOP FLOW
 **Synchronous code runs first:**
   - "Start"
   - "Synchronous Log"
   - "End"
 **Then the Event Loop checks the Microtask Queue (higher priority):**
   - Promise.then() callback runs
   - Logs: "Microtask: Promise.then"
 **After ALL microtasks finish, Event Loop runs the next Macrotask:**
   - setTimeout callback runs
   - Logs: "Macrotask: setTimeout"
 WHY MICROTASKS > MACROTASKS?
 Microtasks (Promise.then, queueMicrotask, MutationObserver)
   have **priority** in JavaScript.
 After finishing synchronous code,
   the JS engine **must empty the entire microtask queue**
   BEFORE moving to macrotasks.
 Macrotasks (setTimeout, setInterval, I/O) run only after
   microtasks are fully completed.

So even if setTimeout is 0ms,
its callback waits until the microtasks finish.
*/
