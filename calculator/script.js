function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.error("Denominator cannot be zero.");
        return null;
    }
    return a / b;
}
function calculate(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            console.error("Invalid operation");
    }
}

function handleCalculation() {
    const operation = document.getElementById('operation').value;
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    let result;
    result = calculate(operation, a, b);
        document.getElementById('resultValue').innerText = result;
    
}
function showForm
