





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
