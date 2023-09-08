const inputScreen = document.querySelector(".input-screen");
const currentScreen = document.querySelector(".current-screen");
const numberButton = document.querySelectorAll(".number-button");
const clearButton = document.querySelector(".clear-button");
const acButton = document.querySelector(".ac-button");

acButton.addEventListener("click", clearScreen);
clearButton.addEventListener("click", deleteNumber);

function deleteNumber() {
  inputScreen.textContent = inputScreen.textContent.toString().slice(0, -1);
}

function clearScreen() {
  inputScreen.textContent = "";
  currentScreen.textContent = 0;
}

const appendNumber = (number) => {
  inputScreen.textContent += number;
};

numberButton.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});
