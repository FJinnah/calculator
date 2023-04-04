//Variable names for buttons
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const zeroButton = document.querySelector("#zero");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const decimalButton = document.querySelector("#decimal");
const equalsButton = document.querySelector("#equals");

//Variable names for classes
const numButton = document.querySelector(".number");
const allButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelector(".operator");

//Functions for operations
const add = (num1, num2) => 
  num1 + num2;

const subtract = (num1, num2) =>
  num1 - num2;

const multiply = (num1, num2) =>
  num1 * num2;

const divide = (num1, num2) =>
  num1 / num2;

const operate = function(operator, num1, num2) {
  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1,num2);
  } else if (operator === '/') {
    return divide(num1,num2);
  }
}
const screenView = document.querySelector("#screen");

//Function to display number on screen when clicked
// (parseInt(threeButton.innerText));
allButtons.forEach((numButton) => {
  numButton.addEventListener('click', () => {
    newScreen = document.createElement('div');
    newScreen.textContent = (parseInt(numButton.innerText));
    screenView.appendChild(newScreen);
  });
});