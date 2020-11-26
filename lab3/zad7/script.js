function validateForm(){
    let inputs = document.querySelectorAll(".input")

    var labels = document.getElementsByTagName('label')

    // Check if inputs are filled!
    for(var input of inputs){
        if(input.value === ""){
            // Wypisywanie dokładnego labela do danego pola
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

    onlyLetter();
    phoneValidation();
    canRetire();


}

function onlyLetter(){
    var texts = document.querySelectorAll("input[type=text]");
    var labels = document.getElementsByTagName('label');

    var pattern = /^[A-Za-z]+$/
    for(var text of texts){
        if(text.value != ""){
            if(!text.value.match(pattern)){
                // Wypisywanie dokładnego labela do danego pola
                for(var label of labels){
                    if(text.id === label.htmlFor){
                        alert("W polu [" +  label.textContent +  "] dozwolone sa jedynie litery!")
                    }
                }
                
            }
        }
        
    }
}

function phoneValidation(){
    var phoneNumber = document.getElementById("phone");

    var pattern = /^[0-9]{9}$/
    if(phoneNumber.value != ""){      
        if(!phoneNumber.value.match(pattern)){
            alert("Niepoprawny format numeru telefonu. Wymagamu format 123456789 (cyfry)")
        }
    }
};

// Sprawdzam czy osoba składająca wniosek osiągnie wiek emerytalny w dniu podanym jako [Data przejscia na emeryture]
function canRetire(){

    // ISO format of Date YYYY-MM-DD, on Chrome there is no problem with format of input
    var birth = document.getElementById("birth").value;
    var retirementDate = document.getElementById("retirement-date").value;

    var men = document.getElementById("men");
    var women = document.getElementById("women");

    if(birth != "" && retirementDate != "" && (men.checked || women.checked)){
        var d1 = new Date(birth);
        var d2 = new Date(retirementDate);


        var age = d2.getTime() - d1.getTime();

        leapYears = howManyLeapYears(d1.getFullYear(), d2.getFullYear())
        console.log("Number of leap years: " + leapYears)

        // Dodaje ilosc dnie przestepnych
        age += leapYears * 1000 * 3600 * 24


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


function isYearLeap(year)
{
  return !((year % 4) && (year % 100) || !(year % 400));
}

function howManyLeapYears(year1, year2){
    counter = 0;
    for( var i = year1; i <= year2; i++){
        if(isYearLeap(i)){
            counter++;
        }
    }
    return counter;
}


