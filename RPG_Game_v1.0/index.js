import Character from "./Character.js"
import characterData from "./data.js"
import {getElement, diceArray, changeHealth} from "./utils.js";

let wizard = new Character(characterData.hero);
let orc = new Character(characterData.monster);

let first = true;

const hero = document.getElementById("hero")
const monster = document.getElementById("monster")

hero.innerHTML = wizard.getNewElement;
monster.innerHTML = orc.getNewElement;

const attackBtn = document.getElementById("attack-button")

attackBtn.addEventListener("click", function(){

    hero.innerHTML = getElement(wizard, 1);
    monster.innerHTML = getElement(orc, 1);

    let healthHero = hero.querySelector(`#health-${wizard.name}`)
    let healthMonster = monster.querySelector(`#health-${orc.name}`)

    wizard.health -= orc.sum;
    orc.health -= wizard.sum;

    healthHero.innerHTML = wizard.health;
    healthMonster.innerHTML = orc.health;

})