// Why is works?
let ol = document.getElementById("list")
let counter = 1;

function add(){
    let li = document.createElement("li");
    counter++;
    li.innerHTML = counter + " Element Added";
    ol.appendChild(li);
}


function remove(){
    ol.removeChild(ol.childNodes[0]);
    counter--;
}