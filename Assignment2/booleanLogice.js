// Boolean Logic Access System

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = false;  // change values to test outcomes

console.log("Door Locked:", isDoorLocked);
console.log("Window Closed:", isWindowClosed);
console.log("Alarm On:", isAlarmOn);
console.log("Owner Inside:", isOwnerInside);

// Boolean logic check
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("System Status: Secure");
} else {
    console.log("System Status: Unsafe");
}

// Extra test demonstration
console.log("\n-- Testing Multiple Conditions --");

// Example variations:
let tests = [
    { isDoorLocked: true,  isWindowClosed: true,  isAlarmOn: true,  isOwnerInside: true },
    { isDoorLocked: false, isWindowClosed: true,  isAlarmOn: true,  isOwnerInside: true },
    { isDoorLocked: true,  isWindowClosed: false, isAlarmOn: true,  isOwnerInside: true },
    { isDoorLocked: true,  isWindowClosed: true,  isAlarmOn: false, isOwnerInside: true },
    { isDoorLocked: true,  isWindowClosed: true,  isAlarmOn: true,  isOwnerInside: false }
];

tests.forEach((t, i) => {
    let secure = t.isAlarmOn && t.isDoorLocked && t.isWindowClosed && t.isOwnerInside;
    console.log(`Case ${i + 1}:`, secure ? "Secure" : "Unsafe");
});