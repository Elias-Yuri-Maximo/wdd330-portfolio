

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
    card.setAttribute('id', 'card'+1);
    //------------------------------------------------
    let hr = document.createElement("hr");
    card.appendChild(hr);
  
    //---------------------------------------------
    
    if( element.volumeInfo.imageLinks.smallThumbnail){
    let image = document.createElement("img");
    image.setAttribute('src', element.volumeInfo.imageLinks.smallThumbnail)
    card.appendChild(image);
    }
    

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
    let description = document.createElement("p");
    description.innerHTML = element.volumeInfo.description
    content.appendChild(description);
    //---------------------------------------------
    //author
    let author = document.createElement("p");
    author.setAttribute('class', 'hiddenInfo');
    author.innerHTML = element.volumeInfo.authors[0];
    content.appendChild(author);
    //---------------------------------------------
    //price
    //let price = document.createElement("p");
    //price.setAttribute('class', 'hiddenInfo');
    //price.innerHTML = element.saleInfo.retailPrice.amount;
    //content.appendChild(price);
    //---------------------------------------------
    //publish date
    //---------------------------------------------
    //publisher subtitle
    //---------------------------------------------
    //bookcode

    
    
    
    
    
    card.appendChild(content);
    //ENDS CREATING CONTENT CARD
    //-----------------------------------------------
    
    console.log(element);
    console.log('-----------------------------------------------------')
     
    document.querySelector("#responses").appendChild(card);

    i++;
  }

}


