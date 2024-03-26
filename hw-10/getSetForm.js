function createPersonClosure(name, surname) {
    let fatherName = '';
    let age = 18;

    const getName = () => name;
    const getSurname = () => surname;
    const getFatherName = () => fatherName;
    const getAge = () => age;
    const getFullName = () => `${surname} ${name} ${fatherName}`.trim();

    function firstLetterToUpper(word){
        return word[0].toUpperCase() + word.slice(1);
    }

    function setName(newName) {
        if (typeof newName === 'string') {
            name = firstLetterToUpper(newName)
        }
        return getName();
    }

    function setSurname(newSurname) {
        if (typeof newSurname === 'string') {
            surname = firstLetterToUpper(newSurname)
        }
        return getSurname();
    }

    function setFatherName(newFatherName) {
        if (typeof newFatherName === 'string') {
            fatherName = firstLetterToUpper(newFatherName)
        }
        return getFatherName();
    }

    function setAge(newAge) {
        newAge = +newAge;
        if (typeof newAge === 'number' && newAge >= 0 && newAge <= 100) {
            age = newAge;
            return age;
        } else {
            return age;
        }
    }

    function setFullName(newFullName) {
        let PIB = newFullName.split(' ');
        name = firstLetterToUpper(PIB[1]);
        surname = firstLetterToUpper(PIB[0]);
        if(PIB.length === 3){
            fatherName = firstLetterToUpper(PIB[2]);
        }
        return getFullName();
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
// getSetForm
function getSetForm(parent, getSet){
    const containerForm = document.createElement('div');
    const inputs = {} //реєстр

    const updateInputs = () => { 
        for(const key in inputs){
            inputs[key].value = getSet['get' + key]()
        }
    }

    for (const getSetName in getSet){
        const getOrSet = getSetName.slice(0,3) === 'get'? 'get' : 'set';
        const fieldName = getSetName.slice(3);
        const setKey    = `set` + fieldName;
        const getKey    = `get` + fieldName;

        const input = document.createElement('input');

        if(getOrSet === 'get'){
            inputs[fieldName] = input;
            inputs[fieldName].value = getSet[getKey]();
            inputs[fieldName].type = typeof getSet[getKey]();
            inputs[fieldName].placeholder = fieldName;

            if(!(setKey in getSet)){
                inputs[fieldName].disabled = true;
            }            

            inputs[fieldName].oninput = ()=>{
                inputs[fieldName].value = getSet[setKey](inputs[fieldName].value);
                updateInputs()
            }

            containerForm.append(input);
        }
    }

    console.log(inputs)

    updateInputs()

    parent.append(containerForm);
}
const person = createPersonClosure('Анон', "Анонов");
getSetForm(document.body, person)



// перевірка з car
let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}
getSetForm(document.body, car)
