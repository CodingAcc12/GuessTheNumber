// generation of random value
var y = Math.floor(Math.random() * 10+1);
var guess = 1;

function submit() {
var x = document.getElementById("guessField").value; 
var player= localStorage.getItem("playername");
if(x==y)
{
    alert("CONGRATULATIONS!!!" + player + ". You guessed it right in " + guess + " gusses." );
    guess= 1;
}
 else if(x>y)
 {
    guess++;
    alert("OOPS TRY A SMALLER NUMBER")
 }
 else
{
    guess++;
    alert("OOPS TRY A LARGER NUMBER")
}
}

function playAgain() {
y = Math.floor(Math.random() * 10+1);
guess = 1;
document.getElementById("guessField").value = "";

alert("GAME HAS BEEN RESET")

}



// count of attempts

// until hit
  
// function for the number sent by the user