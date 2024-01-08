let choices = document.querySelectorAll("img");
let userScore = 0;
let compScore = 0;
let user = document.querySelector("#user");
let comput = document.querySelector("#comp");

let comp = () => {
    const options = ["rock","paper","scissor"];
    const random_Index = Math.floor(Math.random() * 3);
    return options[random_Index];
}

let showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        msg.innerText = `Congratulations !! You Won !! Your ${userChoice} defeated computer's ${compChoice}`;
        userScore++;
        user.innerText = userScore;
    }
    else{
        msg.innerText = `You Lost !! Your ${userChoice} was defeated by computer's ${compChoice}`;
        compScore++;
        comput.innerText = compScore;
    }
}

let playgame = (userChoice) =>
{
    let compChoice = comp();
    if(userChoice===compChoice)
    {
        let msg = document.querySelector("#msg");
        msg.innerText = `Game draw !! Computer Selected ${userChoice}`;
    }
    else
    {
        userWin=true;
        if(userChoice===rock)
        {
            userWin = compChoice==="paper" ? false : true;
        }
        else if(userChoice===paper)
        {
            userWin = compChoice==="scissor" ? false : true;
        }
        else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) =>
{
    choice.addEventListener("click",() => 
    {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})