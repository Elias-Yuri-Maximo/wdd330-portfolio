



function saveTodo(task, key) { 
/*In the Todo.js module, but not in the Todos class, create the following function
 build a todo object, add it to the todoList, and save the new list to local storage.
@param {string} key The key under which the value is stored under in LS @param {string} task The text of the task to be saved.

A todo should look like this: { id : timestamp, content: string, completed: bool }
*/
//Simple timestamp
const timestamp = new Date().getTime();

//Completed checks if the checkbox of this task is checked

const completed = task.checkbox.checked;

//Stringfies the HTML tag 
const content = task;

//Inserts all to todo object 
const todoObject  = {id:timestamp, content:content, completed:completed};

//Appends to the toDoList
todoList.push(todoObject);

//Writes it tnto the LS
writeToLS('toDoList', todoList);
}

export function getTodos(key){
/* check the contents of todoList, a local variable 
containing a list of ToDos. If it is null then pull 
the list of todos from localstorage, update the local 
variable, and return it
@param {string} key The key under which the value is
stored under in LS @return {array} The value as an array 
of objects
*/
if (todoList === null){
    todoList = readFromLS(key);
    return todoList;
}

}

export function addTodo(){
    /*Add a method to the Todos class called addTodo. 
    It should grab the input in the html where users 
    enter the text of the task, then send that along
    with the key to a SaveTodo() function. Then update
    the display with the current list of tasks */
    //const taskName = qs('#taskName').value;
    //saveTodo(taskName,'toDoList');
    console.log('It worked');
    alert('Worked')
    
}

export function renderTodoList(list,element){
    /* foreach todo in list, build a li element for the todo,
     and append it to element
    @param {array} list The list of tasks to render to HTML 
    @param {element} element The DOM element to insert our 
    list elements into.
*/
    list.forEach(todo => {

        li = document.createElement('li');

        

        
    });
}




/*
PROTOTYPE CODE
export {createTask, deleteTask, markTask}

function createTask(taskLabel){
    //Creates the task 
    let form = document.createElement("form");
    form.setAttribute("class", "task");
    let checkbox = document.createElement("input");



}
function deleteTask(){

}

function markTask(){

}
*/
