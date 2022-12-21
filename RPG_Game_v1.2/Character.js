import {getPercentage} from "./utils.js";

class Character {
    constructor(data){
        Object.assign(this,data);
        this.maxHealth = this.health
        this.percentage = (100 * this.health) / this.maxHealth;
        this.firstElement = true;
    }
    getDices(){
        this.sum = 0
        const array =  new Array(this.diceCount).fill(0).map((num) => {
            num = Math.floor(Math.random()*6)+1;
            this.sum += num;
            if(this.firstElement == false)
                return `<div class="dice">${num}</div>`;
            else
                return `<div class="dice"></div>`;
        }).join("");
        return array;
    }
    damage(data){
        this.health -= data.sum;
        if(this.health < 0)
            this.health = 0;
            this.percentage = this.percentage = (100 * this.health) / this.maxHealth;
    }
    getHtml(val){
        const {name, avatar, health} = this;
        const aux = `<div class="character-card">
                        <div class="dice-container">
                            ${val}
                        </div>
                        <h4 class="name"> ${name} </h4>
                        <img class="avatar" src="${avatar}" />
                        <div class="health">health: <b> ${health} </b></div>
                            ${getPercentage(this)}
                    </div>`
        this.firstElement = false;
        return aux; 
    }
}

export {Character}