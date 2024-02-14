//Додаткове завдання
let task = +prompt("Введіть номер завдання(1-17): ");


//Number: odd
if(task === 1){
    let number = +prompt("Please input a number: ");

    if (number && number%2 === 0){
        alert("число є парним");

    } else if(number && number%2 !== 0){
        alert("число є непарним");

    } else{
        alert("це не число");
    }

}

//String: lexics
if(task === 2){
    let str = prompt("Введіть речення: ");
    if (str.includes('bad') || str.includes('word')){
        alert('текст містить некоректні слова');
    }
}

//Boolean
if(task === 3 || task === 4){
    let question = confirm("Do you like pizza? ");
    let answer = !!question;
    console.log(answer);

    //Boolean: if
    if(question){
        alert("You like pizza");
    }else{
        alert("You don't like pizza");
    }
}

//Comparison: sizes
if(task === 5){
    let size = prompt("Введіть розмір в міжнродній системі (S-M-L): ");
    if(size.toUpperCase() === "XXS"){
        alert(`В США це 8 розмір.`);
    } else if(size.toUpperCase() === "XS"){
        alert(`В США це 10 розмір.`)
    } else if(size.toUpperCase() === "S"){
        alert(`В США це 12 розмір.`)
    } else if(size.toUpperCase() === "M"){
        alert(`В США це 14 розмір.`)
    } else if(size.toUpperCase() === "L"){
        alert(`В США це 16 розмір.`)
    } else if(size.toUpperCase() === "XL"){
        alert(`В США це 18 розмір.`)
    } else if(size.toUpperCase() === "XXL"){
        alert(`В США це 20 розмір.`)
    }
}

//Ternary
if(task === 6){
    let who = confirm("Ваша стать  чоловік?");
    alert(who? "Ви чоловік" : "Ви жінка");
}

//
if(task === 7){
    alert("Це завдання було для перевірки знань.");
}

//Prompt: or
if(task === 8){
    let age = +prompt("Введіть ваш вік: ");
    let yearsOld = 2024 - age;
    alert((age && `Ваш рік народження: ${yearsOld}`) || 'Ви не ввели ваш вік!');
}

//Confirm: or this days
if(task === 9){
    let shop = confirm("шопінг?");
    shop || alert("ти - бяка");
}

//Confirm: if this days
if(task === 10){
    let shop = confirm("шопінг?");
    if(!shop){
        alert("ти - бяка");
    }
}

//Default: or
if(task === 11){
    let name = prompt("Введіть ім'я: ") || "Іван";
    let surname = prompt("Введіть прізвище: ") || "Іванов";
    let fathrName = prompt("Введіть по батькові: ") || "Іванович";
    alert(`ПІБ: ${name} ${surname} ${fathrName}.`);
}

//Default: if
if(task === 12){
    let name = prompt("Введіть ім'я: ");
    let surname = prompt("Введіть прізвище: ");
    let fathrName = prompt("Введіть по батькові: ");

    if(name){
        name = name[0].toUpperCase() + name.slice(1);
    } else{
        name = "Іван";
    }

    if(surname){
        surname = surname[0].toUpperCase() + surname.slice(1);
    } else{
        surname = "Іванов";
    }

    if(fathrName){
        fathrName = fathrName[0].toUpperCase() + fathrName.slice(1);
    } else{
        fathrName = "Іванович";
    }

    alert(`ПІБ: ${name} ${surname} ${fathrName}.`);
}

//Login and password
if(task === 13){
    const login = "admin";
    const password = "qwerty";

    let userLogin = prompt("Enter login: ");
    if(userLogin === login){

        let userPassword = prompt("Enter password: ");

            if(password === userPassword){
                alert("Success")
            }
            else{
                alert("Password is wrong!");
            }

    } else{
        alert("Login is wrong!");
    }
}

//Currency exchange
if(task === 14){
    let currency = prompt("Введіть валюту (usd / eur): ");
    let choice = confirm("Ви хочете купити чи продати?");
    let rate;

    let sum = +prompt("Введіть суму: ");

    if(currency.toLowerCase() === "usd"){
        rate = choice? 38.3 : 38.1;
    }

    if(currency.toLowerCase() === "eur"){
        rate = choice? 41.7 : 40.5;
    }

    let result = (sum * rate).toFixed();

    alert(`Результат: ${result} грн.`);
}

//Scissors
if(task === 15){
    let userChoice = +prompt("камінь(1), ножиці(2), папір(3)?");

    if((userChoice > 3)  || !userChoice){
        alert("Error");
    }

    let randomChoice = Math.ceil(Math.random() * 3);

    alert(`${userChoice} VS ${randomChoice}`);

    if ((randomChoice === 1 && userChoice === 2) ||
        (randomChoice === 2 && userChoice === 3) ||
        (randomChoice === 3 && userChoice === 1) ){
        alert("Ви програли :(");

    } else if ((randomChoice === 1 && userChoice === 3) ||
            (randomChoice === 2 && userChoice === 1) ||
            (randomChoice === 3 && userChoice === 2) ){

        alert("Ви виграли :)");

    } else if (randomChoice === userChoice){
        alert("~ нічия ~");
    }
}

if(task === 16){
    alert("Це і є дане завдання!")
}

//Завдання на чорний пояс
if(task === 17){
    let userChoice = +prompt("камінь(1), ножиці(2), папір(3)?");
    let randomChoice = Math.ceil(Math.random() * 3);

    alert(`${userChoice} VS ${randomChoice}`);

    (randomChoice === userChoice)? alert("~ нічия ~") : (((randomChoice === 1 && userChoice === 2) ||
                                                        (randomChoice === 2 && userChoice === 3) ||
                                                        (randomChoice === 3 && userChoice === 1) )? 
                                                        alert("Ви програли :(") : alert("Ви виграли :)"));
}