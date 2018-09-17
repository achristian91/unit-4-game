//globial variable
var crystal = {
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    blue:
    {
        name: "Blue",
        value: 0
    },
    white:
    {
        name: "White",
        value: 0
    },
    red:
    {
        name:"Red",
        value: 0
    },
};

//scores
var currentScore        = 0;
var targetScore         = 0; 

//wins

var winCount            = 0;
var lossCount           = 0;










//functions
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 //// starts and restarts the game 
var startGame = function() {

    //reset the current score
     currentScore = 0;

    //set a new target score
    targetScore = getRandom(19, 120);

    //set different values for each 
    crystal.yellow.value         = getRandom(1, 12);
    crystal.blue.value           = getRandom(1, 12);
    crystal.white.value          = getRandom(1, 12);
    crystal.red.value            = getRandom(1, 12);




    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);

    console.log("------------------------------------")
    console.log("Target Score: " + targetScore);
    console.log("Yellow: " + crystal.yellow.value + " | Blue: " + crystal.blue.value + " | White: " + crystal.white.value + " | Red: " + crystal.red.value);
    console.log("--------------------------------------")

}

///respond to clicks
var addValues = function(crystal) {

    currentScore = currentScore + crystal.value;

    $("#yourScore").html(currentScore);

    checkWin();

    console.log("Your Score: " + currentScore);
}
//check wins 
var checkWin = function() {

    if(currentScore > targetScore) {
        alert("Sorry. You Lost!");
        console.log("You Lost");

        lossCount++;

        $("#lossCount").html(lossCount);

        startGame();
    }

    else if (currentScore == targetScore) {
        alert("Congratulations! You Won!");
        console.log("You Won!");

        winCount++;
        $("#winCount").html(winCount);

        startGame();
    }

}



//main process

//starts game first time 
startGame();

$("#yellow").click(function() {
    addValues(crystal.yellow);
});
$("#blue").click(function() {
    addValues(crystal.blue);
});
$("#white").click(function() {
    addValues(crystal.white);
});
$("#red").click(function() {
    addValues(crystal.red);
});
