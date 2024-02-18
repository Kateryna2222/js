//Confirms
{
    const arr = [confirm('Like pizza?'), confirm('Like cake?')];
    console.log(arr);
}

//Prompts
{
    let name = prompt('Enter name: ');
    let age = +prompt('Enter age: ');
    let arr = [];
    arr[0] = name[0].toUpperCase() + name.slice(1);
    arr[1] = age;
    console.log(arr);
}

//Item access 
{
    let index = prompt("Input index of array (0-5): ");
    let arr = [0,1,2,3,4,5];
    console.log(arr[index]);

    let indexOfLength = prompt("Input index length: ");
    arr.length = indexOfLength;
    console.log(arr);
}

//Item change
{
    let index = prompt("Input index of array (0-5): ");
    let newValue = prompt("Input new value: ");
    let arr = [0,1,2,3,4,5];
    arr[index] = newValue;
    console.log(arr);
}

//Multiply table
{
    let arr = [[0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    console.log(arr[3][5]);
}

//Multiply table slice
{
    let arr = [[0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];

    let i = 0;
    const arrNew = arr.slice(1);
    for(item of arrNew){
        arrNew[i] = arrNew[i].slice(1);
        i++
    }

    console.log(arrNew);
}

//IndexOf Word
{
    let colors = prompt('Введіть кольори: ');
    const arr = colors.split(' ');
    console.log(arr);
    
    let favourite = prompt('Який вам подобається найбільше? ');
    
    arr.includes(favourite)? alert(`Дане слово є ${arr.indexOf(favourite) + 1} в рядку.`): alert('Даного кольору в списку немає!');    
}

//Reverse
{
    let [a,b,c,d,f] = [prompt("Enter letter: "), prompt("Enter again: "), prompt("More: "), prompt("More: "), prompt("Enter last letter: ")];
    const arr = [];
    arr.push(a,b,c,d,f);
    console.log(arr);
    
    const arr2 = [];
    
    for (let i = 5; i > 0; i--){
        arr2.push(arr.pop());
    }
    
    console.log(arr2);    
    
    //Reverse 2
    const arr3 = []
    
    for(let i = 0; i < 5; i++){
        arr3.unshift(arr2.shift());
    }
    
    console.log(arr3);
}

//Copy
{
    let arr = [[0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];

    let copy = [...arr];
    console.log(copy);

    //Deep Copy
    let deepCopy = [];
    for(item of arr){
        deepCopy.push([...item]);
    }

    console.log(deepCopy);
}

//Array Equals
{
    let arr1 = [1,2,3,4,5];
    let arr2 = arr1;
    console.log(arr1 === arr2);
}

//Flat
{
    //Multiply table 
    let arr = [[0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    let i = 0;
    const arrNew = arr.slice(1);
    for(item of arrNew){
        arrNew[i] = arrNew[i].slice(1);
        i++
    }
    //flat
    let arr2 = [];
    for(item of arrNew){
        arr2.push(...item);
    }
}

//Destruct
{
    let row = prompt("Введіть рядок: ");
    let [first,five,nine] = [row[0], row[4], row[8]];
    alert(`1-${first}, 5-${five}, 9-${nine}.`);
}

//Destruct default
{
    let row = prompt("Введіть рядок: ");
    let [two ='!',four='!',five='!'] = [row[1], row[3],row[4]];
    alert(`2-${two}, 4-${four}, 5-${five}.`);
}

//Multiply table rest
{
    let arr = [[0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    let arr2 = arr.slice(1);

    const arrWithoutZero = [];

    let [[a, ...a2], [b, ...b2], [c, ...c2], [d, ...d2], [p, ...p2]] = arr2;
    arrWithoutZero.push(a2,b2,c2,d2,p2);
    console.log(arrWithoutZero);
}

//For Alert
{
    const arr = ["John", "Paul", "George", "Ringo"];
    for(item of arr){
        alert(item);
    }
}

//For Select Option
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<select>"
    for (const currency of currencies){
    //    YOUR MAGIC HERE
        str += `<option>${currency}</currency>`;
    }
    str+= "</select>"
    document.write(str)
}

//For Table Horizontal
{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str += `<tr>${name} </tr>`
    }
    str+= "</table>"
    document.write(str) 
}

//For Table Vertical
{
    const names = ["John", "Paul", "George", "Ringo"]
    let   str = "<table>"
    for (const name of names){
        str += `<tr>`
        str += `<td>${name}</td>`
        str += `</tr>`
    }
    str+= "</table>"
    document.write(str) 
}

//For Table Letters
{
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>"
    for (const currency of currencies){ //цикл створює рядки
        str += `<tr>`
        console.log(currency)
        for (const letter of currency){ //цикл створює осередки в одному рядку
            str += `<td>${letter}</td>`
            console.log(letter)
        }
    }
    str+= "</table>"
    document.write(str)
}

//For Multiply Table
{
    let arr = [[0, 0, 0, 0, 0, 0],[0,1,2,3,4,5],[0,2,4,6,8,10],[0,3,6,9,12,15],[0,4,8,12,16,20],[0,5,10,15,20,25]];
    let str = `<table>`
    for(item of arr){
        if((arr.indexOf(item) % 2) === 0){
            str += `<tr style="background-color: green">`;
        } else{
            str += `<tr style="background-color: yellow">`;
        }
        for(number of item){
            str += `<td>${number}&nbsp</td>`;
        }
    }
    str += `</table>`
    document.write(str);
}

//Function Capitalize
{
    const capitalize = str => {
        let result
        result = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return result //саме цей код забезпечить повернення результату функції
    }
    console.log(capitalize("cANBerRa"))    
}

//Map Capitalize
{
    let colors = prompt('Введіть кольори: ');
    let arr = colors.split(' ');
    
    arr = arr.map(word => word[0].toUpperCase() + word.slice(1));
    arr = arr.join(" ");
    console.log(arr)
    
}

//Filter Lexics
{
    let str = prompt('Введіть речення: ');
    let arr = str.split(' ');
    console.log(arr);

    arr = arr.filter(word => word !== 'bad');
    str = arr.join(' ');
    console.log(str);
}

//Beep Lexics
{
    let str = prompt('Введіть речення: ');
    str = str.split(' ');
    console.log(str);

    const words = ['bad', 'not', 'terrible'];

    str = str.map(word => words.includes(word)? word = 'BEEP' : word = word);
    str = str.join(' ');
    console.log(str);
}

//Reduce HTML
{
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let str = "<select>";
    str += currencies.reduce( (a,b) => a + `<option>${b}</option>`, "");
    str += "</select>";
    document.write(str)
}

//For Brackets Hell Check
{
    const line = prompt()
    const bracketsStack = []
    let i = 0
    for (const character of line){
        if (character === "(" || character === "{" || character === "["){
            bracketsStack.push(character);
        }
        console.log(bracketsStack)
        if (character === "}" &&  bracketsStack[bracketsStack.length-1] !== "{" ||
            character === "]" &&  bracketsStack[bracketsStack.length-1] !== "[" ||
            character === ")" &&  bracketsStack[bracketsStack.length-1] !== "("){
            alert("Перевірте дужки!")
            break;
        } else if (character === "}" || character === "]" || character === ")"){
            bracketsStack.pop();
        }
        i++ 
        if (i === line.length){
            alert('Ура! Помилок не знайдено!')
        }
    }
}