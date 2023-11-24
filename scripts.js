function getArguments() {
    const prompt = require('prompt-sync')();
    const num1 = parseFloat(prompt('Enter the first number: '));
    const num2 = parseFloat(prompt('Enter the second number: '));

    return { num1, num2 };
}
function calcMult() {
    const { num1, num2 } = getArguments();
    const mult = num1 * num2;
    console.log(`Product: ${mult}`);
}