fetch(`http://localhost:3000/people`)
.then(response => {
    return response.json()
}).then(data => {
    showData(data)
})



function showData(json){
    var namesParagraph = document.getElementById("names");
    var withRParagraph = document.getElementById("namesWithR");
    var sortedObjects = document.getElementById("sortedObjects");


    var names = ""

    var sumAge = 0;
    var namesWithR = "Names with R:";

    for(var obj of json){
        // Name and length of name
        names += "Name: " + obj.name + obj.name.length + " Age: " + obj.age + `<br> <br>`;

        // Names with R 
        if(obj.name.includes("R") || obj.name.includes("r")){
            namesWithR += " " + obj.name
        }

        sumAge += parseInt(obj.age);
    }

    // Average age
    names  += "Średnia wieku: " + sumAge / json.length;
    namesParagraph.innerHTML  = names; 

    // Append names with R to paragraph
    withRParagraph.innerHTML = namesWithR;

    // Array sorted by age
    var sortedArr = json.sort((a, b) => a.age > b.age ? 1 : -1)

    var sortedByAge = "Trzeci najmłodszy: " + "Name: " + sortedArr[2].name + " Age:" + sortedArr[2].age +`<br> <br>`
                    + "Drugi najstarszy: " + "Name: " + sortedArr[sortedArr.length - 2].name + " Age:" + sortedArr[sortedArr.length - 2].age;
    sortedObjects.innerHTML = sortedByAge;

}


