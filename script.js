const calculatorScreen = document.querySelector(".calculator-screen");
const buttons = document.querySelectorAll("button");

const appendNumber = (number) => {
  calculatorScreen.textContent += number;
};

buttons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});
