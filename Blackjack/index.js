let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let buttonStartEl = document.getElementById("start-button-el");

let sum = 0;

function reset()
{
    messageEl.textContent = "Want to play a round?";
    cardsEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
    buttonStartEl.textContent = "START GAME";

    sum = 0;
}

function draw_card()
{
    if(sum < 21)
    {
        let newCard = Math.floor(Math.random()*13) + 1;

        if(newCard === 11)
            cardsEl.textContent += " " + "J";
        else if(newCard === 12)
            cardsEl.textContent += " " + "Q";
        else if(newCard === 13)
            cardsEl.textContent += " " + "K";
        else if(newCard === 1)
            cardsEl.textContent += " " + "A";
        else
            cardsEl.textContent += " " + newCard;

        if(newCard === 11 || newCard === 12 || newCard === 13)
            sum += 10;
        else if(newCard === 1)
            sum += 11;
        else
            sum +=newCard;
        sumEl.textContent = "Sum: " + sum;

        if(sum < 21)
        {
            messageEl.textContent = "Do you want to draw a new card?";
            buttonStartEl.textContent = "NEW CARD";
        }
        else if(sum === 21)
        {
            messageEl.textContent = "You have a blackjack!!!";
            buttonStartEl.textContent = "START AGAIN";
            return;
        }
        else
        {
            messageEl.textContent = "Game over!";
            buttonStartEl.textContent = "START AGAIN";
            return;
        }
    }
    else
        reset();
}