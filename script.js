
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let random = Math.random() * 10;
    if (random <= 10 / 3) return "rock";
    else if (random <= ((10 / 3) * 2)) return "paper";
    else return "scissor";
}

function getHumanChoice() {
    while (true) {
        let userInput = prompt("Enter Rock/paper/scissor:", "invalid");
        userInput = userInput.toLowerCase();
        if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
            return userInput;
        }
        else alert("Please enter a valid choice in the next prompt!!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "paper")
            ++computerScore && alert("You lose! Paper beats Rock");
        else
            ++humanScore && alert("You win! Rock beats Scissor");
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissor")
            ++computerScore && alert("You lose! Scissor beats Paper");
        else
            ++humanScore && alert("You win! Paper beats Rock");
    }
    else {
        if (computerChoice === "rock")
            ++computerScore && alert("You lose! Rock beats Scissor");
        else
            ++humanScore && alert("You win! Scissor beats Paper");
    }
}

function displayScore() {
    let scoreTable = [["UserScore", humanScore], ["ComputerScore", computerScore]];
    console.log("Score Table:");
    console.table(scoreTable);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Final Result:");
    if (humanScore > computerScore) {
        console.log("You Won!");
        displayScore();
    }
    else { 
        console.log("You Lost!"); 
        displayScore(); 
    }
}

// displayScore();
playGame();