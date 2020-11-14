
function promptName(){ 
    // let name = prompt('What is your name?'); alternative
    let name = window.prompt("What is your name?")
    let namePlace = document.getElementById("name")
    namePlace.innerHTML = name;
    // alert("Your name is" + name) alternative
}


