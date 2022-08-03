const initialResult = 0;
let currentResult = initialResult;

function add(num1, num2) {
    currentResult = currentResult + userInput.value;
    outputResult (currentResult, '');
}

addBtn.addEventListener('click', add);

