let display = document.querySelector('.display');
let previousOperator = null;
let previousOperand = null;

function appendNumber(num) {
    display.textContent += num;
}

function appendOperator(operator) {
    if (previousOperator !== null) {
        calculate();
    }
    previousOperator = operator;
    previousOperand = parseFloat(display.textContent);
    display.textContent += operator;
}

function calculate() {
    let currentOperand = parseFloat(display.textContent.substring(display.textContent.lastIndexOf(previousOperator) + 1));
    let result;

    switch (previousOperator) {
        case '+':
            result = previousOperand + currentOperand;
            break;
        case '-':
            result = previousOperand - currentOperand;
            break;
        case '*':
            result = previousOperand * currentOperand;
            break;
        case '/':
            if (currentOperand === 0) {
                result = "Error: Division by zero";
            } else {
                result = previousOperand / currentOperand;
            }
            break;
    }
    display.textContent = result;
    previousOperator = null;
    previousOperand = null;
}

function clearDisplay() {
    display.textContent = '';
    previousOperator = null;
    previousOperand = null;
}