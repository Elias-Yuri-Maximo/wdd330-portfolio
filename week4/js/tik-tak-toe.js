let currentPlayer = 1;
let symbol = '';



for (let item of document.querySelector('form')){
    
    item.addEventListener("click", play);
    
    console.log('It works, we are the best team ever!!!! ');

}

function play(item){
    alert("Player "+currentPlayer+"'s turn");

    if (currentPlayer == 1){
        symbol = 'X';
       
        document.activeElement.value = symbol;
        currentPlayer +=1;
        console.log('Player 1 roud');


        
    } else{
        symbol = 'O';
        
        document.activeElement.value = symbol;
        currentPlayer -=1;
        console.log('player 2 round');
    }
}