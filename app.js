let userScore = 0;
let compScore = 0;

const msg = document.querySelector(".msg");
const yScore = document.querySelector("#your-score");
const cScore = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("computer Choice = ", compChoice);


    if(userChoice === compChoice) {
        console.log("Game Draw");
        msg.innerText = "Game Draw!";
    } else {
        if(userChoice === "rock") {
            if(compChoice === "paper") {
                console.log("Computer Win");
                msg.innerText = "Computer Win! Computer's Paper beats rock.";
                compScore++;
                cScore.innerText = compScore;
            } else {
                console.log("You Win");
                msg.innerText = "You Win! Your rock beats scissor.";
                userScore++;
                yScore.innerText = userScore;
            }
        } else if (userChoice === "paper") {
            if(compChoice === "rock") {
                console.log("You Win");
                msg.innerText = "You Win! Your paper beats rock.";
                userScore++;
                yScore.innerText = userScore;
            } else {
                console.log("Computer Win");
                msg.innerText = "Computer Win! computer's scissor beats paper.";
                compScore++;
                cScore.innerText = compScore;
            }
        } else if (userChoice === "scissor") {
            if (compChoice === "paper") {
                console.log("You Win");
                msg.innerText = "You Win! Your scissor beats paper.";
                userScore++;
                yScore.innerText = userScore;
            } else {
                console.log("Computer Win");
                msg.innerText = "Computer Win! Computer's rock beats scissor.";
                cScore.innerText = compScore;
                compScore++;
            }
        }
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}