//makeProfileTimer
{
    function makeProfileTimer(){

        const start = performance.now()
    
        function timeCount(){
            const end = performance.now()
            return  end - start;
        }
    
        return timeCount
    }
    
    const timer = makeProfileTimer() 
    alert('Вимiрюємо час роботи цього alert');  
    alert(timer()); 
    
    const timer2 = makeProfileTimer()
    prompt('')
    alert(`Час роботи двух аlert та одного prompt ${timer()}`)
    alert(`Час роботи prompt та попереднього alert ${timer2()}`)
}

//makeSaver
{
    function makeSaver(fun){

        let result;
    
        function save(){
            if(!result){
                result = fun()
            }
            return result
        }
    
        return save
    }
    
    let saver = makeSaver(Math.random)
    let value1 = saver()              
    let value2 = saver()             
    alert(`Random: ${value1} === ${value2}`)
    
    let saver2 = makeSaver(() => {
        console.log('saved function called');
        return [null, undefined, false, '', 0, Math.random()][Math.floor(Math.random()*6)]
    })
    let value3 = saver2()
    let value4 = saver2()
    value3 === value4 
    
    let namePrompt = prompt.bind(window, 'Як тебе звуть?')
    let nameSaver = makeSaver(namePrompt)
    alert(`Привіт! Prompt ще не було!`)
    alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`)
    alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`)
}

//myBind
{
    function myBind(func, context, defaultArgs) {
        return function(...args) {
            const finalArgs = defaultArgs.map((val, index) => typeof val !== 'undefined' ? val : args.shift());
            return func.apply(context, finalArgs.concat(args));
        };
    }
    
    let pow5 = myBind(Math.pow, Math, [undefined, 5])
    pow5(2)
}

//checkResult
{
    function checkResult(original, validator) {
        function wrapper(...params) {
            let result = original(...params);
            while (!validator(result)) {
                result = original(...params);
            }
            return result;
        }
        return wrapper;
    }
    
    const numberPrompt = checkResult(prompt, x => !isNaN(+x)) 
    let   number       = +numberPrompt("Введіть число", "0") 
    
    const gamePrompt   = checkResult(prompt, x => ['камень', 'ножиці', 'папір'].includes(x.toLowerCase())) 
    const turn         = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'")
    
    
    //RandomHigh
    const RandomHigh = checkResult(Math.random, x => x > 0.5 && x <= 1);
    let randomNumber = RandomHigh();
    console.log(randomNumber);
    
    //AlwaysSayYes
    const AlwaysSayYes = checkResult(confirm, x => x === true)
    let yes = AlwaysSayYes('Ви погоджуєтесь?')
    
    //respectMe 
    let validation = (login, password) => {
        let userLogin = prompt("Enter login: ");
        let userPassword = prompt("Enter password: ");
        if(!userLogin || !userPassword){
            return null
        }else{
            if (login === userLogin && userPassword === password) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    
    const respectMe = checkResult(validation, (result) => result !== null);
    let result = respectMe("admin", "qwerty");
    console.log(result);
}