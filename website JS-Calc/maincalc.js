const operator = prompt ('Enter operator to perform the calculation (either +,-,* or /):');

const number1=parseFloat(prompt('Enter the first number: ')); 
const number2=parseFloat(prompt ('Enter the second number: ')); 

if (operator === '+') {
    result = number1 + number2; 
} else if (operator === '*') {
    result = number1 * number2;
} else if (operator === '/') {
    result = number1 / number2; 
} else if (operator === '-') {
    result = number1 - number2;
}
console.log(result)


