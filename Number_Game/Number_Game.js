var randomNumber = Math.floor(Math.random() * 1000) + 1;

function checkGuess() {
    var userNum = parseInt(document.getElementById("guessInput").value);
    var feedback = document.getElementById("feedback");
    if (userNum < randomNumber) {
        feedback.textContent = "Too low, try again!";
    } 
    else if (userNum > randomNumber) {
        feedback.textContent = "Too high, try again!";
    }
    else {
        feedback.textContent = "Congratulations! You guessed the number!";
        //reset num
        randomNumber = Math.floor(Math.random() * 1000) + 1;
    }
    //clear input text
    document.getElementById("guessInput").value = "";
}