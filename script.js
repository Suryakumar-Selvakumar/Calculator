//Variables

let numberFirst, numberSecond, operator, result;
const arrayFirstNumber = [];
const arraySecondNumber = [];
const container = document.querySelector(".container");
const numbersDisplay = document.querySelector(".numbers-display");
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
  numbersDisplay.innerHTML = "";
  const paraDisplay = document.createElement("p");
  btnOne.addEventListener("click", () => {
    paraDisplay.textContent += "1";
    array.push(1);
  });
  btnTwo.addEventListener("click", () => {
    paraDisplay.textContent += "2";
    array.push(2);
  });
  btnThree.addEventListener("click", () => {
    paraDisplay.textContent += "3";
    array.push(3);
  });
  btnFour.addEventListener("click", () => {
    paraDisplay.textContent += "4";
    array.push(4);
  });
  btnFive.addEventListener("click", () => {
    paraDisplay.textContent += "5";
    array.push(5);
  });
  btnSix.addEventListener("click", () => {
    paraDisplay.textContent += "6";
    array.push(6);
  });
  btnSeven.addEventListener("click", () => {
    paraDisplay.textContent += "7";
    array.push(7);
  });
  btnEight.addEventListener("click", () => {
    paraDisplay.textContent += "8";
    array.push(8);
  });
  btnNine.addEventListener("click", () => {
    paraDisplay.textContent += "9";
    array.push(9);
  });
  btnDot.addEventListener("click", () => {
    if (!array.includes(".")) {
      paraDisplay.textContent += ".";
      array.push(".");
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
  numbersDisplay.appendChild(paraDisplay);
  return parseFloat(array.join(""));
}

//calculator function

function calculator() {
  const paraDisplay = numbersDisplay.firstChild();
  if (numberFirst) {
    btnAdd.addEventListener("click", () => {
      operator = "+";
      numberSecond = eventListeners(arraySecondNumber);
    });
    btnSubtract.addEventListener("click", () => {
      operator = "-";
      numberSecond = eventListeners(arraySecondNumber);
    });
    btnMultiply.addEventListener("click", () => {
      operator = "*";
      numberSecond = eventListeners(arraySecondNumber);
    });
    btnDivide.addEventListener("click", () => {
      operator = "/";
      numberSecond = eventListeners(arraySecondNumber);
    });
    btnMod.addEventListener("click", () => {
      operator = "%";
      numberSecond = eventListeners(arraySecondNumber);
    });
    btnPower.addEventListener("click", () => {
      operator = "^";
      numberSecond = eventListeners(arraySecondNumber);
    });
    result = operate(operator, numberFirst, numberSecond);
    numberFirst = result;
  } else {
    numberFirst = eventListeners(arrayFirstNumber);
  }
  btnAllClear.addEventListener("click", allClear);
  btnEqual.addEventListener("click", () => {
    paraDisplay.textContent = `${result}`;
  });
}

while (true) {
  calculator();
}
