//Variables to store data
let currentValue = '';
let previousValue = '';
let operator = '';

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
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#clear");
const screenView = document.querySelector("#screen");

//Variable names for classes
const numButton = document.querySelector(".number");
const allButtons = document.querySelectorAll(".number");
const operatorButton = document.querySelector(".operator");
const allOperatorButtons = document.querySelectorAll(".operator");

//Functions for operations
// const add = (num1, num2) => 
//   num1 + num2;

// const subtract = (num1, num2) =>
//   num1 - num2;

// const multiply = (num1, num2) =>
//   num1 * num2;

// const divide = (num1, num2) =>
//   num1 / num2;

const operate = function() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  
  if (operator === '+') {
    previousValue += currentValue;
  } else if (operator === '-') {
    previousValue -= currentValue;
  } else if (operator === 'x') {
    previousValue *= currentValue;
  } else if (operator === '÷') {
    previousValue /= currentValue;
  }
  previousValue.toString;
  currentValue.toString; 
}

//Function to display number on screen when clicked
allButtons.forEach((numButton) => {
  numButton.addEventListener('click', function(e){
    handleNumber(e.target.textContent);
    screenView.textContent = currentValue; 
})
});

//Function to store numbers in variable
function handleNumber(num){
  if (currentValue.length <= 7) {
    currentValue += num;
  }
  };

//Function to store operator in variable
allOperatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', function(e){
    handleOperator(e.target.textContent);
    // screenView.textContent = currentValue; 
})
});

//Function to store operator in variable
function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';
}

//Function to clear display of all numbers
  clearButton.addEventListener('click', () => {
    currentValue = '';
    previousValue = '';
    operator = '';
    screenView.textContent = currentValue;
  });

//Equal button functionality
equalsButton.addEventListener('click', () => {
  operate();
  screenView.textContent = previousValue;
})

//Decimal functionality
// function addDecimal() {
//   if(!currentValue.includes(".")){
//     currentValue += '.';
//   }
// } 