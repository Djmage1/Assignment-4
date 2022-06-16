let displayText;
let equation;
let operand;
let result;
let num1;
let num2;

function addition() {
    result = (num1 + num2);

    document.getElementById("display").value = result;
}

function subtract() {
    result = (num1 - num2);
    
    document.getElementById("display").value = result;
}

function multiply() {
    result = (num1 * num2);

    document.getElementById("display").value = result;
}

function divide() {
    result = (num1 / num2);

    document.getElementById("display").value = result;
}

function getOperand(buttonId) {
    getNumbers();
    operand = buttonId;
    document.getElementById("display").value = "";
}

function getNumbers() {
    equation = document.getElementById("display").value;

    if(num1 == null) {
        num1 = parseFloat(equation);
    }
    else if(num2 == null) {
        num2 = parseFloat(equation);
    }
}

function addDot() {
    displayText = document.getElementById("display").value;

    if(displayText.includes(".")) {
        
    }
    else if(displayText == "") {
        
    }
    else {
        document.getElementById("display").value += ".";
    }
}

function checkZero() {
    displayText = document.getElementById("display").value;

    if(displayText == null) {
        
    }
    else {
        document.getElementById("display").value += "0";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
    operand = null;
    num1 = null;
    num2 = null;
}

function backspace() {
    equation = document.getElementById("display").value;

    document.getElementById("display").value = equation.slice(0, -1);
}



function operate() {
    equation = document.getElementById("display").value;

    if(equation == "" || equation == null) {

    }
    else {
        getNumbers();
        
        switch(operand) {
            case"+":
                addition();
                operand = null;
                num1 = null;
                num2 = null;
                result = null;
                break;
            
            case"-":
                subtract();
                operand = null;
                num1 = null;
                num2 = null;
                result = null;
                break;
            
            case"*":
                multiply();
                operand = null;
                num1 = null;
                num2 = null;
                result = null;
                break;
            
            case"/":
                divide();
                operand = null;
                num1 = null;
                num2 = null;
                result = null;
                break;
        }
    }
}