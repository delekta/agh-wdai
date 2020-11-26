var phoneBook = document.querySelector(".book")

function add(event){
    event.preventDefault();
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");


    if(name.value != "" && phone.value != ""){
        if(validateData(name.value, phone.value)){
            var bookElement = document.createElement("div")
            bookElement.classList.add("book-element")

            bookElement.innerHTML = `
            <div class="data">
                <h3>${name.value}</h3>
                <p>${phone.value}</p>
            </div>
            <div class="button">
                <button class="remove"><i class="fas fa-trash-alt"></i></button>
            </div>
            `;
            const removeBtn = bookElement.querySelector('.remove');
            removeBtn.addEventListener('click', remove);

            phoneBook.appendChild(bookElement);

            name.value = "";
            phone.value = "";
        }
    }else{
        alert("Wpisz wymagane dane!")
    }
    
}

function remove(event){
    const element = event.currentTarget.parentElement.parentElement;
    phoneBook.removeChild(element)
}

function validateData(name, phone){
    if(nameValidation(name) && phoneValidation(phone)){
        return true;
    }
    return false;
}

function nameValidation(name){
    var names = name.split(" ");
    var pattern = /^[A-Za-z]+$/

    if(names.length ==  2){
        for(var name of names){
            if(!name.match(pattern)){
                alert("W polu [ IMIE I NAZWISKO ] dozwolone sa jedynie litery!")  
                return false         
            }
        }
    }else{
        alert("Podaj Imie i Nazwisko rozdzielone spacja!")
        return false;
    }
    return true;
    
}

function phoneValidation(phone){
    var pattern = /^[0-9]{9}$/     
    if(!phone.match(pattern)){
        alert("Niepoprawny format numeru telefonu. Wymagamu format 123456789 (cyfry)")
        return false;
    }
    return true;
};