export function qs(selector){
    /*
do a querySelector lookup @param {string} selector The selector passed to querySelector
@return {element} The matching element or null if not found /
function qs(selector) { }
*/
const selected = document.querySelector(selector);

if (selected){
    return selected;

}else{
    return null;
}
}

export function onTouch(elementSelector, callback) { 
/*add a touchend event listener to an element for mobile 
with a click event fallback for desktops @param {string} 
elementSelector The selector for the element to attach the 
listener to
* @param {function} callback The callback function to run
*/

//elementSelector.addEventListener("touchend", callback);
elementSelector.addEventListener("click", callback);

}