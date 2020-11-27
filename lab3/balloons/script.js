var gameArea = document.getElementById('gameArea');

//Stats
var points = 0;
var round = 1;
var hit = 0;
var shoots = 0;
var accuracy = 0;

// Spans
var pointsBox = document.getElementById("pointsBox");
var roundBox = document.getElementById("roundBox");
var hitBox = document.getElementById("hitBox");
var shootsFiredBox = document.getElementById("shootsFiredBox");
var accuracyBox = document.getElementById("accuracyBox");


// highscore json blob: https://jsonblob.com/_WSTAW_SWOJ_HASH_JSON"

// resztę zaimplementuj sam :-) - Pronto byczku!

addBallon()
// setInterval(() => {
//     removeBallon
// }, 2000);

// eventLister to gameArea, when we miss
gameArea.addEventListener('click', missedShot)

function addBallon(){
    var balloon = document.createElement("div");
    balloon.classList.add("balloon")

    balloon.style.left = Math.random() * 100 + "%";
    balloon.style.top = Math.random() * 100 + "%";

    
    balloon.addEventListener('click', removeBallon)

    gameArea.appendChild(balloon)
    // console.log(balloon.style.left)
}


function removeBallon(event){

    shoots += 1;
    round += 1;
    hit += 1;
    points += 1;
    
    updateStats();


    var balloon = event.currentTarget;
    changeBackgroundForMoment();
    gameArea.removeChild(balloon)

    addBallon();

    // ?
    event.stopPropagation();
}

function missedShot(){
    shoots += 1
    points -= 1

    updateStats();
}

function updateStats(){
    pointsBox.textContent = points;
    roundBox.textContent = round;
    hitBox.textContent = hit;
    shootsFiredBox.textContent = shoots;
    accuracyBox.textContent = ((hit / shoots) * 100).toFixed(2);
}

function changeBackgroundForMoment(){
    gameArea.style.background = "#ff4d4d";
    setTimeout(() => {
        gameArea.style.background = "white"
    }, 100)
}