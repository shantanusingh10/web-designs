function do_game(){
	while(true)
	{
		var numguesses=0;
		var number = Math.floor(Math.random()*100+1);
		var finished=0;
		var guess=parseInt(number);
		while(!finished){
			var guess = prompt("I've guessed an integer number from 1 to 100. What is it ?");
			numguesses+=1;
			finished = check(guess,number);
	}
	alert("Congratulations you've won the game!!!\n It took you" + numguesses + "guesses to win this game");
	more = confirm("Press Ok to play more. Cancel to exit");
	if(more==0)break;

	}		
}
function check(guess,number){
	if(isNaN(guess)){
		alert("Please enter a number");
		return false;
		}	
	else if(guess<1 || guess>100){
		alert("Please enter a number from 1 to 100");
		return false;
		}
	else if(guess<number){
		alert("Your number is less than my guessed number");
		return false;
		}
	else if(guess>number){
		alert("Your number is more than my guessed number");
		return false;
		}
	else{
			return true;
		}
}