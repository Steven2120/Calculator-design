// One approach is to store our two numbers and one operation as strings so that
// we can easily add characters as the user presses buttons
let firstNumber = "";
let operation = "";
let secondNumber = "";
let haveDot = false;

//query Selections
const numbers = document.querySelectorAll(".nums");
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".minus");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equals = document.querySelector("#big-equal-button");
const clear = document.querySelector(".clear");
const screen = document.querySelector("#screen-digits");

// Handles when a number button is pressed
function numberPressed(number) {
  console.log(number);
  if (number.target.innerText === "." && !haveDot) {
    haveDot = true;
  } else if (number.target.innerText === "." && haveDot) {
    return undefined;
  }
  if (operation === "") {
    firstNumber += number.target.innerText;
    screen.innerText = firstNumber + operation;
  } else {
    secondNumber += number.target.innerText;
    screen.innerText = firstNumber + operation + secondNumber;
  }
}

// Handles when an operation button is pressed (+, -, /, *)
function operationPressed(op) {
  if (!firstNumber) {
    return undefined;
  }
  if (operation) {
    return undefined;
  }
  operation += op.target.innerText;
  screen.innerText = firstNumber + operation;
}

// Updates the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  let expression = screen.textContent;
  screen.textContent = eval(expression);
}

// Clears the screen
function clearScreen() {
  screen.textContent = "";
  firstNumber = "";
  operation = "";
  secondNumber = "";
  haveDot = false;
}

// TODO: write query selectors and add event listeners to the calculator's buttons

for (const button of numbers) {
  button.addEventListener("click", numberPressed);
}

addition.addEventListener("click", operationPressed);

subtraction.addEventListener("click", operationPressed);

multiplication.addEventListener("click", operationPressed);

division.addEventListener("click", operationPressed);

clear.addEventListener("click", clearScreen);

equals.addEventListener("click", updateScreen);

addition.addEventListener("click", updateScreen);

subtraction.addEventListener("click", updateScreen);

multiplication.addEventListener("click", updateScreen);

division.addEventListener("click", updateScreen);
