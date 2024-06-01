//Variables

let numberFirst, numberSecond, operator, result;
const numArray = [];
const container = document.querySelector(".container");
const numbersDisplay = document.querySelector(".numbers-display");
const paraDisplay = document.querySelector("#display");
const calcButtons = document.querySelector(".calculator-buttons");
const btnAllClear = document.querySelector("#clear");
const btnChangeSign = document.querySelector("#change-sign");
const btnMod = document.querySelector("#mod");
const btnEqual = document.querySelector("#equal");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnDivide = document.querySelector("#divide");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnMultiply = document.querySelector("#multiply");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnAdd = document.querySelector("#add");
const btnZero = document.querySelector("#zero");
const btnDot = document.querySelector("#dot");
const btnPower = document.querySelector("#power");
const btnSubtract = document.querySelector("#subtract");

//Math Functions

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

function power(a, b) {
  return a ** b;
}

function allClear() {
  numberFirst = 0;
  numberSecond = 0;
  result = 0;
  operator = "";
}

//operate function

function operate(op, num1, num2) {
  switch (op) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return mod(num1, num2);
    case "^":
      return power(num1, num2);
  }
}

function eventListeners(array) {
  btnOne.addEventListener("click", () => {
    array.push(1);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnTwo.addEventListener("click", () => {
    array.push(2);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnThree.addEventListener("click", () => {
    array.push(3);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnFour.addEventListener("click", () => {
    array.push(4);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnFive.addEventListener("click", () => {
    array.push(5);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnSix.addEventListener("click", () => {
    array.push(6);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnSeven.addEventListener("click", () => {
    array.push(7);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnEight.addEventListener("click", () => {
    array.push(8);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnNine.addEventListener("click", () => {
    array.push(9);
    paraDisplay.textContent = `${array.join("")}`;
  });
  btnDot.addEventListener("click", () => {
    if (!array.includes(".")) {
      array.push(".");
      paraDisplay.textContent = `${array.join("")}`;
    }
  });
  btnChangeSign.addEventListener("click", () => {
    if (!array.includes("-")) {
      array.unshift("-");
    } else {
      array.shift();
    }
    paraDisplay.textContent = `${array.join("")}`;
  });
  return parseFloat(array.join(""));
}

//calculator function

function calculator() {
  numberFirst = eventListeners(numArray);
  console.log(numberFirst);
  if (numberFirst) {
    numArray = [];
    btnAdd.addEventListener("click", () => {
      operator = "+";
      numberSecond = eventListeners(numArray);
    });
    btnSubtract.addEventListener("click", () => {
      operator = "-";
      numberSecond = eventListeners(numArray);
    });
    btnMultiply.addEventListener("click", () => {
      operator = "*";
      numberSecond = eventListeners(numArray);
    });
    btnDivide.addEventListener("click", () => {
      operator = "/";
      numberSecond = eventListeners(numArray);
    });
    btnMod.addEventListener("click", () => {
      operator = "%";
      numberSecond = eventListeners(numArray);
    });
    btnPower.addEventListener("click", () => {
      operator = "^";
      numberSecond = eventListeners(numArray);
    });
    result = operate(operator, numberFirst, numberSecond);
  }
  btnAllClear.addEventListener("click", allClear);
  btnEqual.addEventListener("click", () => {
    paraDisplay.textContent = `${result}`;
  });
}

calculator();
