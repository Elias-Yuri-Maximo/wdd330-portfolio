//const form = document.forms['search'];
//calls all forms and selects 'search' from it
//const input = form.elements.searchInput;

input.addEventListener('focus', () => alert('focused'), false);
//Focus occurs when the cursor is placed on a field of the form

input.addEventListener('blur', () => alert('blurred'), false);
//Blue triggers when user moves focus away from the form

input.addEventListener('change', () => alert('changed'), false);
//Change event triggers when user moves cursor away
//AFTER CHANGING IT 


const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

input.value = 'Search Here';

input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);

    

//There is a type of event that avoids the submit from working, 
//that can be used in order to avoid the user sending wrong info

    const label = form.querySelector('label');
    const error = document.createElement('div');
    error.classList.add('error');
    error.textContent = '! Your name is not allowed to start with X.';
    label.append(error);
    
    function validateInline() {
        const heroName = this.value.toUpperCase();
        if(heroName.startsWith('X')){
        error.style.display = 'block';
        } else {
        error.style.display = 'none';
        }
    }