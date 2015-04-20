$(document).ready(function() {
    $("button").on("click", function() {
        EvensOrOdds();
    })

    var EvensOrOdds = function() {
        var first = prompt("Choose Evens or Odds here by typing in one of the two words", "Type in the word \"even\" or \"odd\" here").toUpperCase();
        if(first != "EVEN" && first != "ODD") {
            alert("Sorry, you may have mispelled that. Try again.");
            return;
        };
        var userChoice = prompt("Now, pick a whole number 1 through 5 and enter it below", "Enter your number here");
        if(userChoice == "" || userChoice == " ") {
            alert("Sorry, that wasn't a number between 1 and 5, please try again.");
            return;
        } else if(isNaN(userChoice)) {
            alert("Sorry, that wasn't a number between 1 and 5, please try again.");
            return;
        } else if(userChoice > 5) {
            alert("Sorry, that wasn't a number between 1 and 5, please try again.");
            return;
        } else if(userChoice.indexOf("-") > -1) {
            alert("Sorry, that wasn't a POSITIVE number between 1 and 5, please try again.");
            return;
        } else if(userChoice.indexOf(".") > -1) {
            alert("Sorry, that wasn't a WHOLE number between 1 and 5, please try again.");
            return;
        };

        var jsChoice = Math.floor(Math.random() * 5 + 1);
        console.log(jsChoice);
        alert("The computer chose " + jsChoice + ".");

        var sum = jsChoice + parseInt(userChoice);

        if(sum % 2 == 0 && sum != 2) {
            alert("The result of " + userChoice + " \+ " + jsChoice + " is even. And you chose " + first.toLowerCase() + ".");
        } else if(sum == 2) {
            alert("The result of " + userChoice + " \+ " + jsChoice + " is even. And you chose " + first.toLowerCase() + ".");
        } else if(sum % 2 != 0) {
            alert("The result of " + userChoice + " \+ " + jsChoice + " is odd. And you chose " + first.toLowerCase() + ".");
        };

        switch(first) {
            case 'EVEN':
                if(sum % 2 === 0) {
                    alert("Congratulations! You won!\nIf you'd like to play again, you know what to do.");
                } else if(sum % 2 !== 0) {
                    alert("As the knight from Indiana Jones and the Last Crusade would say, \"You chose poorly.\"\nThanks for playing!\nIf you'd like to play again, you know what to do.");
                };
            break;
            case 'ODD':
                if(sum % 2 === 0) {
                    alert("Sorry, you've lost.\nIf you'd like to play again, you know what to do.");
                } else if(sum % 2 !== 0) {
                    alert("Well played. You've won!\nIf you'd like to play again, you know what to do.");
                };
            break;
            default:
                alert("Wow. That's a special kind of messing up. Not sure how you got through all the defaults to this point, but something went catastrophically wrong. How's about we try that one more time? Without the messing up, of course.");
            break;
        }
    }
});
