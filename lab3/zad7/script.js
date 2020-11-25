function validateForm(){
    let inputs = document.querySelectorAll(".input")

    var labels = document.getElementsByTagName('label')

    // Check if inputs are filled!
    for(var input of inputs){
        if(input.value === ""){
            for(var label of labels){
                if(input.id === label.htmlFor){
                    alert("Uzupełnij [" + label.textContent +  "] !")
                }
            }
        }
    }

    // Check if sex is choosen
    var men = document.getElementById("men");
    var women = document.getElementById("women");

    if(!(women.checked || men.checked)){
        alert("Uzupełnij [ Płeć: ] !")
    }

    canRetire();
    phoneValidation();


}

function canRetire(){

    // ISO format of Date YYYY-MM-DD
    var birth = document.getElementById("birth").value;
    var retirementDate = document.getElementById("retirement-date").value;

    var men = document.getElementById("men");
    var women = document.getElementById("women");

    if(birth != " " && retirementDate != " " && (men.checked || women.checked)){
        var d1 = new Date(birth);
        var d2 = new Date(retirementDate);

        var age = d2.getTime() - d1.getTime();

        var age = age / (1000 * 3600 * 24 * 365)
        console.log(age);

        var requiredDate;
        if(men.checked){
            requiredDate = 65;
        }
        else{
            requiredDate = 60;
        }

        if(age < requiredDate){
            alert("W " + retirementDate + " nie osiągniesz jeszcze wieku emerytalnego!")
        }else{
            alert("W " + retirementDate + " osiągniesz wiek emerytalny, Gratulacje!!!")
        }


    }else{
        console.log("There is no data!")
    }
}

// To Do
function phoneValidation(){

};


