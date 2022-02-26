import { checkLS, readFromLS, writeToLS } from "./ls.js";
import { qs,onTouch } from "./utilities.js";
import Todos from "./toDos.js";


const toDos= new Todos;

toDos.addFixedEventListeners();

//console.log(toDoList);

/*
TEST CODE
let testValuePair = { x: 5, y: 6 }

checkLS();
console.log(readFromLS('toDoList'));

writeToLS('toDoList',testValuePair);

readFromLS('toDoList')


onTouch('#deleteTask',test);

console.log(qs('#deleteTask'));

function test(){
    alert('worked');
}

*/

