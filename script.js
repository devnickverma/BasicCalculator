// script.js
function appendToDisplay(value) {
    let display = document.getElementById('display');
    let currentValue = display.value;
    
    // If the value is an operator
    if (isOperator(value)) {
        // If the last character in the display is also an operator, replace it
        if (currentValue.length > 0 && isOperator(currentValue.slice(-1))) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value += value;
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}
