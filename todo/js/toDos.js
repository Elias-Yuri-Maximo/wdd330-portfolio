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
        //adds the events to the controller buttons
        onTouch(qs('#All'),filterList);
        onTouch(qs('#Active'),filterList);
        onTouch(qs('#Completed'),filterList);

        onTouch(qs('#addTask'),addTodo);
    }

    addTodo(){
        /*Add a method to the Todos class called addTodo. 
        It should grab the input in the html where users 
        enter the text of the task, then send that along
        with the key to a SaveTodo() function. Then update
        the display with the current list of tasks */
        const taskName = qs('#taskName').value;
        saveTodo(taskName, self.key);
       
    }

    

}

function filterList(){
    //Depending on the button that was clicked, do a different 
    //Sort of filtering and call the rendering
    alert('Worked');
    console.log(todoList)
}



function saveTodo(task, key) { 
    /*In the Todo.js module, but not in the Todos class, create the following function
     build a todo object, add it to the todoList, and save the new list to local storage.
    @param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.
    
    A todo should look like this: { id : timestamp, content: string, completed: bool }
    */
    //Simple timestamp
    const timestamp = new Date().getTime();
    
    //Completed checks if the checkbox of this task is checked
    
    const completed = false;
    
    //Stringfies the HTML tag 
    const content = task;
    
    //Inserts all to todo object 
    const todoObject  = {id:timestamp, content:content, completed:completed};
    
    //Appends to the toDoList
    todoList.push(todoObject);
    
    //Writes it tnto the LS
    writeToLS(key, todoList);
    }