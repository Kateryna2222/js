//comparison if
{
    var age = + prompt ("Скільки вам років?", "");
    if(age < 0){
        alert("Вік не може бути від'ємним")
    }
    else{
        if (age < 18) {
            alert("школяр");
        }
        else{
            if (age > 18 && age < 30){
                alert("молодь");
            }
            else{
                if (age > 30 && age < 45){
                    alert("зрілість");
                }
                else{
                    if (age > 45 && age < 60){
                        alert("захід сонця");
                    }
                    else{
                        alert("як пенсія?");
                    }
                }
            }
        }
    }
}

//switch: sizes
{
    let worldSize = prompt('Введіть розмір в міжнародній системі(XXL-XXS)');

    if(worldSize){
        switch(worldSize.toUpperCase()){
            case 'XXL':
                console.log("Це 8 розмір в США");
                break;
            case 'XL':
                console.log("Це 10 розмір в США");
                break;
            case 'L':
                console.log("Це 12 розмір в США");
                break;
            case 'M':
                console.log("Це 14 розмір в США");
                break;
            case 'S':
                console.log("Це 16 розмір в США");
                break;
            case 'XS':
                console.log("Це 18 розмір в США");
                break;
            case 'XXS':
                console.log("Це 20 розмір в США");
                break;
            default:
                console.log("Такого розміру немає!");
        }
    }
}

//switch: if
{
    let color = prompt("Введіть колір","");

    if(color === "black"){
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    }
    else if(["red", "black"].includes(color)){
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } 
    else if(color === "green"){
        document.write("<div style='background-color: green;'>зелений</div>");
    }
    else if(["blue", "green"].includes(color)){
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    } 
    else{
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
}

//noswitch
{
    const noSwitch = (key, cases, defaultKey='default') => {

        if(key in cases){
            return cases[key]();
        }
        else{
            return cases[defaultKey]();
        }
        
    }
    
    const drink = prompt("Що ви любите пити")
    noSwitch(drink, {
        воду: () => console.log('Найздоровіший вибір!'),
        чай(){
            console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
        },
        "пиво": () => console.log('Добре влітку, та в міру'),
        віскі: function(){
            console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
        },
        default(){
            console.log('шото я не зрозумів')
        }
    })    
}

//closure calc
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {

            let container = document.createElement('div');

            for (const valute in data.rates){
                let btn = document.createElement('button');
                btn.innerText = valute;
                btn.onclick = () =>{
                    let valuteFrom = prompt("Введіть суму в доларах: ");
                    let result = (data.rates[btn.innerText] / data.rates['USD']) * valuteFrom;
                    return alert(`Це ${result.toFixed(1)} ${btn.innerText}`);
                }
                container.appendChild(btn);
            }

            document.write("Виберіть валюту в яку хочете перевести: ");
            document.body.appendChild(container);

            console.log(data) 
        })
}

//closure calc 2
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {

            let selectFrom = document.getElementById('from');
            let selectTo = document.getElementById('to');
            let amount = document.getElementById('amount');
            let rate = document.getElementById('rate');
            let result = document.getElementById('result');

            for (const valute in data.rates){
                let optionFrom = document.createElement('option');
                optionFrom.innerText = valute;
                optionFrom.value = data.rates[valute];
                selectFrom.appendChild(optionFrom);

                let optionTo = document.createElement('option');
                optionTo.innerText = valute;
                optionTo.value = data.rates[valute];
                selectTo.appendChild(optionTo);
            }

            selectFrom.onchange = () => {
                rate.innerText = (selectFrom.value * selectTo.value).toFixed(2);
            }

            selectTo.onchange = () => {
                rate.innerText = (selectFrom.value * selectTo.value).toFixed(2);
            }

            amount.oninput = () => {
                result.innerHTML = ((selectTo.value / selectFrom.value) * amount.value).toFixed(2);
            }

            console.log(data) 
        })
}

//countries and cities
{
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
            
            let selectCountry = document.createElement('select');
            selectCountry.id = 'countries';

            let selectCity = document.createElement('select');
            selectCity.id = 'cities';

            for (country in data){
                let option = document.createElement('option');
                option.innerText = country;
                selectCountry.appendChild(option);
            }

            selectCountry.onchange = () => {
                selectCity.innerText = '';

                for (city of data[selectCountry.value]){
                    let option = document.createElement('option');
                    option.innerText = city;
                    selectCity.appendChild(option);
                }
            }

             document.body.appendChild(selectCountry);
             document.body.appendChild(selectCity);
             console.log(data) 
         })
}