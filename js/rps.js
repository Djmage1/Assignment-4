let cpuMove;
let playerMove;
const gameArray = ["Rock", "Paper", "Scissors"];
let playerCount = 0;
let cpuCount = 0;

function computerPlay() {
    cpuMove = gameArray[Math.floor(Math.random()*gameArray.length)];

    return cpuMove;
}

function gamePlay() {
    computerPlay();

    alert("Bot plays: " + cpuMove + 
          "\nYou play: " + playerMove);

    outcomeCalc();
}

function outcomeCalc() {
    switch(playerMove) {
        case gameArray[0]:
            if(cpuMove == gameArray[0]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[1]:
            if(cpuMove == gameArray[0]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;

        case gameArray[2]:
            if(cpuMove == gameArray[0]) {
                alert("You lose");
                cpuCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[1]) {
                alert("You win");
                playerCount++;
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            else if(cpuMove == gameArray[2]) {
                alert("DRAW");
                console.log("Player: " + playerCount + 
                            "\nBot: " + cpuCount);
            }
            break;
    }
}

function buttonChoice(buttonID) {
    playerMove = buttonID;

    gamePlay();
}