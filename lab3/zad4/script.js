let ol = document.getElementById("list")
var counter = 0;

function add(){
    let li = document.createElement("li");
    counter++;
    li.innerHTML = counter + " Element Added";
    ol.appendChild(li);
}


function remove(){
    if(counter > 0){
        ol.removeChild(ol.childNodes[1]);
        counter--;
    }
}