
let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let random = Math.random() * 10;
    if (random <= 10 / 3) return "rock";
    else if (random <= ((10 / 3) * 2)) return "paper";
    else return "scissor";
}


function playRound(humanChoice) {
    let userChoiceShow = document.querySelector("#user-choice");
    userChoiceShow.innerText = `==${humanChoice.toUpperCase()}==`;
    let computerChoice = getComputerChoice();
    let computerChoiceShow = document.querySelector("#bot-choice");
    computerChoiceShow.innerText = `==${computerChoice.toUpperCase()}==`;

    let userWon = 0;
    if(humanChoice!==computerChoice) 
    if (humanChoice === "rock") {
        if (computerChoice === "paper")
            ++computerScore && (userWon--);
        else
            ++humanScore && (userWon++);
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "scissor")
            ++computerScore && (userWon--);
        else
            ++humanScore && (userWon++);
    }
    else {
        if (computerChoice === "rock")
            ++computerScore && (userWon--);
        else
            ++humanScore && (userWon++);
    }


    let resultShow = document.querySelector(".result-box");
    if (userWon==-1) (resultShow.innerHTML = "YOU LOST") && updateColor("red","green");
    else if(userWon==0) (resultShow.innerHTML = "DRAW") && updateColor("red","red");
    else (resultShow.innerHTML = "YOU WON") && updateColor("green","red");
    updateScore();
}

function updateColor(userColor, botColor){
    let box1 = document.querySelector(".box1");
    let box3 = document.querySelector(".box3");
    box1.style["background-color"] = botColor;
    box3.style["background-color"] = userColor;
}


function updateScore() {
    let userTable = document.querySelector("#user-score");
    userTable.innerText = humanScore;
    let botTable = document.querySelector("#computer-score");
    botTable.innerText = computerScore;
}




let choices = document.querySelector(".choices");

choices.addEventListener("click", (e) => {
    if (e.target.id === "rock"){
        playRound("rock");
    }
    else if (e.target.id === "paper"){
        playRound("paper");
    }
    else if (e.target.id === "scissor"){
        playRound("scissor");
    }
}
);