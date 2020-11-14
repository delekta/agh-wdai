var mountain = true;
function change(){
    // we have only one photo
    let photo = document.getElementById("photo")
    if(mountain){
        mountain = false;
        photo.src = "./img/sea.jpg"
        photo.style.border = "5px solid blue";
    }
    else{
        mountain = true;
        photo.src = "./img/mountain.jpg"
        photo.style.border = "5px solid red";
    }
}