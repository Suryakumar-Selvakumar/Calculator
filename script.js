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
  return a / b;
}

function mod(a, b) {
  return Math.mod(a, b);
}

function changeSign(num) {
  return (num *= -1);
}

function addDecimalPoint(num) {
  return (num = num + ".");
}

function power(a, b) {
  return a ** b;
}

let numberFirst, numberSecond, operator;

function operate(op, num1, num2) {
  let result;
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    case "%":
      result = mod(num1, num2);
      break;
    case "**":
      result = power(num1, num2);
  }
  return result;
}
