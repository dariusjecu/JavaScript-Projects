import Character from "./Character.js";
import characterData from "./data.js";

function display(data,val){
    let {name, avatar, health} = data;
    return `<div class="character-card">
                <div class="dice-container">
                    ${val}
                </div>
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b id="health-${name}"> ${health} </b></div>
                    ${data.getPercentage()}
            </div>` 
}

function endGame(data1, data2, val){
    const endMessage = data1.health <= 0 ? `${data2.name} won the game!` : `${data1.name} won the game!`;
    val.innerHTML = `<div class="end-game">
                        <h2>Game Over</h2>
                        <h3>${endMessage}</h3>
                        <p class="end-emoji">🔮</p>
                    </div>`
}

function getNewMonster(val){
    console.log(val);
    if(val == "orc")
        return new Character(characterData.orc);
    else if(val == "demon")
        return new Character(characterData.demon);
    else
        return new Character(characterData.goblin);
}

export {display, endGame, getNewMonster}