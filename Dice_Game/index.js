let playerTitle = document.getElementsByClassName("title");
let playerScore = document.getElementsByClassName("score");
let player1Dices = document.getElementsByClassName("dice-1");
let player2Dices = document.getElementsByClassName("dice-2");

let winner = document.getElementById("winner");
let RollDice = document.getElementById("roll-dice");
let StartAgain =document.getElementById("again-dice");

let score1 = 0;
let score2 = 0;

let player1 = true;
let player2 = false;

RollDice.addEventListener("click", function(){
        if(player1)
                {
                    score1 = Game(score1, 0);
                    console.log(score1);
                    playerTitle[1].style.textDecoration = "none";
                }
        else
                {
                    score2 = Game(score2, 1);
                    console.log(score2);
                    playerTitle[0].style.textDecoration = "none";
                }
        player1 = !player1;
        player2 = !player2;
        if(score1 >= 20)
             display(0);
        else if(score2 >= 20)
            display(1);
})

StartAgain.addEventListener("click", function(){
    score1 = 0;
    score2 = 0;
    player1 = true;
    player2 = false;

    for(let i=0; i<playerTitle.length; i++)
    {
        playerTitle[i].style.textDecoration = "none";
        playerScore[i].innerHTML = `Score: 0`;
        player1Dices[i].innerHTML = "_";
        player2Dices[i].innerHTML = "_";
    }

    StartAgain.style.display = "none";
    RollDice.style.display = "inline";
    winner.innerHTML = "";
})
    

function Game(score, poz){
    let dice1 = parseInt(Math.random()*6) + 1;
    let dice2 = parseInt(Math.random()*6) + 1;
    player1Dices[poz].innerHTML = dice1;
    player2Dices[poz].innerHTML = dice2;
    score += dice1 + dice2;
    console.log(score);
    playerScore[poz].innerHTML = `Score: ${score}`;
    playerTitle[poz].style.textDecoration = "underline";
    return score;
}

function display(poz){
    winner.innerHTML = `<h1>The winner is ${playerTitle[poz].textContent} !!!</h1>`;
    RollDice.style.display = "none";
    StartAgain.style.display = "inline";
}