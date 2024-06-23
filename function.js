let userScore = 0;
let botScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const botScoreBoard = document.querySelector("#bot-score");

const genBotChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndIndx = Math.floor(Math.random() * 3);
    return options[rndIndx];
};

const showWinner = (userWin, userChoice, botChoice) => {
    if(userWin == true){
        userScore++;
        userScoreBoard.innerText = userScore;
        console.log("You Won");
        msg.innerText = `You Won. Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        botScore++;
        botScoreBoard.innerText = botScore;
        console.log("You Lose");
        msg.innerText = `You Lost. ${botChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
}

const playGame = (userChoice) => {
    console.log(`User Choice = ${userChoice}`)
    const botChoice = genBotChoice();
    console.log(`Bot Choice = ${botChoice}`);
    
    // Conditions of game

    if(userChoice === botChoice){
        console.log("Game Draw");
        msg.innerText = "Game Draw. Play Again" ;
        msg.style.backgroundColor = "rgb(24, 32, 44)"
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = botChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = botChoice === "scissors" ? false : true;
        }
        else{
            userWin = botChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, botChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})