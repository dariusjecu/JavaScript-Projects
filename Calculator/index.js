let result = document.getElementById("sum-el");
let num1El = document.getElementById("num1-el");
let num2El = document.getElementById("num2-el");

let num1 = 8;
let num2 = 2;

num1El.textContent = num1;
num2El.textContent = num2;


function add()
{
    result.textContent = "Result: ";
    result.textContent += (num1 + num2);
}

function subtract()
{
    result.textContent = "Result: ";
    result.textContent += (num1 - num2);
}

function divide()
{
    result.textContent = "Result: ";
    result.textContent += (num1 / num2);
}

function multiply()
{
    result.textContent = "Result: ";
    result.textContent += (num1 * num2);
}