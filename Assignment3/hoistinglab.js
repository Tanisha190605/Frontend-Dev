/*
PART 1 — HOISTING EXPLANATION (MEMORY STATE)

During memory creation phase:

1) var score;
   - Hoisted as: score = undefined
   - Stored in Global Memory (GEC)

2) function announce() { … }
   - Fully hoisted with complete function body
   - Stored in Global Memory

3) let status;
   - Hoisted BUT kept in the Temporal Dead Zone (TDZ)
   - Not accessible until execution reaches the declaration

4) function startGame() { … }
   - Fully hoisted (same as announce())

So before execution:

var score → undefined
function announce → function
let status → TDZ (not initialized)
function startGame → function


Runtime encounters:
console.log(score);      // prints undefined
announce();              // works (hoisted)
var score = 50;          // score updated
let status = "ready";    // status leaves TDZ, initialized
startGame();             // ERROR → status used before declaration

*/

// PART 2 — FIXED VERSION (WORKS PROPERLY)

console.log(" FIXED VERSION ");

console.log(score);  // undefined (var is hoisted)
announce();          // works

var score = 50;

let status = "ready"; // must be declared BEFORE startGame() is called

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

startGame(); // now works


// PART 3 — ARROW FUNCTION VERSION (NO HOISTING)

console.log(" ARROW FUNCTION VERSION ");

/*
Arrow functions are NOT hoisted like function declarations.
They behave like variables:
- Hoisted but set to TDZ if declared with let/const.
*/

var score2 = 100;

// announce2();  ERROR — Cannot access before initialization
// startGame2(); ERROR — Cannot access before initialization

const announce2 = () => {
    console.log("Arrow: Game started");
};

let status2 = "ready";

const startGame2 = () => {
    console.log(status2);
};

announce2();
startGame2();
