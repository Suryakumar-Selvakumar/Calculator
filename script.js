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
const btnBackSpace = document.querySelector("#back-space");
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

function allClear() {
  numArray.splice(0, numArray.length);
  numberFirst = undefined;
  numberSecond = undefined;
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
  }
}

function handleNumberInput(num) {
  result = 0;
  numArray.push(num);
  if (numberFirst === undefined && numArray[0] === 0) {
    numArray.shift();
    paraDisplay.textContent = "0";
  } else {
    paraDisplay.textContent = `${numArray.slice(0, 8).join("")}`;
  }
}

btnOne.addEventListener("click", () => handleNumberInput(1));
btnTwo.addEventListener("click", () => handleNumberInput(2));
btnThree.addEventListener("click", () => handleNumberInput(3));
btnFour.addEventListener("click", () => handleNumberInput(4));
btnFive.addEventListener("click", () => handleNumberInput(5));
btnSix.addEventListener("click", () => handleNumberInput(6));
btnSeven.addEventListener("click", () => handleNumberInput(7));
btnEight.addEventListener("click", () => handleNumberInput(8));
btnNine.addEventListener("click", () => handleNumberInput(9));
btnZero.addEventListener("click", () => handleNumberInput(0));

btnDot.addEventListener("click", () => {
  if (!numArray.includes(".")) {
    numArray.push(".");
    if (numArray[0] == ".") {
      numArray.unshift("0");
    }
    paraDisplay.textContent = `${numArray.slice(0, 8).join("")}`;
  }
});

btnChangeSign.addEventListener("click", () => {
  if (result) {
    result *= -1;
    numberFirst = result;
    paraDisplay.textContent = `${numberFirst}`;
  } else {
    if (numArray.length == 0) {
      if (numberFirst) {
        numberFirst *= -1;
        paraDisplay.textContent = `${numberFirst}`;
      }
    } else {
      if (!numArray.includes("-")) {
        numArray.unshift("-");
      } else {
        numArray.shift();
      }
      paraDisplay.textContent = `${numArray.slice(0, 8).join("")}`;
    }
  }
});

function handleOperatorPress(newOperator) {
  if (numberFirst !== undefined) {
    if (numArray.length > 0) {
      numberSecond = parseFloat(numArray.slice(0, 8).join(""));
      result = operate(operator, numberFirst, numberSecond);
      if (result !== undefined && result.toString().length > 8) {
        paraDisplay.textContent = `${result.toExponential()}`;
      } else {
        paraDisplay.textContent = `${result}`;
      }
      numberFirst = result;
      numberSecond = undefined;
    }
    operator = newOperator;
    numArray.splice(0, numArray.length);
  } else {
    numberFirst = parseFloat(numArray.slice(0, 8).join(""));
    operator = newOperator;
    numArray.splice(0, numArray.length);
  }
}

btnAdd.addEventListener("click", () => handleOperatorPress("+"));
btnSubtract.addEventListener("click", () => handleOperatorPress("-"));
btnMultiply.addEventListener("click", () => handleOperatorPress("*"));
btnDivide.addEventListener("click", () => handleOperatorPress("/"));
btnMod.addEventListener("click", () => handleOperatorPress("%"));

function handleOperatorDoublePress(newOperator) {
  if (numberFirst !== undefined) {
    numberFirst = result;
    numberSecond = numberFirst;
    result = operate(newOperator, numberFirst, numberSecond);
    if (result.toString().length > 8) {
      paraDisplay.textContent = `${result.toExponential(2)}`;
    } else {
      paraDisplay.textContent = `${result}`;
    }
  }
}

btnAdd.addEventListener("dblclick", () => handleOperatorDoublePress("+"));
btnSubtract.addEventListener("dblclick", () => handleOperatorDoublePress("-"));
btnMultiply.addEventListener("dblclick", () => handleOperatorDoublePress("*"));
btnDivide.addEventListener("dblclick", () => handleOperatorDoublePress("/"));
btnMod.addEventListener("dblclick", () => handleOperatorDoublePress("%"));

btnAllClear.addEventListener("click", allClear);
btnBackSpace.addEventListener("click", () => {
  if (result) {
    result = 0;
    paraDisplay.textContent = `${result}`;
  } else {
    numArray.pop();
    paraDisplay.textContent = `${numArray.slice(0, 8).join("")}`;
  }
});

btnEqual.addEventListener("click", () => {
  if (numberFirst === undefined) {
    paraDisplay.textContent = "0";
  } else {
    numberSecond = parseFloat(numArray.slice(0, 8).join(""));
    if (numberSecond === undefined) {
      paraDisplay.textContent = `${result}`;
    } else {
      result = operate(operator, numberFirst, numberSecond);
      if (result == "Infinity") {
        paraDisplay.textContent = "Haha, Nice Try!";
      } else {
        if (result.toString().includes(".")) {
          result = result.toFixed(2);
        }
        if (result !== undefined && result.toString().length > 8) {
          paraDisplay.textContent = `${result.toExponential()}`;
        } else {
          paraDisplay.textContent = `${result}`;
        }
        numArray.splice(0, numArray.length);
      }
    }
  }
});

//btnChangeSign bug
