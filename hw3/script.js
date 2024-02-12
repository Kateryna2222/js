//greeting
{
    let name = prompt("Введіть ім'я: ");
    alert(`Hello, ${name}!`);
}

//gopni4ek
{
    let str = prompt('Введіть речення: ');
    console.log(str.split(",").join(" блін, "))
}

//capitalize
{
    let str = "cANBerRa"
    let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
    console.log(result);
}

//word count
{
    let str = "Порахуйте кількість слів у рядку.";
    let count = (str.split(' ')).length;
    console.log(`У рядку ${count} слів`);
}

//credentials
{
    let name = (prompt('Введіть ім\'я: ')).trim();
    let surname = (prompt('Введіть прізвище: ')).trim();
    let fatherName = (prompt('Введіть по батькові: ')).trim();

    let nameCapitalize = name[0].toUpperCase() + name.slice(1).toLowerCase();
    let surnameCapitalize = surname[0].toUpperCase() + surname.slice(1).toLowerCase();
    let fatherNameCapitalize = fatherName[0].toUpperCase() + fatherName.slice(1).toLowerCase();

    let fullName = `${nameCapitalize}, ${surnameCapitalize}, ${fatherNameCapitalize}.`;
    console.log(fullName);
}

//beer
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result = (str.split(" ")).slice(0, 4).join(" ") + " чай " + (str.split(" ")).slice(-2).join(" ");
    console.log(result);
}

//no tag
{
    let str = "Lorem ipsum dolor sit amet <br /> adipisicing elit. Vel tempore, illo qui voluptatibus";

    let result = str.slice(0, str.indexOf("<")) + str.slice(str.indexOf(">")+2);
    console.log(result);
}

//big tag
{
    let str = "Lorem ipsum dolor sit amet <br /> adipisicing elit. Vel tempore, illo qui voluptatibus";

    let result = str.slice(0, str.indexOf("<")) + str.slice(str.indexOf("<"), str.indexOf(">")+1).toUpperCase() + str.slice(str.indexOf(">")+1);
    console.log(result);
}

//new line
{
    let str = prompt("For space enter \\n: ");
    let result = str.split('\\n').join('\n');
    console.log(result);
}

//youtube
{
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    let userInput = prompt('Введіть текст із посиланням на YouTube:');
    let match = userInput.match(youtubeRegex);

    let videoId = match[1];
    let iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
    document.write(iframe);
}