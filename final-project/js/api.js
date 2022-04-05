import { createBook } from "./myLibrary.js";


export let uniData = {} 

export default function searchGoogleBooks(query){
    
    const url = 'https://www.googleapis.com/books/v1/volumes?q='+query+'&key=AIzaSyC6x4GpMpFVOACgMcUR2CZIfPqzB-3LAP4';
    
    
   

    //console.log(url);
    fetch(url)
    .then(function (response){ 
        return response.json()
    })
    .then(function(data){
        //Render Responses grabas the answer and prints them out on the HTML
        renderResponse(data)
        uniData = {}
        uniData = data
        console.log(data)
    })
    //.then(response => response.json())
    //.then(data => console.log(data));

    
    
}

export  function renderResponse(data){
//callback function that renders the answers on the screen
//(check for pagening later)
    //let book_list = data;
    //return book_list;
    document.querySelector("#responses").innerHTML = '';


    console.log(data)
   let i=0
  for (let element of data.items){
    //CREATES THE LI CARD
    let card = document.createElement("li");
    card.setAttribute('id', i);
    //---------------------------------------------
    //--------------------------------------------
    //Creates a di for the image and button
    let imagenBtn = document.createElement('div');
    imagenBtn.setAttribute('class', 'imagenBtn')

    //---------------------------------------------
    
    if( element.volumeInfo.imageLinks !== undefined){
    let image = document.createElement("img");
    image.setAttribute('src', element.volumeInfo.imageLinks.thumbnail)
    imagenBtn.appendChild(image);
    }
    let br = document.createElement('br');
    imagenBtn.appendChild(br);

    //creates the button
    let button = document.createElement('input');
    button.setAttribute('type','button')
    button.setAttribute('id', i);
    button.value = 'Add book to collection'


    button.addEventListener('click',  createBook)


    imagenBtn.appendChild(button)

    card.appendChild(imagenBtn)
    //---------------------------------------------
    //---------------------------------------------
    //CREATES THE CONTENT CARD    
    let content = document.createElement("div");


    //-----------------------------------------------
    //title
    let title = document.createElement("h3");
    title.innerHTML = element.volumeInfo.title
    content.appendChild(title);
    //----------------------------------------------
    //descript
    if(element.volumeInfo.description !== undefined){
    let description = document.createElement("p");
    description.setAttribute('id', 'description');
    description.innerHTML = element.volumeInfo.description
    content.appendChild(description);
    }//else{
   // let description = document.createElement("p");
   // description.innerHTML = ''
   // content.appendChild(description);

    //}
    //---------------------------------------------
    //author
    if(element.volumeInfo.authors!== undefined){
    let author = document.createElement("p");
    author.setAttribute('id', 'author');
    author.setAttribute('class', 'hiddenInfo');
    author.innerHTML = element.volumeInfo.authors[0];
    content.appendChild(author);
    }//else{
       // let author = document.createElement("p");
       // author.innerHTML = ''
        //content.appendChild(author);

   // }
    //---------------------------------------------
    //price
    if(element.saleInfo.retailPrice!==undefined){
    let price = document.createElement("p");
    price.setAttribute('id', 'price');
    price.setAttribute('class', 'hiddenInfo');
    price.innerHTML = '$'+element.saleInfo.retailPrice.amount;
    content.appendChild(price);
    }//else{
    //let price = document.createElement("p");
    //price.setAttribute('class', 'hiddenInfo');
    //price.innerHTML = '';
    //content.appendChild(price);
    
    //---------------------------------------------
    //publish date
    if(element.volumeInfo.publishedDate!==undefined){
        let publishedDate = document.createElement("p");
        publishedDate.setAttribute('id', 'publishedDate');
        publishedDate.setAttribute('class', 'hiddenInfo');
        publishedDate.innerHTML = element.volumeInfo.publishedDate;
        content.appendChild(publishedDate);
        }
    //---------------------------------------------
    //publisher 
    if(element.volumeInfo.publisher!==undefined){
        let publisher = document.createElement("p");
        publisher.setAttribute('id', 'publisher');
        publisher.setAttribute('class', 'hiddenInfo');
        publisher.innerHTML = element.volumeInfo.publisher;
        content.appendChild(publisher);
        }
    //---------------------------------------------
    //etag
    if(element.etag!==undefined){
        let etag = document.createElement("p");
        etag.setAttribute('id', 'etag');
        etag.setAttribute('class', 'hiddenInfo');
        etag.innerHTML = element.etag;
        content.appendChild(etag);
        }

    //----------------------------------------------
    //CREATES THE ADD BOOK BUTTON
    //----------------------------------------------



    
    
    
    
    
    card.appendChild(content);
    //ENDS CREATING CONTENT CARD
    //-----------------------------------------------
    
    //console.log(element);
    //console.log('-----------------------------------------------------')
    let hr = document.createElement('hr')
    document.querySelector("#responses").appendChild(hr)
    document.querySelector("#responses").appendChild(card);


    i++;
  }

}


