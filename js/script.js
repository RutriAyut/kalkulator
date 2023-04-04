let prevNumber = '';
let currentNumber = '0';
let CalculationOperator = '';
let calculatorScreen = document.querySelector(".calculator-screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const btnClear = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

window.onload = () => {
    updateScreen(currentNumber);
};

//Ganti tampilan calculator screen
const updateScreen = (number) =>{
    calculatorScreen.value = number;
};

//Ketika nomer di klik
numbers.forEach((number) => {
    number.addEventListener('click', () =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});
const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
        //console.log("1");
    } else {
        currentNumber += number;
        //console.log("2");
    }
};

//Ketika operator di klik
operators.forEach((operator) =>{
    operator.addEventListener('click', ()=>{
        inputOperator(event.target.value);
    })
});
const inputOperator = (operator) => {
    if(CalculationOperator === '') {
        prevNumber = currentNumber;
    }
    CalculationOperator = operator;
    currentNumber = '0';
};

//Ketika = diklik
equalSign.addEventListener('click', ()=>{
    calculate();
    updateScreen(currentNumber);
});
const calculate = () => {
    let result = '';
    switch(CalculationOperator) {
        case "+":
            result = (parseFloat(prevNumber) * 10 + parseFloat(currentNumber) * 10) / 10;
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    CalculationOperator = '';
    prevNumber ='';
};

//Ketika AC di klik
btnClear.addEventListener('click', () => {
    clearAll();
    calculatorScreen.value = currentNumber;
});

const clearAll = () => {
    prevNumber = '';
    currentNumber = '0';
    CalculationOperator = '';
};

//Ketika decimal
decimal.addEventListener('click', () => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});
const inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    };
    currentNumber += dot;
}