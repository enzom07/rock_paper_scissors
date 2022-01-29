var total=0;
var result = "";
var contwin = 0;
var contlose= 0


function computerPlay(){


   let num = Math.floor(Math.random() * 3);
   var jugada= "";

   //If is 0 is Rock
   if(num === 0){

        jugada = 'Rock';
   }
   //If is 1 is Paper
   else if(num === 1){

        jugada = 'Paper'
   }
   //If is 2 is Scissors
   else{
        
        jugada = 'Scissors';
   }
   return jugada;
}

function playRound(playerSelection, computerSelection) {
     
     var playerselect = playerSelection.toUpperCase();
     var computerselect = computerSelection.toUpperCase();

     //Draws situations
     if(playerselect === "ROCK" && computerselect === "ROCK" ){

          console.log("It's a DRAW!");
          return("draw");

     }
     else if(playerselect === "PAPER" && computerselect === "PAPER" ){

          console.log("It's a DRAW!");
          return("draw");

     }
     else if(playerselect === "SCISSORS" && computerselect === "SCISSORS" ){

          console.log("It's a DRAW!");
          return("draw");

     }
     //"You Lose!"
     else if(playerselect === "SCISSORS" && computerselect === "ROCK" ){

          console.log("You Lose! Rock beats Scissors");
          return("lose");

     }
     else if(playerselect === "ROCK" && computerselect === "PAPER" ){

          console.log("You Lose! Paper beats Rock");
          console.log(playerselect+" "+computerselect);
          return("lose");

     }
     else if(playerselect === "PAPER" && computerselect === "SCISSORS" ){

          console.log("You Lose! Scissors beats Paper");
          console.log(playerselect+" "+computerselect);
          return("lose");

     }
     //"You Win!"
     else if(playerselect === "ROCK" && computerselect === "SCISSORS" ){

          console.log("You Win! Rock beats Scissors");
          console.log(playerselect+" "+computerselect);
          return("win");

     }
     else if(playerselect === "PAPER" && computerselect === "ROCK" ){

          console.log("You Win! Paper beats Rock");
          console.log(playerselect+" "+computerselect);
          return("win");

     }
     else if(playerselect === "SCISSORS" && computerselect === "PAPER" ){

          console.log("You Win! Scissors beats Paper");
          console.log(playerselect+" "+computerselect);
          return("win");

     }
     //If player input a invalid value
     else {

          console.log("You didn't input a valid value");
          console.log(playerselect+" "+computerselect);
          return("undefinied");
     }


   }


/*function playerSelection(){

          let selected = prompt("Input Rock/Paper/Scissors:");
          return selected;

}*/

     //Select all buttons elements
     const buttons = document.querySelectorAll('button');
     //Create divs in memory
     const div = document.createElement('div');  
     
     buttons.forEach((button) => {

          // and for each one we add a 'click' listener
          button.addEventListener('click', () => {
     
            result = playRound(button.id,computerPlay());
            if(result === "undefinied"){

               console.log("jugador ingresa valor no valido,apriete again");
               div.textContent = 'Player:'+ contwin + "||"+ 'Computer:'+ contlose; 
            }
            else if(result === "lose"){

               contlose++;
               total++;
               div.textContent = 'Player:'+ contwin + "||"+ 'Computer:'+ contlose; 

           }
           else if(result === "draw"){

               
               div.textContent = 'Player:'+ contwin + "||"+ 'Computer:'+ contlose; 

           }
           else if(result === "win"){

               contwin++;
               total++;
               div.textContent = 'Player:'+ contwin + "||"+ 'Computer:'+ contlose; 

           }
           if(total === 5){ 
               if(contwin > contlose){

                    total=0;
                    contwin=0;
                    contlose=0;
                    console.log("The Player win the game!");
                    
               }
               else if(contwin < contlose){

                    total=0;
                    contwin=0;
                    contlose=0;
                    console.log("The Player lose the game!");
                    
               }
               else{

                    total=0;
                    contwin=0;
                    contlose=0;
                    console.log("The game is a Draw!");
                    
          }             
     }          
          });
        });

   
   //const playerSelection = "rock";
   //const computerSelection = computerPlay();
   //console.log(game());