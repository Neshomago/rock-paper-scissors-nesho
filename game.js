function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let selection = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    var i = selection[getRandomInt(3)].toLowerCase();
    console.log("Computer playing: ",i);
    return i;
}


function round(playerSelection, computerSelection){
    let option = prompt("Rock / Paper / Scissors: ").toLowerCase();
    if (option == 'rock' || option == 'paper' || option == 'scissors'){
        console.log("\nYou selected: ", option);
        if (option =='rock' && computerSelection == 'scissors') {
            console.log('You Win! Rock beats Scissors');
        } else if (option =='paper' && computerSelection == 'rock'){
            console.log("You Win! Paper beats Rock!");
        } else if (option =='scissors' && computerSelection == 'paper'){
            console.log("You Win! Scissors beats Paper!");
        } else if (option =='scissors' && computerSelection == 'rock') {
            console.log('You Lose! Rock beats Scissors');
        } else if (option =='rock' && computerSelection == 'paper'){
            console.log("You Lose! Paper beats Rock!");
        } else if (option =='paper' && computerSelection == 'scissors'){
            console.log("You Lose! Scissors beats Paper!");
        }
    } else{
        return alert("You can't select other items!");
    }
}

const computerSelection = computerPlay();
//computerPlay();
round();
