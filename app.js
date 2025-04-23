let userScore = 0;
let compScore = 0;
const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#comp-score");
const msg = document.querySelector(".msg");

const choices = document.querySelectorAll(".choice");

const gameDraw = (() => {
    console.log("Game is draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "blueviolet";

})

const winner = ((userWin, compChoice, userChoice) => {
    if (userWin) {
        userScore++;
        userScoreText.innerText = userScore;
        console.log("You win");
        msg.innerText = `You win! your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScoreText.innerText = compScore;
        console.log("Computer win");
        msg.innerText =  `You lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";

    }
});

const genCompChoice = (() => {
    const option = ["paper", "rock", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return option[randomIdx];
});

const playGame = ((userChoice) => {
    console.log(userChoice);
    const compChoice = genCompChoice();
    console.log(compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice == 'paper' ? false : true;

        }
        else if (userChoice == 'paper') {
            userWin = compChoice == 'scissors' ? false : true;
        }
        else {
            userWin = compChoice == 'rock' ? false : true;
        }
        winner(userWin, userChoice, compChoice);
    }

});


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});