$(document).ready(function () {
    var wins = 0;
    var loses = 0;

    var targetnumber;
    var userscore = 0;
    var redgem;
    var greengem;
    var purplegem;
    var bluegem;

    targetnumber = Math.floor(Math.random() * 50) + 10;
    $('#targetnumber').text(targetnumber); //document.getElementById("targetnumber").innerText = targetnumber;
    $('#userscore').text(userscore); //document.getElementById("userscore").innerText = userscore;
    redgem = Math.floor(Math.random() * 10);
    purplegem = Math.floor(Math.random() * 10);
    greengem = Math.floor(Math.random() * 10);
    bluegem = Math.floor(Math.random() * 10);
    $("#win_msg").hide(); //document.getElementById("win_msg").style.cssText = "display: none";
    $("#lose_msg").hide(); //document.getElementById("lose_msg").style.cssText = "display: none";



    function resetGame() {
        userscore = 0;
        targetnumber = Math.floor(Math.random() * 50 + 10);
        redgem = Math.floor(Math.random() * 10 + 1);
        purplegem = Math.floor(Math.random() * 10 + 1);
        greengem = Math.floor(Math.random() * 10 + 1);
        bluegem = Math.floor(Math.random() * 10 + 1);
        $('#targetnumber').text(targetnumber); //document.getElementById("targetnumber").innerText = targetnumber;
        $('#userscore').text(userscore); //document.getElementById("userscore").innerText = userscore;
    };

    function yay() {
        wins++
        $("#lose_msg").hide();    //document.getElementById("lose_msg").style.cssText = "display: none";
        $("#win_msg").show();    // document.getElementById("win_msg").style.cssText = "display: block";
        $('#wins').text(wins);   //document.getElementById("wins").innerText = wins;
        console.log("wins are:" + wins);
        resetGame();
    };

    function nay() {
        loses++;
        $("#win_msg").hide();     //document.getElementById("win_msg").style.cssText = "display: none";
        $("#lose_msg").show();    // document.getElementById("lose_msg").style.cssText = "display: block";
        $("#loses").text(loses);   //document.getElementById("loses").innerText = loses;
        console.log("loses are:" + loses);
        resetGame();
    };

    // -----------------RED GEM -----------------------------------
    /*document.getElementById("redgem").addEventListener("click", function () {
        userscore = userscore + redgem;
        console.log("New userscore= " + userscore);
        document.getElementById("userscore").innerText = userscore;
        if (targetnumber < userscore) {
        nay();
        }
        else if (targetnumber === userscore) {
        yay();
        }
    
    });*/

    $('#redgem').on('click', function () {
        userscore = userscore + redgem;
        console.log("New userscore= " + userscore);
        $("#userscore").text(userscore);         // document.getElementById("userscore").innerText = userscore;
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    })

    // -----------------PURPLE GEM -----------------------------------
    /*document.getElementById("purplegem").addEventListener("click", function () {
        userscore = userscore + purplegem;
        console.log("New userscore= " + userscore);
        document.getElementById("userscore").innerText = userscore;
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    });*/

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
    /*document.getElementById("greengem").addEventListener("click", function () {
        userscore = userscore + greengem;
        console.log("New userscore= " + userscore);
        document.getElementById("userscore").innerText = userscore;
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    });*/
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
    /*document.getElementById("bluegem").addEventListener("click", function () {
        userscore = userscore + bluegem;
        console.log("New userscore= " + userscore);
        document.getElementById("userscore").innerText = userscore;
        if (targetnumber < userscore) {
            nay();
        }
        else if (targetnumber === userscore) {
            yay();
        }
    
    });*/
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