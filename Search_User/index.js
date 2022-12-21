let names = ["Karl", "Per", "Katie", "Lupe", "Katherine", "Kelly", "Kurt", "Fred"];

let inputName = document.getElementById("input-name");
let nameBox = document.getElementById("name-box");

for(let i=0; i<names.length; i++)
            display(names[i]);

let addToInput = document.getElementsByClassName("searched_name");

inputName.addEventListener("keyup", function(){
    nameBox.innerHTML = "";
    if(inputName.value === "")
    {
        for(let i=0; i<names.length; i++)
            display(names[i]);
        addToInput = document.getElementsByClassName("searched_name");
    }
    else
    {
        let upper = inputName.value;
        upper = upper[0].toUpperCase() + upper.slice(1).toLowerCase();
        let result;
        for(let i=0; i<names.length; i++)
            {
                result = names[i].indexOf(upper);
                if(result >= 0)
                        display(names[i]);
            }
    }
    addToInput = document.getElementsByClassName("searched_name");
    console.log(addToInput);

    for(let i=0; i<addToInput.length; i++)
        addToInput[i].addEventListener("click", function(){
            inputName.value = addToInput[i].textContent;
    }) 
})

function display(name){
    nameBox.innerHTML += `<div class="searched-name-box">
                            <button class="searched_name">${name}</button>
                          </div>`
}

