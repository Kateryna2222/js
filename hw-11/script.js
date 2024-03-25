function makeSaver(f){
    f = () => 0
}

let saver = makeSaver(Math.random) //створює функцію-сховище результату переданої як параметр функції (Math.random 
// у прикладі). На цьому етапі Math.random НЕ ВИКЛИКАЄТЬСЯ
let value1 = saver()              //saver викликає передану в makeSaver функцію, запам'ятовує результат і повертає його
let value2 = saver()              //saver надалі просто зберігає результат функції, і більше НЕ викликає передану 
//в makeSaver функцію;
alert(`Random: ${value1} === ${value2}`)

let saver2 = makeSaver(() => {
console.log('saved function called');
return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
})
let value3 = saver2()
let value4 = saver2()

value3 === value4 // теж має бути true



let namePrompt = prompt.bind(window, 'Як тебе звуть?')
let nameSaver = makeSaver(namePrompt)
alert(`Привіт! Prompt ще не було!`)
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)