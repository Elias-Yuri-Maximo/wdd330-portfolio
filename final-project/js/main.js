import searchGoogleBooks  from "./api.js";
import querySelect from "./helper-functions.js";

let searchBtn = querySelect('#searchBtn')

//console.log(searchBtn)
//Sets the  
searchBtn.addEventListener('click', ()=>{
    let query = querySelect('#search').value
    searchGoogleBooks(query)
    
})




//console.log(searchBtn)
//addEvent('#searchBtn', 'onclick', searchGoogleBooks(querySelect('#search').value))

//console.log();