 import {updateLs, getLs} from './localStorage.js';
 import { uniData } from "./api.js";
 import { myLibrary } from "./main.js";
 
 
 
 
 export class Library{
    constructor(books){
     this.books = books;
     this.key = 'myLibrary';
    
    }

    addBook(book){
        this.books.push(book);
        //console.log(myLibrary)

        this.renderBooks();
        updateLs(this.key, this.books);

    }
    deleteBook(event){

        
        const etag = event.target.id;
        console.log(etag, this.books)

        for (let book of this.books){
            if (book.etag === etag){
                let i = this.books.indexOf(book)
                //console.log(this.books.indexOf(book))
                this.books.splice(i,1)
                
            }
        }
        this.renderBooks();

      
    
        updateLs(this.key, this.books);

    }     

    renderBooks(){

        let gallery = document.querySelector('.gallery-grid')
        gallery.innerHTML = ''
        //console.log(this.books)
        for (let book of this.books){
            let card = document.createElement("figure");
            
            let image = document.createElement("img");
            image.setAttribute('src', book.imgPath)
            image.setAttribute('alt', book.title)
            card.appendChild(image);

            let title = document.createElement("h3");
            title.innerHTML = book.title
            card.appendChild(title);

            let snippet = document.createElement("p");
            snippet.innerHTML = book.textSnippet;
            card.appendChild(snippet);
            
            //Cria a div onde estarão os botões
            let btnDiv = document.createElement('div')

            let button = document.createElement('input');
            button.setAttribute('type','button')
            button.setAttribute('id', book.etag);
            button.value = 'Delete Book';

        
            button.addEventListener('click', removeBook)

            btnDiv.appendChild(button);

            card.appendChild(btnDiv)

            


            gallery.appendChild(card)
        }

    }
    
}

// class book{
//    constructor(etag,title, author, imgPath, description, publisher ){
//        this.etag = etag;
//        this.title = title;
//        this.author = author;
//        this.imgPath = imgPath;
//        this.description = description;
//        this.publisher = publisher;
//        }


//}


function removeBook(event){
    myLibrary.deleteBook(event)
}

////////////////////////////////////////////////////////////////////////////////
//////////////CREATE BOOK FUNCTION//////////////////////////////////////////////




 function createBook(event){
    //creates an instance of book
    //console.log(event.target.id)
    const id = parseInt(event.target.id);
    //console.log(id)
    //console.log(uniData.items[id]);
    let bookInfo = uniData.items[id];

    const book = {
        etag : checkElement(bookInfo.etag),
        title : checkElement(bookInfo.volumeInfo.title),
        author : checkAuthor(bookInfo.volumeInfo.authors),
        imgPath :  checkImage(bookInfo.volumeInfo.imageLinks),
        description :  checkElement(bookInfo.volumeInfo.description),
        publisher :  checkElement(bookInfo.volumeInfo.publisher),
        price:  checkPrice(bookInfo.saleInfo),
        pageCount: checkElement(bookInfo.volumeInfo.pageCount),
        textSnippet: checkSnippet(bookInfo.searchInfo)
    }
    console.log(book)

    //console.log(myLibrary)

    //Calls the add book function
    myLibrary.addBook(book)

}

function checkSnippet(element){
    if (element === undefined){
        return 'No description registered by the author'
    }else{
        return element.textSnippet
    }
}



function checkElement(element){
    if (element === undefined){
        return 'Not Registered'
    }else{
        return element
    }
}

function checkImage(element){
    if (element === undefined){
        return ''
    }else{
        return element.thumbnail
    }
}

function checkPrice(element){
    //Checks if the price is registered and the book is for sale
    if (element === undefined){
        return 'Not registered'
    }else{
        if (element.saleability == "NOT_FOR_SALE"){
            return "NOT_FOR_SALE"
        }else{

        return element.retailPrice.amount
        }
    }
}

function checkAuthor(element){
    if (element === undefined){
        return 'Not registered'
    }else{
        return element[0]
    }
}

export default Library
export {createBook}