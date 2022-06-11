let option = "";
let scoreP=0, scoreC=0;
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function computerPlay(){
    let selection = ['Rock', 'Paper', 'Scissors'];
    var i = selection[getRandomInt(3)].toLowerCase();
    console.log("Computer playing: ",i);
    return i;
}

let computerSelection = computerPlay();

function round(playerSelection, computerSelection){
    option = prompt("Rock / Paper / Scissors: ").toLowerCase();
    if (option == 'rock' || option == 'paper' || option == 'scissors'){
        // console.log("\nYou selected: ", option);
        if (option =='rock' && computerSelection == 'scissors') {
            scoreP += 50;
            return alert('You Win! Rock beats Scissors');
        } else if (option =='paper' && computerSelection == 'rock'){
            scoreP += 50;
            return alert("You Win! Paper beats Rock!");
        } else if (option =='scissors' && computerSelection == 'paper'){
            scoreP += 50;
            return alert("You Win! Scissors beats Paper!");
        } else if (option =='scissors' && computerSelection == 'rock') {
            scoreC += 50;
            return alert('You Lose! Rock beats Scissors');
        } else if (option =='rock' && computerSelection == 'paper'){
            scoreC += 50;
            return alert("You Lose! Paper beats Rock!");
        } else if (option =='paper' && computerSelection == 'scissors'){
            scoreC += 50;
            return alert("You Lose! Scissors beats Paper!");
        } else if(option == computerSelection){
            return alert("It's a Tie!");
        }
    } else{
        return alert("You can't select other items!");
    }
}

function game(){
    for(let i=0; i <=5; i++){
        round(option,computerSelection);
    }
    if(scoreP > scoreC){
        return alert("You've Won!!\nScore: "+scoreP);
    } else if (scoreC > scoreP){
        return alert("So sad! You've lost\nScore: "+scoreC);
    }else{
        return alert("It was a hard game! Everyone wins!");
    }
}
//computerPlay();
//game();

