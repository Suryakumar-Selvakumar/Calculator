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
  }
}

btnOne.addEventListener("click", () => {
  result = 0;
  numArray.push(1);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnTwo.addEventListener("click", () => {
  result = 0;
  numArray.push(2);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnThree.addEventListener("click", () => {
  result = 0;
  numArray.push(3);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnFour.addEventListener("click", () => {
  result = 0;
  numArray.push(4);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnFive.addEventListener("click", () => {
  result = 0;
  numArray.push(5);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnSix.addEventListener("click", () => {
  result = 0;
  numArray.push(6);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnSeven.addEventListener("click", () => {
  result = 0;
  numArray.push(7);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnEight.addEventListener("click", () => {
  result = 0;
  numArray.push(8);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnNine.addEventListener("click", () => {
  result = 0;
  numArray.push(9);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnZero.addEventListener("click", () => {
  result = 0;
  numArray.push(0);
  paraDisplay.textContent = `${numArray.join("")}`;
});
btnDot.addEventListener("click", () => {
  if (!numArray.includes(".")) {
    numArray.push(".");
    if (numArray[0] == ".") {
      numArray.unshift("0");
    }
    paraDisplay.textContent = `${numArray.join("")}`;
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
      paraDisplay.textContent = `${numArray.join("")}`;
    }
  }
});

btnAdd.addEventListener("click", () => {
  operator = "+";
  if (numberFirst) {
    if (result) {
      numberFirst = result;
      numberSecond = numberFirst;
      result = operate(operator, numberFirst, numberSecond);
      paraDisplay.textContent = `${result}`;
    }
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});

btnSubtract.addEventListener("click", () => {
  operator = "-";
  if (numberFirst) {
    if (result) {
      numberFirst = result;
      numberSecond = numberFirst;
      result = operate(operator, numberFirst, numberSecond);
      paraDisplay.textContent = `${result}`;
    }
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});

btnMultiply.addEventListener("click", () => {
  operator = "*";
  if (numberFirst) {
    if (result) {
      numberFirst = result;
      numberSecond = numberFirst;
      result = operate(operator, numberFirst, numberSecond);
      paraDisplay.textContent = `${result}`;
    }
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});

btnDivide.addEventListener("click", () => {
  operator = "/";
  if (numberFirst) {
    if (result) {
      numberFirst = result;
      numberSecond = numberFirst;
      result = operate(operator, numberFirst, numberSecond);
      paraDisplay.textContent = `${result}`;
    }
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});
btnMod.addEventListener("click", () => {
  operator = "%";
  if (numberFirst) {
    if (result) {
      numberFirst = result;
      numberSecond = numberFirst;
      result = operate(operator, numberFirst, numberSecond);
      paraDisplay.textContent = `${result}`;
    }
  } else {
    numberFirst = parseFloat(numArray.join(""));
  }
  numArray.splice(0, numArray.length);
});

btnAllClear.addEventListener("click", allClear);
btnBackSpace.addEventListener("click", () => {
  if (result) {
    result = 0;
    paraDisplay.textContent = `${result}`;
  } else {
    numArray.pop();
    paraDisplay.textContent = `${numArray.join("")}`;
  }
});

btnEqual.addEventListener("click", () => {
  if (numberFirst === undefined) {
    paraDisplay.textContent = "0";
  } else {
    numberSecond = parseFloat(numArray.join(""));
    if (!numberSecond) {
      paraDisplay.textContent = `${result}`;
    } else {
      result = operate(operator, numberFirst, numberSecond);
      if (result == "Infinity") {
        paraDisplay.textContent = "A for Effort";
      } else {
        if (result.toString().includes(".")) {
          result = result.toFixed(2);
        }
        paraDisplay.textContent = `${result}`;
        numArray.splice(0, numArray.length);
      }
    }
  }
});

//btnChangeSign bug
