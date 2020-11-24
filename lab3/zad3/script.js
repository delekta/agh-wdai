let counter = document.getElementById("counter");
let btn = document.getElementById("btnIncrement")
let btnSwitch = document.getElementById("btnSwitch")

let count = 0;
let disabled = false;

btn.addEventListener('click', increment);

function increment(){
    count++;
    counter.innerHTML = count;
}

function _switch(){
    if(disabled){
        disabled = false;
        btn.addEventListener('click', increment);
        btnSwitch.innerHTML = "Off"
        btnSwitch.style.backgroundColor = "black"
    }
    else{
        disabled = true;
        btn.removeEventListener('click', increment)
        count = 0;
        counter.innerHTML = count;
        btnSwitch.innerHTML = "On"
        btnSwitch.style.backgroundColor = "green"
    }
}

