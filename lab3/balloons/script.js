var gameArea = document.getElementById('gameArea');
// highscore json blob: https://jsonblob.com/_WSTAW_SWOJ_HASH_JSON"
// MOJ BLOB
// https://www.jsonblob.com/7422caa0-316f-11eb-aeee-0d3d8280f0ed

// resztę zaimplementuj sam :-) - OK!

// Time of one round
var roundTime = 2000;

//Stats
var points = 0;
var round = 0;
var hit = 0;
var shoots = 0;
var accuracy = 0;

// Spans
var nickBox = document.getElementById("nickBox");
var pointsBox = document.getElementById("pointsBox");
var roundBox = document.getElementById("roundBox");
var hitBox = document.getElementById("hitBox");
var shootsFiredBox = document.getElementById("shootsFiredBox");
var accuracyBox = document.getElementById("accuracyBox");
var playAgainBtn = document.getElementById("playAgainBtn")

playAgainBtn.addEventListener('click', playAgain);

var nick = "";

playAgain();

// eventLister to gameArea, when we miss
gameArea.addEventListener('click', missedShot)

function addBallon(){
    roundTime -= 30;
    if(round < 30){
        round += 1;
        updateStats();

        var balloon = document.createElement("div");
        balloon.classList.add("balloon")

        balloon.style.left = Math.random() * 90 + "%";
        balloon.style.top = Math.random() * 90 + "%";

        var start = Date.now();
        gameArea.appendChild(balloon)

        // First case
        balloon.addEventListener('click', (event) => {
            // Removing balloon when it is hitted

            // Points depends on how fast you hit
            var stop = Date.now();
            var diff = stop - start;
            pointsForHit = ((2000 - diff) / 100).toFixed(1)
            // console.log(pointsForHit)
            
            removeBallon(event, true, pointsForHit)
        })


        // Second case
        setTimeout(
        function (){
            removeAndAddNewAfterTimeout(balloon);
        }
        , roundTime)
    }else{
        updateStats();
        removeShooting();
        getHighscores();
        // alert(nick+ ", dzięki za grę! Twoj wynik to: " + points)
    }
}

// Removing balloon after setTimeout 
function removeAndAddNewAfterTimeout(balloon){
    if(gameArea.contains(balloon)){
        gameArea.removeChild(balloon);
        addBallon();
    }
    
}


function removeBallon(event, hitted, pointsForHit){
    var audio = new Audio('sounds/balloon-pop.mp3');
    audio.play();

    shoots += 1;
    if(hitted){
        hit += 1;
        points += parseInt(pointsForHit);
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
    var audio = new Audio('sounds/shoot-bow.mp3');
    audio.play();

    shoots += 1
    points -= 5

    updateStats();
}

function updateStats(){
    pointsBox.textContent = points;
    roundBox.textContent = round;
    hitBox.textContent = hit;
    shootsFiredBox.textContent = shoots;
    if(shoots > 0){
        accuracyBox.textContent = ((hit / shoots) * 100).toFixed(2);
    }
    else{
        accuracyBox.textContent = 0
    }
    
}

function changeBackgroundForMoment(){
    gameArea.style.background = "#ff4d4d";
    setTimeout(() => {
        gameArea.style.background = "white"
    }, 100)
}


// Highscores
function getHighscores(){
    fetch("https://www.jsonblob.com/api/7422caa0-316f-11eb-aeee-0d3d8280f0ed")
    .then(response => {
        return response.json()
    })
    .then(data => {
        showData(data["scores"])
    })
}

function showData(json){
    newObj = {
        nick: nick,
        points: points,
        date: getDate()
    }

    json.push(newObj)

    var sortedArr = json.sort((a, b) => a.points < b.points ? 1 : -1)
    showHighscores(sortedArr)

    newScores = {
        scores: sortedArr
    }
    updateResults(newScores)
}

function getDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return date+' '+time;
}

function updateResults(newScores){
    fetch("https://www.jsonblob.com/api/7422caa0-316f-11eb-aeee-0d3d8280f0ed", {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newScores),
    }).then(response => response.json())
    .catch((error) => {
        console.error("Error:" , error);
    });
}

function showHighscores(sortedArr){
    var yourResultBox = document.getElementById("yourResultBox")
    yourResultBox.textContent = "Twój wynik to: " + points;

    var highScoresHeader = document.getElementById("highScoresHeader")
    var highScores = document.getElementById("highScores");
    var playAgainBtn = document.getElementById("playAgainBtn")

    var header = document.createElement("tr");
    header.innerHTML = `
        <th> Lp. </th>
        <th> Nick </th>
        <th> Points </th> 
        <th> Date </th>
    `

    highScores.appendChild(header);

    var end = sortedArr.length >= 7 ? 7 : sortedArr.length;

    for(var i = 1; i <= end; i++){
        var row = document.createElement("tr");
        row.innerHTML = `
            <th>${i}</th>
            <th>${sortedArr[i - 1].nick}</th>
            <th>${sortedArr[i - 1].points}</th> 
            <th>${sortedArr[i - 1].date}</th>
        `
        highScores.appendChild(row);
    }

    yourResultBox.style.visibility = "visible";
    highScoresHeader.style.visibility = "visible";
    highScores.style.visibility = "visible";
    playAgainBtn.style.visibility = "visible";
}

function playAgain(){
    document.getElementById("yourResultBox").style.visibility = "hidden";
    document.getElementById("highScoresHeader").style.visibility = "hidden";
    document.getElementById("highScores").style.visibility = "hidden";;
    document.getElementById("playAgainBtn").style.visibility = "hidden";

    // Removing Children
    highScores.innerHTML = "";
    
    nick = "";

    while(nick == ""){
        nick = prompt("Nick: ")
    }

    // Time of one round
    roundTime = 2000;

    //Stats
    points = 0;
    round = 0;
    hit = 0;
    shoots = 0;
    accuracy = 0;

    nickBox.textContent = nick;
    updateStats()

    startGame();
}

function startGame(){
    countDown();
    setTimeout(
        addBallon, 4500
    )
    
}

function countDown(){
    console.log("hahKa1")
    var highScoresHeader = document.getElementById("highScoresHeader")

    
    highScoresHeader.textContent = "Przygotuj się!"
    highScoresHeader.style.visibility = "visible";
    setTimeout(() => {
        highScoresHeader.textContent = "3..";
        console.log("hahKa3")
    }, 1000)

    setTimeout(() => {
        highScoresHeader.textContent = "2.."
        console.log("hahKa4")
    }, 2000)
    setTimeout(() => {
        highScoresHeader.textContent = "1"
        console.log("hahKa5")
    }, 3000)
    setTimeout(() => {
        highScoresHeader.textContent = "Start"
        console.log("hahKa6")
    }, 4000)

    
    setTimeout(()=> {
        highScoresHeader.textContent = "Highscores"
        document.getElementById("highScoresHeader").style.visibility = "hidden";
        addShooting();
    }, 4500)
    
}

var style = document.createElement('style');

function removeShooting(){
    document.getElementById("wrapper").style.visibility = "visible";
    gameArea.removeEventListener('click', missedShot)
}

function addShooting(){
    gameArea.addEventListener('click', missedShot)
    document.getElementById("wrapper").style.visibility = "hidden";
}