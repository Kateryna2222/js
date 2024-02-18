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