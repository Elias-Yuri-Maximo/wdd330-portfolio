//creates the links array
const linksArray = [
    {
        label: "Week 1:",
        theme:"Local Storage",
        url: "week1/local-storage-exercises.html"
    },
    {
        label: "Week 2:",
        theme:"Local Storage",
        url: "week2/notes-week2.html"
    }
]


//Gets the ol elemnent
let ol = document.querySelector("ol")

//for each item in linksArray add it to ol
for (let item of linksArray){

    let li = document.createElement("li");
    li.innerHTML = item.label;
    
    let a = document.createElement("a");
    a.textContent = item.theme
    a.setAttribute('href', item.url)

    li.appendChild(a)

    ol.appendChild(li)




} 