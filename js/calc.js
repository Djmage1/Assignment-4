function operate() {
    equation = document.getElementById("display").value;

    calculation = eval(equation);

    document.getElementById("display").value = calculation;
}