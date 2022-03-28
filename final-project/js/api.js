

export default function searchGoogleBooks(){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=flores&key=AIzaSyC6x4GpMpFVOACgMcUR2CZIfPqzB-3LAP4';
    let answer = {}
    
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

    console.log(data)
}


