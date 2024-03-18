//while confirm
{
    while(!confirm("Скасувати?")){
        console.log('Ви не вийшли з циклу')
    }
}

//array fill
{
    const arr = [];
    while(true){
        let ask = prompt('Enter number: ')
        if(ask === null){
            break
        }
        arr.push(+ask);
    }
    console.log(arr)
}

//array fill nopush
{
    const arr = [];
    let i = 0;
    while(true){
        let ask = prompt('Enter number: ')
        if(ask === null){
            break
        }
        if(ask === ""){
            continue
        }
        arr[i] = +ask;
        i++
    }
    console.log(arr)
}

//infinite probability
{
    let i = 0;
    while(true){
        if(Math.random() > 0.9){
            break;
        }
        i++
    }
    alert(`Всього ${i} ітерацій`)
}

//empty loop 
{
    while(prompt("Перервати цикл?") === null){

    }
}

//progression sum
{
    let n = prompt('Введіть кількість доданків:')
    let item = 1;
    let suma = item;
    for(let i = 0; i < n-1; i++){
        item += 3;
        suma += item;
        console.log(item);
    }
    console.log(`Suma ${suma}`)
}

//chess one line
{
    let n = prompt('Введіть довжену рядка:');
    let str = '';
    for(let i = 0; i < n; i++){
        if(i % 2 === 1){
            str += '.';
        }
        else{
            str += '#';
        }
    }
}

//numbers
{
    let str = '';
    for (let i = 0; i < 10; i++){
        
        for(let j = 0; j < 10; j++){
            str += j;
        }
        str += '\n';
    }
    console.log(str);
}

//chess
{
    let n = prompt('Введіть кількість рядків:');
    let m = prompt('Введіть кількість елементів в рядку:');
    let chess = '';

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){

            if(i % 2 === 0 && j % 2 === 0 || i % 2 === 1 && j % 2 === 1){
                chess += '.';
            }
            else{
                chess += '#';
            }

        }
        chess += '\n';
    }
    console.log(chess);
}

//cubes
{
    let n = prompt('Введіть довжену рядка:');
    let arr = [];
    for (let i = 0; i < n; i++){
        arr[i] = i**3
    }
    console.log(arr)
}

//multiply table
{
    let arr = [];

    for(let i = 1; i < 10; i++){
        arr[i] = [];

        for(let j = 1; j < 10; j++){
            arr[i].push(i*j)
        }
    }
    console.log(arr)
}

//read array of objects
{
    readArrayOfObjects = () =>{
        const arr = [];

        while(confirm('Додати об\'єкт?')){
            const obj = {}

            do{
                let key = prompt('Enter key:');
                let value = prompt('Enter value:');
                obj[key] = value;
            }while(confirm('Додати ще ключ?'))

            arr.push(obj)
        }

        return arr;
    }

    readArrayOfObjects();
}

//Ромбік
{
let str = '';
let size = prompt("Input size: ");
let upCount = 0;
let downCount = size-1;
for(let i = 0; i < size; i++){

    let center = Math.floor(size/2);

    for(let j = 0; j < size; j++){
        
        if(size%2 !== 0){
            if(i === center){
                str+="#";
            }
            else if(i < center){
    
                if(j < center-upCount || j > center+upCount){
                    str+=".";
                }
                else{
                    str+="#";
                }
            }
            else{
    
                if(j < center-downCount || j > center+downCount){
                    str+=".";
                }
                else{
                    str+="#";
                }
            }
        }
        else{

            if(i === center){
                str+="#";
            }
            else if(i < center){
    
                if(j < center-upCount-1 || j > center+upCount){
                    str+=".";
                }
                else{
                    str+="#";
                }
            }
            else{
    
                if(j < center-downCount-1 || j > center+downCount){
                    str+=".";
                }
                else{
                    str+="#";
                }
            }
        }
        
    }
    str+='\n';
    upCount++
    downCount--
}
console.log(str)
}


//DOM: multiply table/ highlight cell/ Highlight cross
{
    const table = document.createElement('table');

    for(let i = 1; i < 10; i++){

    const row = document.createElement('tr');

    for(let j = 1; j < 10; j++){

        const item = document.createElement('td');
        item.innerText = i*j;
        item.style.padding = '0 15px 15px';
        row.appendChild(item);

        let addColors = () => {
            row.style.backgroundColor = "green";

            for(let row = 0; row < 9; row++){
                table.rows[row].children[j-1].style.backgroundColor = "green";
            }
            
            item.style.backgroundColor = "yellow";
        }

        let removeColors = () => {
            item.style.backgroundColor = "transparent";
            row.style.backgroundColor = "transparent";

            for(let row = 0; row < 9; row++){
                table.rows[row].children[j-1].style.backgroundColor = "transparent";
            }
        }

        item.addEventListener("mouseover", addColors)
        item.addEventListener("mouseout", removeColors)
       }

     table.appendChild(row);
    }

    table.style.fontSize = '24px';
    document.body.appendChild(table);
}