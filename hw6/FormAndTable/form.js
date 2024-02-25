//Form
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
    
    
    let str = "<form>"
    
    for (key in car){
        str += `<label>${key}: `
    
        if (typeof car[key] === "number"){
            str += `<input type="number" value="${car[key]}"/>`
        }
        else if (typeof car[key] === "string"){
            str += `<input type="string" value="${car[key]}"/>`
        }
        else if (car[key] === true){
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