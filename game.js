function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let selection = ['Rock', 'Paper', 'Scissors'];
function computerPlay(){
    var i = selection[getRandomInt(3)].toLowerCase();
    console.log("Computer playing: ",i);
    return i;
}
let option = prompt("Rock / Paper / Scissors: ").toLowerCase();

function round(playerSelection, computerSelection){
    if (option == 'rock' || option == 'paper' || option == 'scissors'){
        // console.log("\nYou selected: ", option);
        if (option =='rock' && computerSelection == 'scissors') {
            return alert('You Win! Rock beats Scissors');
        } else if (option =='paper' && computerSelection == 'rock'){
            return alert("You Win! Paper beats Rock!");
        } else if (option =='scissors' && computerSelection == 'paper'){
            return alert("You Win! Scissors beats Paper!");
        } else if (option =='scissors' && computerSelection == 'rock') {
            return alert('You Lose! Rock beats Scissors');
        } else if (option =='rock' && computerSelection == 'paper'){
            return alert("You Lose! Paper beats Rock!");
        } else if (option =='paper' && computerSelection == 'scissors'){
            return alert("You Lose! Scissors beats Paper!");
        }
    } else{
        return alert("You can't select other items!");
    }
}

const computerSelection = computerPlay();
//computerPlay();
round(option,computerSelection);
