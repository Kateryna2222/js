//fetch basic
fetch('https://swapi.dev/api/people/1/') 
.then(res => res.json())
.then(luke => {
    for(let field in luke){
        console.log(field + ': ' + luke[field]);
    }
})

function jsonIntoTable(DOM, JSON){
    fetch(JSON) 
    .then(res => res.json())
    .then(data => {
        let table = document.createElement('table')
        for(let item in data){
            let row = document.createElement('tr')
            let name = document.createElement('td')
            let info = document.createElement('td')
            name.innerText = item + ': '
            info.innerText = data[item]
            row.append(name, info)
            table.append(row)

            table.style.border = '1px solid black'
            row.style.border = '1px solid black'
            name.style.border = '1px solid black'
            info.style.border = '1px solid black'
            DOM.append(table)
        }
    })
}

jsonIntoTable(document.body, 'https://swapi.dev/api/people/1/')


//fetch improved
function jsonIntoTableWithBtn(DOM, JSON){
    fetch(JSON) 
    .then(res => res.json())
    .then(data => {
        let table = document.createElement('table')
        for(let item in data){
            let row = document.createElement('tr')
            let name = document.createElement('td')
            let info = document.createElement('td')

            if(typeof data[item] === 'object' && data[item].every(i => i.includes('https://swapi.dev/api/'))){
                name.innerText = item + ': '
                for(let obj of data[item]){
                    let btn = document.createElement('button')
                    fetch(obj)
                    .then(res => res.json())
                    .then(innerData => {
                        btn.innerText = Object.values(innerData)[0]
                    })
                    info.append(btn)

                    btn.onclick = () => jsonIntoTableWithBtn(info, obj)

                    row.append(name, info)
                    table.append(row)
                }
            }
            else if(typeof data[item] === 'string' && data[item].includes('https://swapi.dev/api/')){
                name.innerText = item + ': '
                let btn = document.createElement('button')

                fetch(data[item])
                .then(res => res.json())
                .then(innerData => {
                    btn.innerText = Object.values(innerData)[0]
                })
                btn.onclick = ()=>jsonIntoTableWithBtn(info, data[item])
                info.append(btn)
                row.append(name, info)
                table.append(row)
            }
            else{
                name.innerText = item + ': '
                info.innerText = data[item]
                row.append(name, info)
                table.append(row)
            }

            table.style.border = '1px solid black'
            row.style.border = '1px solid black'
            name.style.border = '1px solid black'
            info.style.border = '1px solid black'
            DOM.append(table)

        }
    })
}

jsonIntoTableWithBtn(document.body, 'https://swapi.dev/api/people/1/')


//race
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
const fetchPromise = fetch('https://swapi.dev/api/people/1/')
Promise.race([delay(120), fetchPromise]).then(result => typeof result === 'object'? console.log('fetchPromise is faster') : console.log('delay is faster'))


//Promisify: confirm
function confirmPromise(text) {
    return new Promise((resolve, reject) => {
        let isOk = confirm(text)
        if (isOk) {
            resolve();
        } else {
            reject();
        }
    })  
}

confirmPromise('Проміси це складно?').then(() => console.log('не так вже й складно'),
                                            () => console.log('respect за посидючість і уважність'))


//Promisify: prompt
function promptPromise(text) {

    function executer(resolve, reject){
        let answer = prompt(text)
        if (answer) {
            resolve(answer);
        } else {
            reject();
        }
    }

    return new Promise(executer)
}

promptPromise("Як тебе звуть?").then(name => console.log(`Тебе звуть ${name}`),
                                       () => console.log('Ну навіщо морозитися, нормально ж спілкувалися'))



