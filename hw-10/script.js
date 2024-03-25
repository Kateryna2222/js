//Arrow to Functions
{
    //Temperature
    {
        function transformTemperature(temperature){
            return (9/5)*temperature + 32;
        }
        transformTemperature(32);
    }

    //RGB
    {
        function getColors(r, g, b){
            return `#${(r < 16 ? '0' : '')}${r.toString(16)}${(g < 16 ? '0' : '')}${g.toString(16)}${(b < 16 ? '0' : '')}${b.toString(16)}`;
        }
        getColors(+prompt("Введіть значення червоного кольору: "),+prompt("Введіть значення зеленого кольору: "),+prompt("Введіть значення голубого кольору: "));
    }

    //Flats
    {
        function findEntranceAndFloor(floors, flats, number){
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
        function capitalize(){

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
        let breakStr = function(str){
            let result = str.split('\\n').join('\n');
            return result;
        }
        
        let fixedStr = breakStr(prompt("For space enter \\n: "));
        console.log(fixedStr)
    }
}
// --------------------------------------------------

//createPerson  
{
    function createPerson(name, surname){
        const obj = {
            name,
            surname,
            getFullName(){
                return this.fatherName? `${this.name} ${this.surname} ${this.fatherName}` : `${this.name} ${this.surname}`;
            }
        }
    
        return obj;
    }
    
    const a = createPerson("Вася", "Пупкін")
    const b = createPerson("Ганна", "Іванова")
    const c = createPerson("Єлизавета", "Петрова")

    console.log(a.getFullName()) //Вася Пупкін
    a.fatherName = 'Іванович'    
    console.log(a.getFullName()) //Вася Іванович Пупкін

    console.log(b.getFullName()) //Ганна Іванова
}

//createPersonClosure
{
    function createPersonClosure(name, surname) {
        let fatherName = '';
        let age;
    
        let getName = () => name;
        let getSurname = () => surname;
        let getFatherName = () => fatherName;
        let getAge = () => age;
        let getFullName = () => `${surname} ${name} ${fatherName}`.trimEnd();
    
        function checkIsCorrect(str) {
            if(typeof str === 'string' && str[0] === str[0].toUpperCase()){
                return true;
            }
        }
    
        function setName(newName) {
            if (checkIsCorrect(newName)) {
                name = newName;
                return newName;
            } else {
                return getName();
            }
        }
    
        function setSurname(newSurname) {
            if (checkIsCorrect(newSurname)) {
                surname = newSurname;
                return newSurname;
            } else {
                return getSurname();
            }
        }
    
        function setFatherName(newFatherName) {
            if (checkIsCorrect(newFatherName)) {
                fatherName = newFatherName;
                return newFatherName;
            } else {
                return getFatherName();
            }
        }
    
        function setAge(newAge) {
            if (typeof newAge === 'number' && newAge > 0 && newAge < 100) {
                age = newAge;
                return newAge;
            } else {
                return getAge();
            }
        }
    
        function setFullName(newFullName) {
            let PIB = newFullName.split(' ');
            let correctPIB = PIB.map(word => word[0].toUpperCase());
            if(correctPIB){
                name = PIB[1];
                surname = PIB[0];
                fatherName = PIB[2];
                fullName = newFullName;
                return newFullName;
            } else {
                return getFullName();
            }
        }
    
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        };
    }

    const a = createPersonClosure("Вася", "Пупкін")
    const b = createPersonClosure("Ганна", "Іванова")
    console.log(a.getName())
    a.setAge(15)
    a.setAge(150) //не працює

    b.setFullName("Петрова Ганна Миколаївна")
    console.log(b.getFatherName()) //Миколаївна
}

//createPersonClosureDestruct
{
    function createPersonClosureDestruct(obj) {
    
        let {name = 'Ivan', surname = 'Ivanov', fatherName = 'Ivanovych', age = 18} = obj;
    
        const getName = () => name;
        const getSurname = () => surname;
        const getFatherName = () => fatherName;
        const getAge = () => age;
        const getFullName = () => `${surname} ${name} ${fatherName}`.trimEnd();
    
        function checkIsCorrect(str) {
            if(typeof str === 'string' && str[0] === str[0].toUpperCase()){
                return true;
            }
        }
    
        function setName(newName) {
            if (checkIsCorrect(newName)) {
                name = newName;
                return newName;
            } else {
                return getName();
            }
        }
    
        function setSurname(newSurname) {
            if (checkIsCorrect(newSurname)) {
                surname = newSurname;
                return newSurname;
            } else {
                return getSurname();
            }
        }
    
        function setFatherName(newFatherName) {
            if (checkIsCorrect(newFatherName)) {
                fatherName = newFatherName;
                return newFatherName;
            } else {
                return getFatherName();
            }
        }
    
        function setAge(newAge) {
            if (typeof newAge === 'number' && newAge > 0 && newAge < 100) {
                age = newAge;
                return newAge;
            } else {
                return getAge();
            }
        }
    
        function setFullName(newFullName) {
            let PIB = newFullName.split(' ');
            let correctPIB = PIB.map(word => word[0].toUpperCase());
            if(correctPIB){
                name = PIB[1];
                surname = PIB[0];
                fatherName = PIB[2];
                fullName = newFullName;
                return newFullName;
            } else {
                return getFullName();
            }
        }
    
        return {
            getName,
            getSurname,
            getFatherName,
            getAge,
            getFullName,
            setName,
            setSurname,
            setFatherName,
            setAge,
            setFullName
        };
    }
    
    
    function createPerson(name, surname){
        const obj = {
            name,
            surname,
            getFullName(){
                return this.fatherName? `${this.name} ${this.surname} ${this.fatherName}` : `${this.name} ${this.surname}`;
            }
        }
    
        return obj;
    }
    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкін"))
    const b = createPersonClosureDestruct({name: 'Миколай', age: 75})
}

//isSorted
{
    function isSorted(...params){
        let typesOfItems = params.map(item => typeof item === 'number')
    
        let sortedParams = [...params].sort()
        let sortError = 0;
    
        for(let i = 0; i < params.length; i++){
            params[i] === sortedParams[i]? sortError : sortError++
        }
        
        if(!typesOfItems.includes(false) && sortError === 0){
            return true
        }
        else{
            return false
        }
    }

    //Test isSorted
    const arr = [];
    while(true){
        let ask = prompt('Enter number: ')
        if(ask === null){
            break
        }
        arr.push(+ask);
    }
    isSorted(arr)
}
