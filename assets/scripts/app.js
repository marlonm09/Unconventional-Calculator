const initialResult = 0;
let currentResult = initialResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);

let calculationDescription = `(${initialResult} + 10) * 3 / 2 - 1`;

outputResult (currentResult, calculationDescription);