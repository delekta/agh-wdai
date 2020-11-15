let counter = document.getElementById("counter");
let btn = document.getElementById("btnIncrement")
let btnSwitch = document.getElementById("btnSwitch")

let count = 0;

function increment(){
    count++;
    counter.innerHTML = count;
}

function _switch(){
    if(btn.disabled){
        btn.disabled = false;
        btnSwitch.innerHTML = "Off"
        btnSwitch.style.backgroundColor = "black"
    }
    else{
        // Odpinam obsługe przycisku, mozna tez zrobic na addEventListener i wtedy odpinamy uzywajac removeEventListener
        btn.disabled = true;
        count = 0;
        counter.innerHTML = count;
        btnSwitch.innerHTML = "On"
        btnSwitch.style.backgroundColor = "green"
    }
}

