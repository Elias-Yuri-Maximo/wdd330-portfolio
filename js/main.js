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
    },
    {
        label: "Week 3:",
        theme:"This, Objects, DOM and Events",
        url: "week3/notes-week3.html"
    },
    {
        label: "Week 4:",
        theme:"Forms, Objects Oriented Programming, Modern JS",
        url: "week4/week4-notes.html"
    },
    {
        label: "Week 5:",
        theme:"Debugging",
        url: "week5/notes5.html"
    },
    {
        label: "Challenge:",
        theme:"to do list",
        url: "todo/todo.html"
    },
    {
        label: "Week 7:",
        theme:"Further Functions and AJAX",
        url: "week7/week7-notes.html"
    },
    {
        label: "Week 8:",
        theme:"Canvas and Other graphic frameworks",
        url: "week8/week8-notes.html"
    },
    {
        label: "Week 9:",
        theme:"APIs",
        url: "week9/week9-notes.html"
    },
    {
        label: "Week 10:",
        theme:"Forms a nd fetch API",
        url: "week10/week10-notes.html"
    },
    {
        label: "Final Project:",
        theme:"Book Management System",
        url: "final-project/index.html"
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