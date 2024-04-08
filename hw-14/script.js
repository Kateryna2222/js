const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}

//Рекурсія: HTML tree
function htmlTree(obj){
    let str = '';
    for(let child in obj){
        if(child === 'tagName'){
            str += `<${obj[child]}`
            if (obj.attrs){
                for (let atr in obj.attrs) {
                    str += ` ${atr}="${obj.attrs[atr]}"`;
                }
            }
            str += '>'
        }
        else if(child === 'children'){
            for(let item of obj[child]){
                if(typeof item === 'string'){
                    str += item
                }
                else{
                    str += htmlTree(item);
                }
            }
        }
    }
    str += `</${obj.tagName}>`
    console.log(str)
    return str
}

document.write(htmlTree(table))


//Рекурсія: DOM tree
function domTree(parent, obj) {
    if (obj.tagName) {
        const childElement = document.createElement(obj.tagName);
        parent.append(childElement);
        if (obj.attrs) {
            for (let attr in obj.attrs) {
                childElement.setAttribute(attr, obj.attrs[attr]);
            }
        }
        if (obj.children) {
            for (let child of obj.children) {
                domTree(childElement, child);
            }
        }
    } else if (Array.isArray(obj)) {
        for (let child of obj) {
            domTree(parent, child);
        }
    } else if (typeof obj === 'string') {
        parent.appendChild(document.createTextNode(obj));
    }
}
domTree(document.body, table)


//Рекурсія: Deep Copy
const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]

function deepCopy(structure){
    let newStructur;
    if(Array.isArray(structure)){
        newStructur = []

        for(let item of structure){
            if(typeof item === 'object' && item !== null){
                newStructur.push(deepCopy(item))
            }
            else{
                newStructur.push(item)
            }
        }
    }
    else if(typeof structure === 'object' && structure !== null){
        newStructur = {}

        for(let item in structure){
            if(typeof structure[item] === 'object' && structure[item] !== null){
                newStructur[item] = deepCopy(structure[item])
            }
            else{
                newStructur[item] = structure[item]
            }
        }
    }
    return newStructur
}

const arr2 = deepCopy(arr) 
console.log(arr2)

const table2 = deepCopy(table)
console.log(table2)


//Рекурсия: My Stringify
{
    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false]
    
    function stringify(structure){
        let str = '';
        if(Array.isArray(structure)){
            str += '['
            for(let i = 0; i < structure.length; i++){
                const item = structure[i];
                if(typeof item === 'object' && item !== null){
                    str += stringify(item);
                }
                else if(typeof item === 'string'){
                    str += `"${item}"`;
                }
                else if(typeof item === 'undefined'){
                    str += 'null';
                }
                else{
                    str += item;
                }
                if (i < structure.length - 1) {
                    str += ',';
                }
            }
            str += ']'
        }
        else if(typeof structure === 'object' && structure !== null){
            str += '{'
    
            for(let i = 0; i < Object.keys(structure).length; i++){
                const item = Object.keys(structure)[i]
                if(typeof structure[item] !== 'undefined'){
                    if(typeof structure[item] === 'object' && structure[item] !== null){
                        str += `"${item}":${stringify(structure[item])}`
                    }
                    else{
                        if(typeof structure[item] === 'string'){
                            str += `"${item}":"${structure[item]}"`
                        }
                        else{
                            str += `"${item}":${structure[item]}`
                        }
                    }
                    if (i < Object.keys(structure).length - 1) {
                        str += ',';
                    }
                }
            }

            str += '}'
        }
        return str
    }
    console.log(stringify(arr))
    console.log(JSON.stringify(arr))

    console.log(stringify(table))
    console.log(JSON.stringify(table))

    const jsonString = stringify(arr) 
    const jsonString2 = stringify(table) 
    console.log(JSON.parse(jsonString)) 
    console.log(jsonString === JSON.stringify(arr)) 
    console.log(jsonString2 === JSON.stringify(table))
    
}

//Рекурсія: getElementById throw
{
    function getElementById(idToFind){
        function walker(parent){
            for(const child of parent.children){
                if(child.id === idToFind){
                    throw new Error(`Id '${idToFind}' належить: ${child.outerHTML}`)
                }
                walker(child)
            }
        }
        return walker
    }
    let findMenu = getElementById('menu')
    findMenu(document.body)
}