let ol = document.getElementById("list")
let counter = 1;

function add(){
    let li = document.createElement("li");
    li.innerHTML = counter + " Element Added";
    counter++;
    ol.appendChild(li);
}


function remove(){
    ol.removeChild(ol.childNodes[0]);
}