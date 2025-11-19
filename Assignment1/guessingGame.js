// Smart Guessing Game (Number Range)

// Generate secret number between 1–50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// User guess (test value — you can change)
let userGuess = 22;

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Guess checking
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} 
else {
    // Not equal, now check if close
    if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
        console.log("Very close!");
    } 
    else {
        // Too high or too low
        if (userGuess > secretNumber) {
            console.log("Too high!");
        } else {
            console.log("Too low!");
        }
    }
}