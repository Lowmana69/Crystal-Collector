/* 

Main Idea: 

Each Crystal will be linked randomly to a number, randomly. 
The main goal is to collect the number of crystals (via clicking) 
,and have the total amount clicked equal to the desired total.

There is a Win or Lose Game

Main Goal: 

Hit the Total Goal Mark

Random Number Generate between 1 -12

*/

/* Steps to achieving desired app outcome */

// Each crystal will have a numbder attach to the image amd assign a number randomly
// The numberwill be reassigned randomly, generated afer each event clicked
// A random total goal number will also be generated randomly as well
// Each Crystal that is clicked, will be added to the previous answer as well


// Variables to Store --> Each variable is automatically set to "undefined" if no value is not assigned
var randomResult;
var win = 0;
var lost = 0;
var prevNumber = 0;


// Wrap the whole Random Number Generator & Crystal DIVs into a function

var startGame = function () {

    // Clear the numbers attached the crystal

    $(".crystal-container").empty();

    // Random Total Number Generator

    randomResult = Math.floor(Math.random() * 69) + 30;

    // Target Goal Displayed on the page

    $("#goal").html("Random Result Is: ");

    // Images

    var crystalImages = [
        '../images/Crimson Diamond.png',
        '../images/Jade Diamond.png',
        '../images/Pearl.png',
        '../images/Platinum DIamond.png',
        '../images/Ruby.png'
    ];

    for(var i = 0; i < 5; i++) {

        // Generate a Random Number for Each Crystal
        var numberGenerator = Math.floor(Math.random() * 11) + 1;
        
        

        // Creating DIVs to contain the crystals and the random number
        var crystals = $("<div>");
            crystals.attr({
            'class': 'crystals',
            'data-generator': numberGenerator
        });

        crystals.css({
            "background-image": "url('" + crystalImages[i] + "')",
            "background-size": "cover"
        })

        $.(".crystal-container").append(crystals);
    }

    $("#previous-number").html("Total Crystals Collected: " + prevNumber);
}

startGame();

// Create an OnClick Event for each Crystal
// Event Delegatio --> The document.OnClick searches for the identifier to 'activate' the interaction for the game
$(document).click(".crystals", function () { 
    
    // Each number in the crystal is assign according to the RandomNumber generator
    var randomNumber = parseInt($(this).attr('data-generator'));
    
    // The prevNumber is set to the new assign number of the intended Goal
    prevNumber += randomNumber;
    
    // Display the total crystals collected
    $('#previous-number').html("Total Crystals Collected: ", prevNumber);

    // If the number that is selected and incorrect, the player (user) loses and the game resets. The prevNumber goes back to 0.
    if(prevNumber > randomResult) {
       
        lost++;
        $("#loses").html("Total Losses: " + lost);
        prevNumber = 0;
        startGame();
    
    // If the number that is selected and correct, the player (user) wins and the game resets. The prevNumber goes back to 0.
    } else if(prevNumber === randomResult) {
        
        win++;
        $("#wins").html("Total Wins:  " + win);
        prevNumber = 0;
        startGame();

    }
    
});



