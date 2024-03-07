//Temperature
{
    let transformTemperature = (temperature) => (9/5)*temperature + 32;
    transformTemperature(32);
}

//RGB
{
    let getColors = (r, g, b) => `#${(r < 16 ? '0' : '')}${r.toString(16)}
                               ${(g < 16 ? '0' : '')}${g.toString(16)}
                               ${(b < 16 ? '0' : '')}${b.toString(16)}`;

    getColors(+prompt("Введіть значення червоного кольору: "),+prompt("Введіть значення зеленого кольору: "),+prompt("Введіть значення голубого кольору: "));
}

//Flats
{
    let findEntranceAndFloor = (floors, flats, number) => {
        let amountFlatsInBuilding = floors * flats;
    
        let flat = {
            entrance: Math.ceil(number/amountFlatsInBuilding),
            floor: Math.ceil((number%amountFlatsInBuilding)/flats)
        }
    
        return flat;
    }
    
    findEntranceAndFloor(prompt("Кількість поверхів: "),prompt("Кількість квартир: "),prompt("Введіть номер: "));    
}

//Credentials
{
    const capitalize = () => {

        let data = {
            name: prompt('Введіть ім\'я: '),
            surname: prompt('Введіть прізвище: '),
            fatherName: prompt('Введіть побатькови: ')
        }
    
        for (let item in data){
            item = item[0].toUpperCase() + item.slice(1).toLowerCase;
        }
    
        data.fullName = `${data.name} ${data.surname} ${data.fatherName}`;
        return data;
    }
    
    capitalize();
}

//New line
{
    let breakStr = (str) =>{
        let result = str.split('\\n').join('\n');
        return result;
    }
    
    let fixedStr = breakStr(prompt("For space enter \\n: "));
    console.log(fixedStr)
}

//Prompt OR
{
    let getYear = (age, defAge=18) => age? 2024-age : 2024-defAge;
    getYear(prompt("Enter your age:"))
}

//Login And Password
{
    let validation = (login, password) =>{
        let userLogin = prompt("Enter login: ");
        let userPassword = prompt("Enter password: ");
    
        if(login === userLogin && userPassword === password){
            return true;
        }
        else{
            return false;
        }
    }
    
    validation("admin","qwerty")
}

//For Table
{
    let arrIntoHtml = (arr) => {
        let str = `<table>`
        for(item of arr){
            if((arr.indexOf(item) % 2) === 0){
                str += `<tr style="background-color: green">`;
            } else{
                str += `<tr style="background-color: yellow">`;
            }
            for(number of item){
                str += `<td>${number}</td>`;
            }
        }
        str += `</table>`
        return str;
    }
    
    arrIntoHtml([[0,1,2,3,4,5],[0,2,4,6,8,10]])
}

//Filter Lexics
{
    let badWords = ['бляха', 'link', "пляшка", "шабля"]    
    let str = prompt('Введіть речення: ');

    let clearStr = (str, arr) =>{
        let arrFromStr = str.split(' ');

        arrFromStr = arrFromStr.filter(word => !arr.includes(word))

        str = arrFromStr.join(' ');
        return str;
    }

    let goodStr = clearStr(str, badWords)
    console.log(goodStr);
}

//Currency Table
{
    let makeArr = () =>{
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
        
            // створюю двовимірний масив
           let arr = []
           for(key in data.rates){
            let innerArr = [];
               for(key2 in data.rates){
                  let res = data.rates[key]/data.rates[key2];
                  innerArr.push(res.toFixed(2));
               }
               arr.push(innerArr);
           }
       
            // функція із завдання For Table для відображання 
            let arrIntoHtml = (arr) => {
                let str = `<table>`
                for(item of arr){
                    if((arr.indexOf(item) % 2) === 0){
                        str += `<tr style="background-color: green">`;
                    } else{
                        str += `<tr style="background-color: yellow">`;
                    }
                    for(number of item){
                        str += `<td>${number}</td>`;
                    }
                }
                str += `</table>`
                document.write(str)
            }

           console.log(arr) 
           arrIntoHtml(arr)
        })
    }

    makeArr()
}

//form
{
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
    }
    
    const makeForm = (obj) =>{
        let str = "<form>"
        
        for (key in obj){
            str += `<label>${key}: `
        
            if (typeof obj[key] === "number"){
                str += `<input type="number" value="${obj[key]}"/>`
            }
            else if (typeof obj[key] === "string"){
                str += `<input type="string" value="${obj[key]}"/>`
            }
            else if (obj[key] === true){
                str += `<input type="checkbox" checked />`
            }
            else{
                str += `<input type="checkbox"/>`
            }
        
            str += "</label><br><br>"
        }
        
        str += "</form>"
        document.write(str)
    }
    
    makeForm(car)
}


//Array of objects sort
{
    var persons = [
        {name: "Іван", age: 17},
        {name: "Марія", age: 35},
        {name: "Олексій", age: 73},
        {name: "Яків", age: 12},
    ]
    
    let sort = (arr, key, direction = true) => {
        return arr.sort((a, b) => {
            if(a[key] < b[key]){
                return direction === true? -1:1;
            }
            if(a[key] > b[key]){
                return direction === true? 1:-1;
            }
        });
    }
    
    sort(persons, "age"); 
    console.log(persons)
    
    sort(persons, "name", false);
    console.log(persons)    

    //Table
    const persons2 = [
        {
           "Name":"chevrolet chevelle malibu",
           "Cylinders":8,
           "Displacement":307,
           "Horsepower":130,
           "Weight_in_lbs":3504,
           "Origin":"USA"
        },
        {
           "Name":"buick skylark 320",
           "Miles_per_Gallon":15,
           "Cylinders":8,
           "Displacement":350,
           "Horsepower":165,
           "Weight_in_lbs":3693,
           "Acceleration":11.5,
           "Year":"1970-01-01",
        },
        {
           "Miles_per_Gallon":18,
           "Cylinders":8,
           "Displacement":318,
           "Horsepower":150,
           "Weight_in_lbs":3436,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
        {
           "Name":"amc rebel sst",
           "Miles_per_Gallon":16,
           "Cylinders":8,
           "Displacement":304,
           "Horsepower":150,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
     ]
    
    let objSort = (array, key, direction = true) =>{
    
        let arr = []
    
        for (let item of array){
            arr.push({...item});
        }

        sort(arr, key, direction);
    
        // ---------------------------- //
        let header = [];// масив з ключів
    
        for (i of arr){
            header.push(...Object.keys(i))
        }
    
    
        let col = []; //масив без повторів
    
        for (item of header){
            if(!(col.includes(item))){
                col.push(item)
            }
        }
        console.log(col)
    
        let str4 = `<table><tr>`
        for (item of col){
            str4 += `<th>${item}&nbsp</th>`
        }
        str4 += `</tr>`
    
        for (obj of arr){
            str4 += `<tr>`
            for (keyTrue of col){
                if(keyTrue in obj){
                    str4 += `<td>${obj[keyTrue]}</td>`
                }else{
                    str4 += `<td></td>`
                }
            }
            str4 += `</tr>`
        }
        str4 += `</table>`
        document.write(str4)
    }
    
    objSort(persons2, "Displacement", false)    
}

//Divide
{
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const divisionResult = document.getElementById('divisionResult');
    
    const calcResult = () => {
        divisionResult.innerHTML = "Розрахунок поділу націло двох чисел: " + Math.floor(firstNumber.value/secondNumber.value);
        console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
    }
    
    firstNumber.oninput = secondNumber.oninput = calcResult
}

//Calc Func
{
    let countHoursAtDay = (hour,lessons,days) =>{
        let hoursForLessons = hour*lessons; 
        let hourAtDay = hoursForLessons / days;

        console.log("You need to spend " + hourAtDay + " hours for lessons at day.")
        return hourAtDay;
    }

    countHoursAtDay(1.5, 10, prompt("Enter amount of days:"));
}

//Calc Live
{
    let hour = document.getElementById('hours');
    let lessons = document.getElementById('lessons');
    let days = document.getElementById('days');
    let hourAtDay = document.getElementById('hourAtDay');

    let countHoursAtDay = () =>{
        let hoursForLessons = hour.value * lessons.value;
        hourAtDay.innerHTML = "You need to spend " + (hoursForLessons / days.value).toFixed(1) + " hours for lessons at day.";
    }

    hour.oninput = lessons.oninput = days.oninput = countHoursAtDay;
}