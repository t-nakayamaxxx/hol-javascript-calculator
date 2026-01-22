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
        throw new Error("Division by zero");
    }
    return a / b;
}

function square(a){
    return multiply(a, a);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = { add, subtract, multiply, divide, square };
} else {
    // ブラウザ環境でのエクスポート
    window.add = add;
    window.subtract = subtract;
    window.multiply = multiply;
    window.divide = divide;
    window.square = square;
}
