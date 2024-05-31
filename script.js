//Variables

const result = 0;
let numberFirst, numberSecond, operator;
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
    case "^":
      result = power(num1, num2);
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

//calculator function

function calculator() {
  do {
    if (numberFirst) {
      numberSecond = populateDisplay();
    } else {
      numberFirst = populateDisplay();
    }
  } while (!numberFirst && !numberSecond);
  btnAdd.addEventListener("click", operate("+", numberFirst, numberSecond));
  btnSubtract.addEventListener(
    "click",
    operate("-", numberFirst, numberSecond)
  );
  btnMultiply.addEventListener(
    "click",
    operate("*", numberFirst, numberSecond)
  );
  btnDivide.addEventListener("click", operate("/", numberFirst, numberSecond));
  btn.addEventListener("click", operate("/", numberFirst, numberSecond));
  btnDivide.addEventListener("click", operate("/", numberFirst, numberSecond));
  btnEqual.addEventListener("click", () => {
    paraDisplay.textContent = `${result}`;
  });
}
