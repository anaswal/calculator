class Calculator {
  constructor(operandScreen, currentScreen) {
    this.operandScreen = operandScreen;
    this.currentScreen = currentScreen;
    this.clearScreen();
  }

  clearScreen() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  deleteNumber() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  updateDisplay() {
    this.operandScreen.textContent = this.previousOperand;
    this.currentScreen.textContent = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const acButton = document.querySelector("[data-ac]");
const deleteButton = document.querySelector("[data-delete]");
const operandScreen = document.querySelector("[data-operand-screen]");
const currentScreen = document.querySelector("[data-current-screen]");

const calculator = new Calculator(operandScreen, currentScreen);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

acButton.addEventListener("click", () => {
  calculator.clearScreen();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.deleteNumber();
  calculator.updateDisplay();
});
