import characterData from "./data.js";
import { Character } from "./Character.js";

function getPercentage(data){
    return `<div class="health-bar-outer">
                <div class="health-bar-inner ${data.percentage <= 25 ? "danger" : ""}"
                    style="width: ${data.percentage}%;">
                </div>
            </div>`;
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

function endGame(hero, monster, val)
{
    const endMessage = hero.health == 0 ? "Monsters wins" : monster.health == 0 ? `${hero.name} wins` : 0
    val.innerHTML = `<div class="end-game">
                        <h2>Game Over</h2>
                        <h3>${endMessage}</h3>
                        <p class="end-emoji">🔮</p>
                    </div>`
}

export {getPercentage, getNewMonster, endGame}