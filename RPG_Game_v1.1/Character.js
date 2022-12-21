import {display} from "./utils.js";

export default function Character(data){

    Object.assign(this, data);

    this.maxHealth = this.health;

    this.getPercentage = () => {
        const percentage = (100 * this.health) / this.maxHealth;
        return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percentage <= 25 ? "danger" : ""}"
                        style="width: ${percentage}%;">
                    </div>
                </div>`;
    }

    this.getDices = function(val){
        let sum = 0;
        const array = new Array(this.diceCount).fill(0).map(function(num){
            num = Math.floor(Math.random()*6)+1;
            sum += num;
            if(val === 1)
                return `<div class="dice">${num}</div>`;
            else
                return `<div class="dice"></div>`;
        }).join("");
        if(val === 1)
            this.sum = sum;
        return array;
    }

    this.displayVal = function(data,sum , val){
        if(this.health - sum <= 0)
            this.health = 0;
        else
            this.health -= sum;
        return display(this,val);
    }
}