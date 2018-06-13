$(document).ready(function () {
    var wins = 0;
    var loses = 0;
    var targetnumber;
    var userscore = 0;
    var redgem;
    var greengem;
    var purplegem;
    var bluegem;

//built-in Javascript function for target number between 19 and 120
    function getTargetNum(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    targetnumber = getTargetNum(19,120);
    $('#targetnumber').text(targetnumber); 
    $('#userscore').text(userscore); 
    redgem = Math.floor(Math.random() * 12) + 1; //for number between 1 to 12
    purplegem = Math.floor(Math.random() * 12) + 1;
    greengem = Math.floor(Math.random() * 12) + 1;
    bluegem = Math.floor(Math.random() * 12) + 1;
    console.log(redgem, bluegem, greengem, purplegem);
    $("#win_msg").hide(); 
    $("#lose_msg").hide(); 

//built-in Javascript function for target number between 19 and 120
function getTargetNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

//To keep up the score instead of refreshing the game
    function resetGame() {
        userscore = 0;
        targetnumber = getTargetNum(19,120);
        redgem = Math.floor(Math.random() * 12) + 1;
        purplegem = Math.floor(Math.random() * 12) + 1;
        greengem = Math.floor(Math.random() * 12) + 1;
        bluegem = Math.floor(Math.random() * 12) + 1;
        console.log(redgem, bluegem, greengem, purplegem);
        $('#targetnumber').text(targetnumber); 
        $('#userscore').text(userscore); 
    };
//function if user wins
    function yay() {
        wins++
        $("#lose_msg").hide();    
        $("#win_msg").show();   
        $('#wins').text(wins); 
        console.log("wins are:" + wins);
        resetGame();
    };
//function if user loses
    function nay() {
        loses++;
        $("#win_msg").hide();  
        $("#lose_msg").show(); 
        $("#loses").text(loses); 
        console.log("loses are:" + loses);
        resetGame();
    };

// Converting crystal images to buttons 
    // -----------------RED GEM -----------------------------------
    $('#redgem').on('click', function () {
        userscore = userscore + redgem;
        console.log("New userscore= " + userscore);
        $("#userscore").text(userscore);  
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    })

    // -----------------PURPLE GEM -----------------------------------
    $('#purplegem').on('click', function () {
        userscore = userscore + purplegem;
        console.log("New userscore= " + userscore);
        $("#userscore").text(userscore);
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    })

    // -----------------GREEN GEM -----------------------------------
    $('#greengem').on('click', function () {
        userscore = userscore + greengem;
        console.log("New userscore= " + userscore);
        $("#userscore").text(userscore);
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    })


    // -----------------BLUE GEM -----------------------------------
    $('#bluegem').on('click', function () {
        userscore = userscore + bluegem;
        console.log("New userscore= " + userscore);
        $("#userscore").text(userscore);
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    })

});