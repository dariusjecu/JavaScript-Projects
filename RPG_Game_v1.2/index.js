import { Character } from "./Character.js";
import characterData from "./data.js";
import { getNewMonster, endGame } from "./utils.js";

const attackBtn = document.getElementById("attack-button");
const hero = document.getElementById("hero");
const monster = document.getElementById("monster");
const end = document.getElementById("container");

let monstersArray = ["orc", "demon", "goblin"];

const wizard = new Character (characterData.hero);
let villain = getNewMonster(monstersArray.shift());

let aux1 = wizard.getDices();
let aux2 = villain.getDices();

hero.innerHTML = wizard.getHtml(aux1);
monster.innerHTML = villain.getHtml(aux2);

attackBtn.addEventListener("click", () => {

    aux1 = wizard.getDices();
    aux2 = villain.getDices();

    console.log(wizard.sum);
    console.log(villain.sum);

    wizard.damage(villain);
    villain.damage(wizard);

    hero.innerHTML = wizard.getHtml(aux1);
    monster.innerHTML = villain.getHtml(aux2);

    if(wizard.health == 0)
    {
        attackBtn.disabled = true;
        setTimeout(() => {
            endGame(wizard, villain, document.getElementById("container"));
            attackBtn.disabled = true;
        },2000)
    }

    if(villain.health == 0)
    {
        attackBtn.disabled = true;
        if(monstersArray.length > 0)
        {
            setTimeout(() => {
                villain = getNewMonster(monstersArray.shift());
                monster.innerHTML = villain.getHtml(aux2);
                attackBtn.disabled = false;
            },2000)
        }
        else
            {
                setTimeout(() => {
                    endGame(wizard, villain, document.getElementById("container"));
                    attackBtn.disabled = false;
                },2000)
            }
    }
    
})

