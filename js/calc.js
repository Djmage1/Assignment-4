function operate() {
    equation = document.getElementById("display").value;

    calculation = eval(equation);

    document.getElementById("display").value = calculation;
}

function addition() {
    document.getElementById("display").value += " + ";
}

function subtract() {
    document.getElementById("display").value += " - ";
}

function multiply() {
    document.getElementById("display").value += " * ";
}

function divide() {
    document.getElementById("display").value += " / ";
}