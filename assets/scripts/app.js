const initialResult = 0;
let currentResult = initialResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result);
}

add(1, 2);
add(5, 5);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${initialResult} + 10) * 3 / 2 - 1`;

outputResult (currentResult, calculationDescription);