const h1 = document.getElementById('title');

const listItems = document.getElementsByTagName('li');
//returns an array that is a list of the li items

listItems[0]
<< <li class='hero'>Superman</li>

listItems[1]
<< <li class='vigilante hero' id='bats'>Batman</li>

listItems[2]
<< <li class='hero'>Wonder Woman</li>

const heroes = document.getElementsByClassName('hero');
//getElementByClassName similarly returns an array of items

//Creating a function like this in order to add new items can make it ewasier
//when creating various nodes at the same time
function createElement (tag,text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el
}

//Nodes can be created with just one line
const aquaman = createElement('li','Aquaman');

//This changes the order of the items
heroes.insertBefore(aquaman, wonderWoman); 

//replace child is used when wanting to replace a node 
const h1 = document.getElementById('title');
const oldText = h1.firstChild;
const newText = document.createTextNode('Justice League of America');
h1.replaceChild(newText,oldText);

//There is a way of retrieving all CSScharacteristics from a node 
getComputedStyle(superman)
//CSSStyleDeclaration {0: "alt", 1: "animation-delay", 2: "animation-direction", 3: "animation-duration", 4: "animation-fill-mode", 5: "animation-iteration-count", 6: "animation-name", 7: "animation-play-state", 8: "animation-timing-function", 9: "background-attachment", …}

