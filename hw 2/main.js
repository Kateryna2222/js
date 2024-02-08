//assign: evaluation
var a = 5;  
var b, c;

b = a * 5;  
b = c = b/2; 

// Number: age
let age = +prompt("Введіть ваш вік: ");
let yearsOld = 2024 - age;
alert("Ваш рік народження: " + yearsOld);

// temperature
let temperature = +prompt("Введіть температуру в градусах Цельсія: ");
let temperatureF = (9/5)*temperature + 32;
alert(`Це ${temperatureF} Фаренгейти`);

// divide
let x = +prompt("Введіть x: ");
let y = +prompt("Введіть y: ");
let result = Math.floor(x/y);
alert("розрахунок поділу націло двох чисел: " + result);

// currency
const rate = 38.5;
let grn = +prompt("Введіть суму в грн: ");
let dollars = (grn/rate).toFixed(2);
alert(`Це ${dollars}$`);

// RGB
let red = +prompt("Введіть значення червоного кольору: ");
let green = +prompt("Введіть значення зеленого кольору: ");
let blue = +prompt("Введіть значення голубого кольору: ");

let hexRed = red.toString(16);
let hexGreen = green.toString(16);
let hexBlue = blue.toString(16);

let cssColor = "#" + hexRed + hexGreen + hexBlue;
alert("Css color: " + cssColor);

// flats
let floors = +prompt("Введіть кількість поверхів: ");
let flats = +prompt("Введіть кількість квартир: ");
let number = +prompt("Введіть номер: ");

let amountFlatsInBuilding = floors * flats;

let building = Math.ceil(number/amountFlatsInBuilding); // під'їзд
let floor = Math.ceil((number%amountFlatsInBuilding)/flats); // поверх

alert(`під'їзд: ${building}, поверх: ${floor}.`)



