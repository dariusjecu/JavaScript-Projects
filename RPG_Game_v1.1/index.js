import Character from "./Character.js"
import characterData from "./data.js"
import {getNewMonster, endGame} from "./utils.js";

const attackBtn = document.getElementById("attack-button");
const hero = document.getElementById("hero");
const monster = document.getElementById("monster");
const end = document.getElementById("container");

let monstersArray = ["orc", "demon", "goblin"];

const wizard = new Character(characterData.hero);
let creature = getNewMonster(monstersArray.shift());

hero.innerHTML = wizard.displayVal(wizard, 0, wizard.getDices(0));
monster.innerHTML = creature.displayVal(creature, 0, creature.getDices(0));

attackBtn.addEventListener("click", function(){

        const aux = wizard.getDices(1);
        const aux1 = creature.getDices(1);

        hero.innerHTML = wizard.displayVal(creature, creature.sum, aux);
        monster.innerHTML = creature.displayVal(wizard, wizard.sum, aux1);

        console.log(wizard.health);
        console.log(creature.health);

        if(wizard.health <= 0)
        {
            attackBtn.disabled = true;
            setTimeout(() => {
                endGame(wizard, creature, end);
                attackBtn.disabled = false;
            }, 1000);
        }
        
        if(creature.health <= 0)
        {
            attackBtn.disabled = true;
            if(monstersArray.length === 0)
                {
                    setTimeout(() => {
                        endGame(wizard, creature, end);
                        attackBtn.disabled = false;
                    }, 1000);
                }
            else 
                {
                    creature = getNewMonster(monstersArray.shift());
                    setTimeout(() => {
                        hero.innerHTML = wizard.displayVal(wizard, 0, wizard.getDices(0));
                        attackBtn.disabled = false;
                    }, 1000);
                    setTimeout(() => monster.innerHTML = creature.displayVal(creature, 0, creature.getDices(0)), 1000);
                }
        }
        
})


