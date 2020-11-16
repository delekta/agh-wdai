let counter = 0;
// Initially we dont propagate
let propagation = false;
let result = document.getElementById("result");

blueBtn = document.getElementById("blue");
redBtn = document.getElementById("red");
yellowBtn = document.getElementById("yellow");

// Adding Listeners
blueBtn.addEventListener('click', blueFunc);
redBtn.addEventListener('click', redFunc);
yellowBtn.addEventListener('click', yellowFunc);



function blueFunc(event){
    alert("Nacisnąłeś niebieski o wartości: 1");
    counter++;
    result.innerHTML = counter;
    updateListeners();
}

function redFunc(event){
    if(counter <= 30){
        alert("Nacisnąłeś czerwony o wartości: 2");
        counter += 2;
        result.innerHTML = counter;
        if(!propagation){
            event.stopPropagation();
        }
    }
    updateListeners();
}

function yellowFunc(event){
    if(counter <= 50){
        alert("Nacisnąłeś zółty o wartości: 5");
        counter += 5;
        result.innerHTML = counter;
        if(!propagation){
            event.stopPropagation();
        }
    }
    updateListeners();
}

function updateListeners(){
    // Removing Listeners
    if(counter > 30){
        redBtn.removeEventListener('click', redFunc);
        redBtn.style.backgroundColor = 'gray';
    }
    if(counter > 50){
        yellowBtn.removeEventListener('click', yellowFunc);
        yellowBtn.style.backgroundColor = "gray"
    }
}

function startStopPropagation(){
    if(propagation){
        propagation = false;
        document.getElementById("propagation").innerHTML = "Start Propagation";
    }
    else{
        propagation = true;
        document.getElementById("propagation").innerHTML = "Stop Propagation";
    }
}

function reset(){
    counter = 0;
    result.innerHTML = counter;
    // Adding Listeners
    redBtn.addEventListener('click', redFunc);
    yellowBtn.addEventListener('click', yellowFunc);

    // Getting style back
    yellowBtn.style.backgroundColor = "yellow";
    redBtn.style.backgroundColor = 'red';
}

