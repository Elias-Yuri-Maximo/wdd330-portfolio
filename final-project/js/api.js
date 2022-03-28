

export function searchGoogleBooks(){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=flores&key=AIzaSyC6x4GpMpFVOACgMcUR2CZIfPqzB-3LAP4';
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}


