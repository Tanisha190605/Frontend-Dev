// Personalized Login Greeting Program

// Declare variables
let userName = "Mahi";  
let currentHour = new Date().getHours();

// Check time and display greeting
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = `Good Afternoon ${userName}!`;
} else {
    greetingMessage = `Good Evening ${userName}!`;
}

console.log(greetingMessage);