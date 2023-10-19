
var text=document.getElementById("text")
var guess=document.getElementById("guess")
var submit=document.getElementById("submit")
var randomNumber = Math.floor((Math.random () *10)+1)

function answerCheck(){
    var userGuess=guess.value

    if (userGuess > randomNumber){
        text.innerText="Number is to High, Guess Lower";
        text.style.color=("red")
    }
    else if (userGuess< randomNumber){
        text.innerText="Number is to Low, Guess Higher";
        text.style.color=("red")
    }
    else{
        text.innerText="Your Guess is Correct!";
        text.style.color=("green")
    }
    console.log("submit buttonclick")
}

submit.addEventListener("click",answerCheck)