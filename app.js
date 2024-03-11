let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const genCompChoice =()=>{
    const options=["rock","scissors","paper"];
    const randIdx =Math.floor(Math.random() *3);
    return options[randIdx]; 
}

const drawGame =()=>{
    console.log("The Game was draw");
    msg.innerHTML="Game was Draw play again!";
    msg.style.backgroundColor ="#081b31"
}

const showWinner=(userWin) =>{
    if(userWin){
        console.log("you win");
        msg.innerHTML="you win!";
        msg.style.backgroundColor ="green" 

    }
    else{
        console.log("you lose");
        msg.innerHTML="you lose";
        msg.style.backgroundColor ="red"
    }
}

const playGame=(userChoice) =>{
    console.log("userChoice = " + userChoice); //user choice
    const compChoice = genCompChoice();
    console.log("compScore = " + compChoice);   //comp Choice 
    if(userChoice==compChoice)
    {
       drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice=="paper")
        {
              userWin=compChoice==="Scissors"?false:true;
        }
        else{
           userWin =compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
     playGame(userChoice);
    });
});