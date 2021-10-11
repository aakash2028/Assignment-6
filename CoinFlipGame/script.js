var coinFlip = Math.round(Math.random());
var result = "";
var choice = window.prompt("Enter 'H' for Heads or 'T' for Tails");
if(coinFlip == 0){
    result = "F";
}else if(coinFlip == 1){
    result = "H";
}
if(result == "H" && choice == "H"){
    window.alert("The flip was heads and you chose heads...you win!");
}else if(result == "H" && choice == "T"){
    window.alert("The flip was heads but you chose tails...you lose!");
}else if(result == "T" && choice == "H"){
    window.alert("The flip was tails but you chose heads...you lose!");
}else if(result == "T" && choice == "T"){
    window.alert("The flip was tails and you chose tails...you win!");
}