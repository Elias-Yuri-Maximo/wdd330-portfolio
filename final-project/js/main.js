import searchGoogleBooks from "./api.js";
import querySelect from "./helper-functions.js";
import { Library} from "./myLibrary.js";
import {updateLs, getLs} from './localStorage.js';

console.log(JSON.parse(localStorage.getItem('myLibrary')))

export let myLibrary = new Library(getLs('myLibrary'));
myLibrary.renderBooks()


let searchBtn = querySelect('#searchBtn')
//console.log(searchBtn)
//Sets the  
searchBtn.addEventListener('click', ()=>{
    let query = querySelect('#search').value
    searchGoogleBooks(query)
    
    //for(let card of querySelect('#responses').childNodes){
    //    console.log(card.childNodes)
    //}
})

//console.log(uniData)





//console.log(searchBtn)
//addEvent('#searchBtn', 'onclick', searchGoogleBooks(querySelect('#search').value))

//console.log();