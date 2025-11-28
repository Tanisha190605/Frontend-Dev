function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

let nums = [1, 2, 3, 4];

console.log("Double:", applyOperation(nums, double));
console.log("Square:", applyOperation(nums, square));
