// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let inputEL = document.getElementById("input-el");
let buttonEL = document.getElementById("button-el");
let containerEL = document.getElementById("contain-all");
let deleteEl =document.getElementById("all-el")

let inputVal = 0;
let def = containerEL.innerHTML;
let par;

console.log(def);

function change(){
    inputEL = document.getElementById("input-el");
}

function full(){

    par = `<div id="all-el">`;
    console.log(containerEL.innerHTML);
    containerEL.innerHTML = def;  
    console.log(containerEL.innerHTML);

    inputVal = inputEL.value;
    console.log(inputVal);
    for(let i=0; i<3; i++)
    {
        if(i === 0)
            par += `<div id="details-el">
                        <h1 class="title-p">Lenght (Meter/Feet)</h1>
                        <p class="description">${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal} feet = ${(inputVal / 3.281).toFixed(3)} meters</p>
                    </div>`
        else if(i === 1)
            par += `<div id="details-el">
                        <h1 class="title-p">Volume (Liters/Gallons)</h1>
                        <p class="description">${inputVal} liters = ${(inputVal * 0.264).toFixed(3)} gallons | ${inputVal} gallons = ${(inputVal / 0.264).toFixed(3)} liters</p>
                    </div>`  
        else
            par += `<div id="details-el">
                        <h1 class="title-p">Mass (Kilograms/Pounds)</h1>
                        <p class="description">${inputVal} kilos = ${(inputVal * 2.204).toFixed(3)} pounds | ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} kilos</p>
                    </div>`           
    } 
    par += `</div><br>`;
    containerEL.innerHTML += par;
}