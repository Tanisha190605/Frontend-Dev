// Random Math Quiz Generator

// Generate two random numbers (1–20)
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

// Random operator from the list
let operators = ['+', '-', '*', '/'];
let randomOp = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

// Calculate using switch
switch (randomOp) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2); // rounded division
        break;
    default:
        correctAnswer = null;
}

// Display question + answer
console.log(" Random Math Quiz ");
console.log(`Question: ${num1} ${randomOp} ${num2} = ?`);
console.log("Correct Answer:", correctAnswer);