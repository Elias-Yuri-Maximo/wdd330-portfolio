
    
//function doSomething(event){
        
    
    //console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
    //This shows all the properties of where the screen was clicked

    //console.log(event.type);
    //.type prperty shows the tipe of event that was triggered
//}

//addEventListener('click', doSomething);

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click',() => console.log('click') );
clickParagraph.addEventListener('mousedown',() => console.log('down') );
clickParagraph.addEventListener('mouseup',() => console.log('up') );


const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

//Toggles on and off the highlight class
function highlight(event){
    event.target.classList.toggle('highlight');
}

//mouseMove event will trigger whenever the mouse moves over it 
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));

//addEventListener('keydown', (event) => {
//    if (event.key === 'c' && event.ctrlKey) {
//            console.log('Action canceled!');
//        }
//    });

    // click event is thought as the tap event i the context of touch screens 

addEventListener('touchend', () => console.log('Touch stopped'));

/*
The touchmove event occurs after a user has touched the screen then moves around without leaving. It will continue to occur as long as the user is still touching the screen, even if they leave the element to which the event listener is attached.

The touchenter event occurs when a user has already started touching the surface, but then passes over the element to which the event listener is attached.

The touchleave event occurs when the user is still touching the surface, but leaves the element to which the event listener is attached.

The touchcancel event occurs when a touch event is interrupted, such as a user’s finger moving outside the document window, or too many fingers being used at once. A pop-up dialog will also cancel a touch event.
*/
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

//When removing an event listener there should not be used anonymous functions
const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//BUBLING

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
/*
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );

//CAPTURING
ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);
*/
// capturing

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);

// bubbling

ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),false );

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),false );

//Strops thee propagation
liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);
