const inputScreen = document.querySelector(".input-screen");
const currentScreen = document.querySelector(".current-screen");
const numberButton = document.querySelectorAll(".number-button");
const equalButton = document.querySelector(".equal-button");
const operatorButton = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const acButton = document.querySelector(".ac-button");

let num1 = 0;
let num2 = 0;
let result = 0;

acButton.addEventListener("click", clearScreen);
clearButton.addEventListener("click", deleteNumber);

function deleteNumber() {
  inputScreen.textContent = inputScreen.textContent.toString().slice(0, -1);
}

function clearScreen() {
  inputScreen.textContent = "";
  currentScreen.textContent = 0;
}

const appendNumber1 = (number) => {
  inputScreen.textContent += number;
  num1 = parseInt(inputScreen.textContent);
  return num1;
};

const appendNumber2 = (number) => {
  inputScreen.textContent += number;
  num2 = parseInt(inputScreen.textContent);
  return num2;
};

numberButton.forEach((button) => {
  button.addEventListener("click", () => appendNumber1(button.textContent));
});

operatorButton.forEach((opr) => {
  opr.addEventListener("click", (e) => {
    switch (e.target.value) {
      case "+":
        inputScreen.textContent = "";
        numberButton.forEach((button) => {
          button.addEventListener("click", () =>
            appendNumber2(button.textContent)
          );
        });
        result = num1 + num2;
        console.log(num1);
        console.log(num2);
        equalButton.addEventListener("click", () => {
          currentScreen.textContent = result;
        });
        break;

      case "-":
        inputScreen.textContent = "";
        result = num1 - num2;
        break;

      case "*":
        inputScreen.textContent = "";
        result = num1 * num2;
        break;

      case "/":
        inputScreen.textContent = "";
        result = num1 / num2;
        break;

      default:
        alert("Salah operator");
        break;
    }
  });
});
