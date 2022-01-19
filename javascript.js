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
          return("lose");

     }
     //"You Win!"
     else if(playerselect === "ROCK" && computerselect === "SCISSORS" ){

          console.log("You Win! Rock beats Scissors");
          return("win");

     }
     else if(playerselect === "PAPER" && computerselect === "ROCK" ){

          console.log("You Win! Paper beats Rock");
          return("win");

     }
     //If player input a invalid value
     else {

          console.log("You didn't input a valid value");
          return("undefinied");
     }


   }


function playerSelection(){

          let selected = prompt("Input Rock/Paper/Scissors:");
          return selected;

}


   function game(){

          var result = "";
          var contwin = 0;
          var contlose= 0

          for(let i=0; i<5; i++){

                    result = playRound(playerSelection(),computerPlay());
                    if(result === "win"){

                         contwin++;

                    }
                    else if(result === "lose"){

                         contlose++;

                    }

          }

          if(contwin > contlose){

               return("The Player win the game!");
          }
          else if(contwin < contlose){

               return("The Player lose the game!");
          }
          else{

               return("The game is a Draw!");
          }

   }



   
   //const playerSelection = "rock";
   //const computerSelection = computerPlay();
   console.log(game());