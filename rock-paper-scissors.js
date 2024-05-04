const choices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
const myButtons = document.querySelectorAll(".myButtons");

document.body.addEventListener('keydown', event => {
     switch (event.key) {
         case "r":
            playGame("rock");
            renderGame("rock");
            break;
         case "p":
            playGame("paper");
            renderGame("paper");
            break;
         case "s":
            playGame("scissors");
            renderGame("scissors");
            break;      
     }
});



myButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let nameButton = (button.id).split("-");
        playGame(nameButton[0]);
        renderGame(nameButton[0]);
    });
});

function playGame(choice){
   let randomNum = Math.floor(Math.random() * 3);
   let status;
   const computerMove = choices[randomNum];
   
   if (choice === computerMove){
      status = "Tie";
      return [computerMove];
   } 

   else {
      switch(choice){
         case "rock":
            status = (computerMove === "paper") ? "Lose" : "Win";
            break;
         case "paper":
            status = (computerMove === "rock") ? "Win" : "Lose";
            break;
         case "scissors":
            status = (computerMove === "rock") ? "Lose" : "Win";   
      }
   }

   return [computerMove, status];
}


function renderGame(choice){
   
    const result = document.getElementById("result");
    const moves = document.querySelector(".moves");
    const scorePlayer = document.getElementById("player-score"); 
    const scoreComputer = document.getElementById("computer-score");

    const game = playGame(choice);
    if (game[1] === "Lose"){
        computerScore++;
        result.style.color = "red";
        result.textContent = `YOU ${game[1].toUpperCase()}!`;
    } 

    else if (game[1] === "Win"){
        playerScore++;
        result.style.color = "green";
        result.textContent = `YOU ${game[1].toUpperCase()}!`;
    }

    else {
        result.style.color = "black";
        result.textContent = `IT'S A TIE!`
    }

    const indexPlayer = choices.indexOf(choice);
    const indexComputer = choices.indexOf(game[0]);
    moves.innerHTML = `
                     <span class="green"> PLAYER: </span>
                      <img src="Images/${indexPlayer}.png" alt=""> 
                      <img src="Images/${indexComputer}.png" alt="">        
                      <span class="red">:COMPUTER</span>
                      
                      `;


    scorePlayer.innerHTML = `Your score: <span class="green">${playerScore}</span>`; 
    scoreComputer.innerHTML = `Computer score: <span class="red">${computerScore}</span>`;   
                   

}





