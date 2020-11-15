let counter = 1;
let propagation = false;

blueBtn = document.getElementById("blue");
redBtn = document.getElementById("red");
yellowBtn = document.getElementById("yellow");

blueBtn.addEventListener('click', blueFunc);
redBtn.addEventListener('click', redFunc);
yellowBtn.addEventListener('click', yellowFunc);



function blueFunc(event){
    alert("nacisnąłeś niebieski o wartosci" + counter);
    counter++;
    if(!propagation){
        event.stopPropagation();
    }
}

function redFunc(event){
    if(counter <= 3){
        alert("nacisnąłeś czerwony o wartosci" + counter);
        counter++;
        if(!propagation){
            event.stopPropagation();
        }
    }
    else{
        // redBtn.style.pointerEvents = "none"; second version
        redBtn.removeEventListener('click', redFunc);
    }
}

function yellowFunc(event){
    if(counter <= 5){
        alert("nacisnąłeś zółty o wartosci" + counter);
        counter++;
        if(!propagation){
            event.stopPropagation();
        }
    }
    else{
        yellowBtn.removeEventListener('click', yellowFunc);
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
    counter = 1;

    // Chodzi o pointerEvents ???
    //  zrobić na add event listenerach i wtedy removeEventLister?
    // document.getElementById("yellow").style.pointerEvents = "auto";
    // document.getElementById("blue").style.pointerEvents = "auto";
    // document.getElementById("red").style.pointerEvents = "auto";
    redBtn.addEventListener('click', redFunc);
    yellowBtn.addEventListener('click', yellowFunc);
}

