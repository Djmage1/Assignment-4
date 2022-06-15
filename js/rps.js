let cpuMove;
let playerMove;
const gameArray = ["Rock", "Paper", "Scissors"];
let playerCount = 0;
let cpuCount = 0;

function computerPlay() {
    cpuMove = gameArray[Math.floor(Math.random()*gameArray.length)];

    return cpuMove;
}

function gamePlay(buttonID) {
    playerMove = buttonID;

    computerPlay();

    alert("Bot plays: " + cpuMove + 
          "\nYou play: " + playerMove);

    outcomeCalc();
}

function outcomeCalc() {
    playerNumber = document.getElementById(playerScore).innerText;
    cpuNumber = document.getElementById(cpuScore).innerText;
    move = document.getElementById(moveDisplay).innerText;

    switch(playerMove) {
        case gameArray[0]:
            if(cpuMove == gameArray[0]) {
                move = "DRAW";
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                move = "You lose";
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                move = "You win";
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[1]:
            if(cpuMove == gameArray[0]) {
                move = "You win";
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                move = "DRAW";
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                move = "You lose";
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[2]:
            if(cpuMove == gameArray[0]) {
                move = "You lose";
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                move = "You win";
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                move = "DRAW";
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;
    }
}

function updateScore() {
    
}

function scoreCheck() {
    playerCount = document.getElementById(playerScore).innerText;
    cpuCount = document.getElementById(cpuScore).innerText;

    if(playerCount = "5") {
        document.getElementById(moveDisplay).innerText = "Player Wins!!!";
    }

    else if(cpuCount = "5") {
        document.getElementById(moveDisplay).innerText = "Bot Wins!!!";
    }

}

function restart() {

}