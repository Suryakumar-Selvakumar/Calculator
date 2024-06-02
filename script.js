//Variables

let numberFirst,
  numberSecond,
  operator,
  result = 0;
const numArray = [];
const container = document.querySelector(".container");
const numbersDisplay = document.querySelector(".numbers-display");
const paraDisplay = document.querySelector("#display");
paraDisplay.textContent = "0";
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
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function allClear() {
  numArray.splice(0, numArray.length);
  numberFirst = 0;
  numberSecond = 0;
  result = 0;
  operator = "";
  paraDisplay.textContent = `${result}`;
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

btnOne.addEventListener("click", () => {
  numArray.push(1);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnTwo.addEventListener("click", () => {
  numArray.push(2);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnThree.addEventListener("click", () => {
  numArray.push(3);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnFour.addEventListener("click", () => {
  numArray.push(4);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnFive.addEventListener("click", () => {
  numArray.push(5);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnSix.addEventListener("click", () => {
  numArray.push(6);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnSeven.addEventListener("click", () => {
  numArray.push(7);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnEight.addEventListener("click", () => {
  numArray.push(8);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnNine.addEventListener("click", () => {
  numArray.push(9);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnZero.addEventListener("click", () => {
  numArray.push(0);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnDot.addEventListener("click", () => {
  if (!numArray.includes(".")) {
    numArray.push(".");
    paraDisplay.textContent = `${numArray.join("")}`;
  }
});
btnChangeSign.addEventListener("click", () => {
  if (numberFirst) {
    numberFirst *= -1;
    paraDisplay.textContent = `${numberFirst}`;
  } else if (result) {
    result *= -1;
    paraDisplay.textContent = `${result}`;
  } else {
    if (!numArray.includes("-")) {
      numArray.unshift("-");
    } else {
      numArray.shift();
    }
    paraDisplay.textContent = `${numArray.join("")}`;
  }
});

btnAdd.addEventListener("click", () => {
  operator = "+";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnSubtract.addEventListener("click", () => {
  operator = "-";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnMultiply.addEventListener("click", () => {
  operator = "*";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnDivide.addEventListener("click", () => {
  operator = "/";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnMod.addEventListener("click", () => {
  operator = "%";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnPower.addEventListener("click", () => {
  operator = "^";
  if (result) {
    numberFirst = result;
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});

btnAllClear.addEventListener("click", allClear);
btnEqual.addEventListener("click", () => {
  if (numberFirst === undefined) {
    paraDisplay.textContent = "0";
  } else {
    numberSecond = parseFloat(numArray.join(""));
    result = operate(operator, numberFirst, numberSecond);
    if (!isFinite(result)) {
      paraDisplay.textContent = "A for Effort";
    } else {
      if (result.toString().includes(".")) {
        result = result.toFixed(2);
      }
      paraDisplay.textContent = `${result}`;
    }
    numberFirst = 0;
    numberSecond = 0;
  }
});
