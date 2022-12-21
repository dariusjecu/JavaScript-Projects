import {getElement} from "./utils.js"

export default function Character(data){
    
    Object.assign(this, data);

    this.getNewElement = getElement(this, 0);
    this.get_Element = getElement(this, 1);
    
}