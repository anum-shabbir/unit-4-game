
var wins = 0;
var loses = 0;
var reset_game = false;

var targetnumber;
var userscore = 0;
var redgem;
var greengem;
var purplegem;
var bluegem;

targetnumber = Math.floor(Math.random() * 50) + 10;
document.getElementById("targetnumber").innerText = targetnumber;
document.getElementById("userscore").innerText = userscore;
redgem = Math.floor(Math.random() * 10);
purplegem = Math.floor(Math.random() * 10);
greengem = Math.floor(Math.random() * 10);
bluegem = Math.floor(Math.random() * 10);
console.log(redgem);
console.log(bluegem);
console.log(greengem);
console.log(purplegem);
document.getElementById("win_msg").style.cssText = "display: none";
document.getElementById("lose_msg").style.cssText = "display: none";


function resetGame() {

    userscore = 0;

    targetnumber = Math.floor(Math.random() * 50) + 10;
    redgem = Math.floor(Math.random() * 10) + 2;
    purplegem = Math.floor(Math.random() * 10) + 2;
    greengem = Math.floor(Math.random() * 10) + 2;
    bluegem = Math.floor(Math.random() * 10) + 2;
    console.log(targetnumber);
    console.log(redgem);
    console.log(bluegem);
    console.log(greengem);
    console.log(purplegem);

    document.getElementById("targetnumber").innerText = targetnumber;
    document.getElementById("userscore").innerText = userscore;

};

function yay()
{ 
    wins++
    document.getElementById("lose_msg").style.cssText = "display: none";
    document.getElementById("win_msg").style.cssText = "display: block";
    document.getElementById("wins").innerText = wins;
    console.log("wins are:" + wins);
    resetGame();
};

function nay()
{
    loses++;
    document.getElementById("win_msg").style.cssText = "display: none";
    document.getElementById("lose_msg").style.cssText = "display: block";
     document.getElementById("loses").innerText = loses;
     console.log("loses are:" + loses);
     resetGame();
};

// -----------------RED GEM -----------------------------------
document.getElementById("redgem").addEventListener("click", function () {
    userscore = userscore + redgem;
    console.log("New userscore= " + userscore);
    document.getElementById("userscore").innerText = userscore;
    if (targetnumber < userscore) {
nay();
    }
    else if (targetnumber === userscore) {
yay();
    }

});


// -----------------PURPLE GEM -----------------------------------
document.getElementById("purplegem").addEventListener("click", function () {
    userscore = userscore + purplegem;
    console.log("New userscore= " + userscore);
    document.getElementById("userscore").innerText = userscore;
    if (targetnumber < userscore) {
        nay();
    }
    else if (targetnumber === userscore) {
        yay();
    }

});

// -----------------GREEN GEM -----------------------------------
document.getElementById("greengem").addEventListener("click", function () {
    userscore = userscore + greengem;
    console.log("New userscore= " + userscore);
    document.getElementById("userscore").innerText = userscore;
    if (targetnumber < userscore) {
        nay();
    }
    else if (targetnumber === userscore) {
        yay();
    }

});

// -----------------BLUE GEM -----------------------------------
document.getElementById("bluegem").addEventListener("click", function () {
    userscore = userscore + bluegem;
    console.log("New userscore= " + userscore);
    document.getElementById("userscore").innerText = userscore;
    if (targetnumber < userscore) {
        nay();
    }
    else if (targetnumber === userscore) {
        yay();
    }

});


