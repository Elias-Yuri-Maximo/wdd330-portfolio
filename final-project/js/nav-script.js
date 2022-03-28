function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


//const event = new Date();

//const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//currentdate.textContent = event.toLocaleDateString('en-UK', options);

