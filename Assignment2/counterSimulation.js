// Event-Based Counter Simulation

let count = 0;   // global counter

// Increment function
function increment() {
    count++;
    console.log("Increment Click → Count:", count);

    // Nested function to show function scope
    function logNested() {
        console.log("Nested Log → Current Count:", count);
    }
    logNested();
}

// Decrement function
function decrement() {
    count--;
    console.log("Decrement Click → Count:", count);

    // Nested function demonstrating scope
    function logNested() {
        console.log("Nested Log → Current Count:", count);
    }
    logNested();
}

// Simulating click events
increment();   // click 1
increment();   // click 2
decrement();   // click 3
increment();   // click 4