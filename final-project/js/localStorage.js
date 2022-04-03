export function getLs(key){
    //Gets the key for a slot and returns 
    //if (localStorage.getItem(key)!== undefined){
        
        return JSON.parse(localStorage.getItem(key))

    //}else{
    //        return[]
    //    }
   
   

}

export function updateLs(key, library){
    //Gets the js object, stringfies it and saves it to LS
    //
    
    localStorage.setItem(key, JSON.stringify(library));
    console.log (library)
    console.log(localStorage);



}