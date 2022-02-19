import { getTodos } from "./backInAMoment.js";
import { readFromLS, writeToLS} from "./ls.js";
import { qs,onTouch } from "./utilities.js";

let todoList = null;

export default class Todos{
    constructor(){
        this.element = qs('#unordered-list');
        this.key = 'toDoList';
        todoList = readFromLS(this.key);
        

    }
    addListEventListeners(){
        
    }

    addFixedEventListeners(){
        onTouch(qs('#All'),filterList);
        onTouch(qs('#Active'),filterList);
        onTouch(qs('#Completed'),filterList);
        

    }

    

}

