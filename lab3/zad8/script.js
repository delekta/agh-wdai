
function getData(event){
    // Dont refresh website
    event.preventDefault();

    let data = document.getElementById("data").value;
    let result = document.getElementById("result");
    if(correctInput(data)){
        // convert input
        let numbers = data.split(" ").map(Number);
        console.log(numbers)

        if(numbers.length > 1){
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
        }else{
                alert("Podaj przynajmniej dwie liczby!")
        }

    }
}

function correctInput(data){
    let numbers = data.split(" ")
    
    var pattern =  /^[0-9]+$/
    for(var number of numbers){
        if(!number.match(pattern)){
            alert("Niepoprawny format danych!")
            return false;
        }
    }
    return true;
}