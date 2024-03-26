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

const a = createPersonClosure("Вася", "Пупкін");
const b = createPersonClosure("Ганна", "Іванова");

function personForm(domElement, person) {
    const containerForm = document.createElement('div');

    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputFathername = document.createElement('input');
    const inputAge = document.createElement('input');
    inputAge.type = "number";
    const inputPIB = document.createElement('input');

    inputName.value = person.getName();
    inputSurname.value = person.getSurname();
    inputFathername.value = person.getFatherName();
    inputAge.value = person.getAge();
    inputPIB.value = person.getFullName();

    containerForm.append(inputName, inputSurname, inputFathername, inputAge, inputPIB);

    inputName.oninput = () => {
        inputName.value = person.setName(inputName.value);
        inputPIB.value = person.getFullName();
    }

    inputSurname.oninput = () => {
        inputSurname.value = person.setSurname(inputSurname.value);
        inputPIB.value = person.getFullName();
    }

    inputFathername.oninput = () => {
        inputFathername.value = person.setFatherName(inputFathername.value);
        inputPIB.value = person.getFullName();
    }
    inputAge.oninput = () => {
        const newAge = person.setAge(+inputAge.value);
        inputAge.value = newAge;
    }
    inputPIB.oninput = () => {
        inputPIB.value = person.setFullName(inputPIB.value);
        inputName.value = person.getName();
        inputSurname.value = person.getSurname();
        inputFathername.value = person.getFatherName();
    };

    domElement.append(containerForm);
}

personForm(main, a);
personForm(document.body, b);