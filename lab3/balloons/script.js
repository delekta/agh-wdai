var gameArea = document.getElementById('gameArea');

//Stats
var points = 0;
var round = 0;
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

roundBox.textContent = round;
addBallon()
// setInterval(() => {
//     removeBallon
// }, 2000);

// eventLister to gameArea, when we miss
gameArea.addEventListener('click', missedShot)

function addBallon(){
    if(round < 30){
        round += 1;
        updateStats();

        var balloon = document.createElement("div");
        balloon.classList.add("balloon")

        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.top = Math.random() * 100 + "%";

        // First case
        balloon.addEventListener('click', (event) => {
            removeBallon(event, true)
        })

        gameArea.appendChild(balloon)

        // Second case
        setTimeout(
        function (){
            removeAndAddNewAfterTimeout(balloon);
        }
        , 2000)
    }else{
        updateStats();
        alert("Koniec gry! Twoj wynik to: " + points)
    }
}

function removeAndAddNewAfterTimeout(balloon){
    if(gameArea.contains(balloon)){
        gameArea.removeChild(balloon);
        addBallon();
    }
    
}


function removeBallon(event, hitted){

    shoots += 1;
    if(hitted){
        hit += 1;
        points += 1;
    }
    
    
    updateStats();


    var balloon = event.currentTarget;
    changeBackgroundForMoment();
    gameArea.removeChild(balloon)

    addBallon();

    // Musi być, zeby nie klikac jednocześnie gameArea
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