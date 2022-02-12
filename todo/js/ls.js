
export function readFromLS(key) { 
/*
read a value from local storage and parse it as JSON @param {string} key The key under which the value is stored under in LS
@return {array} The value as an array of objects /
function readFromLS(key) { }
*/
const jsonString = localStorage.getItem(key);
//console.log(jsonString);
return JSON.parse(jsonString);
}


export function writeToLS(key, dataArray){
    //Gets an array and stores it into a key from the ls
    let data = JSON.stringify(dataArray);
    localStorage.setItem(key, data);
}


export function checkLS(){
    //Checks if there is a toDoListStored
    //If there isn't it creates and stores an empty string
    if (localStorage.getItem('toDoList')){
       
    }
    else{
    let toDoList = {};  
    toDoList = JSON.stringify(toDoList); 
    //console.log(toDoList)
    localStorage.setItem('toDoList', toDoList); 
    }
}

