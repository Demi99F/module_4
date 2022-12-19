const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = "0."
      calculator.waitingForSecondOperand = false;
      return
    }
  
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
    
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
  
    if (firstOperand == null && !isNaN(inputValue)) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
  
      calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
  function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
  function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
let key0 = document.getElementById("key0");
key0.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key0.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key1 = document.getElementById("key1");
key1.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key1.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key2 = document.getElementById("key2");
key2.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key2.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key3 = document.getElementById("key3");
key3.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key3.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key4 = document.getElementById("key4");
key4.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key4.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key5 = document.getElementById("key5");
key5.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key5.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key6 = document.getElementById("key6");
key6.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key6.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key7 = document.getElementById("key7");
key7.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key7.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key8 = document.getElementById("key8");
key8.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key8.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let key9 = document.getElementById("key9");
key9.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
key9.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let plus = document.getElementById("plus");
plus.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
plus.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let min = document.getElementById("min");
min.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
min.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let gedeeld = document.getElementById("gedeeld");
gedeeld.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
gedeeld.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let keer = document.getElementById("keer");
keer.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
keer.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});

let punt = document.getElementById("punt");
punt.addEventListener("mouseover",function(e){
  e.target.style.backgroundColor = "red";
});
punt.addEventListener("mouseout",function(e){
  e.target.style.backgroundColor = "white";
});


  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;



    if (!target.matches('button')) {
      return;
    }
  
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
      case '=':
        handleOperator(value);
        break;
      case '.':
        inputDecimal(value);
        break;
      case 'all-clear':
        resetCalculator();
        break;
      default:
        if (Number.isInteger(parseFloat(value))) {
          inputDigit(value);
        }
    }
  
    updateDisplay();
  });

  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});
