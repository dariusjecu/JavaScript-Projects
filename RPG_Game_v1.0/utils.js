function diceArray(data, x){
    let sum = 0;
    let array = new Array(data.diceCount).fill(0).map(function(num){
        num = Math.floor(Math.random()*6) + 1;
        sum += num;
        if(x === 0)
            return `<div class="dice"></div>`
        else
            return `<div class="dice">${num}</div>`
    }).join("");
    data.sum = sum;
    return array;
}

function getElement(data, x){

    const {name, avatar, health} = data;
    const val = diceArray(data, x);
    return `<div class="character-card">
                <div class="dice-container">
                    ${val}
                </div>
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b id="health-${name}"> ${health} </b></div>
            </div>`
}

function changeHealth(data)
{
    return `<div class="health">health: <b id="health-${data.name}"> ${data.health} </b></div>`
}

export {getElement, diceArray, changeHealth};