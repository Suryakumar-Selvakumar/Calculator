//Variables

let numberFirst, numberSecond, operator, result;
const container = document.querySelector(".container");
const calcButtons = document.querySelector(".calculator-buttons");
const paraDisplay = document.querySelector("#display");
const btnClear = document.querySelector("#clear");
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

//function to populate display

function populateDisplay() {
  const DisplayNum = [];
  paraDisplay.textContent = "";
  do {
    btnOne.addEventListener("click", () => {
      paraDisplay.textContent += "1";
      DisplayNum.push(1);
    });
    btnTwo.addEventListener("click", () => {
      paraDisplay.textContent += "2";
      DisplayNum.push(2);
    });
    btnThree.addEventListener("click", () => {
      paraDisplay.textContent += "3";
      DisplayNum.push(3);
    });
    btnFour.addEventListener("click", () => {
      paraDisplay.textContent += "4";
      DisplayNum.push(4);
    });
    btnFive.addEventListener("click", () => {
      paraDisplay.textContent += "5";
      DisplayNum.push(5);
    });
    btnSix.addEventListener("click", () => {
      paraDisplay.textContent += "6";
      DisplayNum.push(6);
    });
    btnSeven.addEventListener("click", () => {
      paraDisplay.textContent += "7";
      DisplayNum.push(7);
    });
    btnEight.addEventListener("click", () => {
      paraDisplay.textContent += "8";
      DisplayNum.push(8);
    });
    btnNine.addEventListener("click", () => {
      paraDisplay.textContent += "9";
      DisplayNum.push(9);
    });
    btnDot.addEventListener("click", () => {
      if (!DisplayNum.includes(".")) {
        paraDisplay.textContent += ".";
        DisplayNum.push(".");
      }
    });
    btnChangeSign.addEventListener("click", () => {
      if (!DisplayNum.includes("-")) {
        DisplayNum.unshift("-");
      } else {
        DisplayNum.shift();
      }
      paraDisplay.textContent = `${DisplayNum.join("")}`;
    });
  } while (DisplayNum.length < 10);
  return parseFloat(DisplayNum.join(""));
}

//function to assign operator

function getOperator() {
  btnAdd.addEventListener("click", () => (operator = "+"));
  btnSubtract.addEventListener("click", () => (operator = "-"));
  btnMultiply.addEventListener("click", () => (operator = "*"));
  btnDivide.addEventListener("click", () => (operator = "/"));
  btnMod.addEventListener("click", () => (operator = "%"));
  btnPower.addEventListener("click", () => (operator = "^"));
}

//calculator function

function calculator() {
  do {
    if (numberFirst) {
      numberSecond = populateDisplay();
    } else {
      numberFirst = populateDisplay();
      getOperator();
    }
  } while (!numberFirst && !numberSecond);
  btnEqual.addEventListener("click", () => {
    switch (operator) {
      case "+":
        result = operate("+", numberFirst, numberSecond);
        break;
      case "-":
        result = operate("-", numberFirst, numberSecond);
        break;
      case "*":
        result = operate("*", numberFirst, numberSecond);
        break;
      case "/":
        result = operate("/", numberFirst, numberSecond);
        break;
      case "%":
        result = operate("%", numberFirst, numberSecond);
        break;
      case "^":
        result = operate("^", numberFirst, numberSecond);
        break;
    }
    paraDisplay.textContent = `${result}`;
  });
}

calculator();
