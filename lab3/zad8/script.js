
function getData(event){
    // Dont refresh website
    event.preventDefault();

    let data = document.getElementById("data").value;
    let result = document.getElementById("result");

    // convert input
    let numbers = data.split(" ").map(Number);

    // clean input
    document.getElementById("data").value = "";

    // destructuring assignment, get max
    let max = Math.max(...numbers);

    // for(let i = 0; i < numbers.length; i++){
    //     if(numbers[i] > max){
    //         max = numbers[i]
    //     }
    // }

    result.innerHTML = "Maks to: " + max;
    
}