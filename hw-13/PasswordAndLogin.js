//Password
function Password(parent, open){
    const userPasswordInput = document.createElement('input');
    const textOrPassword = document.createElement('button');

    this.getValue = () => userPasswordInput.value;
    this.setValue = (newPassword) => {
        userPasswordInput.value = newPassword
        return this.getValue()
    };

    this.getOpen = () => open
    this.setOpen = (newOpen) => {
        if(newOpen){
            userPasswordInput.type = 'text'
            textOrPassword.innerText = 'Сховати'
        }
        else{
            userPasswordInput.type ='password';
            textOrPassword.innerText = 'Відкрити'
        }
        open = newOpen

        return this.getOpen()
    };

    textOrPassword.addEventListener('click', () => {
            this.setOpen(!open)
            if(userPasswordInput.type === 'text'){
                userPasswordInput.type = 'password';
                textOrPassword.innerText = 'Відкрити'
            }
            else{
                userPasswordInput.type = 'text'
                textOrPassword.innerText = 'Сховати'
            }
            if (typeof this.onOpenChange === 'function'){ 
                this.onOpenChange(this.getOpen())
            }
        })
    
    userPasswordInput.oninput = () => {
        if (typeof this.onChange === 'function'){ 
            this.onChange(this.setValue(userPasswordInput.value))
        }
    }

    this.setStyle = (obj, style) => {
        if(obj === 'input'){
            obj = userPasswordInput
            userPasswordInput.style.cssText = `${style}`;
        }
        else if(obj === 'button'){
            obj = textOrPassword
            textOrPassword.style.cssText = `${style}`;
        }
    }

    parent.append(userPasswordInput, textOrPassword);
}

let p = new Password(document.body, true)

p.onChange = data => console.log(data) 
p.onOpenChange = open => console.log(open)

p.setValue('qwerty')
console.log(p.getValue())

p.setOpen(false)
console.log(p.getOpen())
document.body.appendChild(document.createElement('br'))



//LoginForm
let login = new Password(document.body, true)
login.setStyle('button', 'display: none')
document.body.appendChild(document.createElement('br'))

let password = new Password(document.body, true)
password.setOpen(false)

let confirmBtn = document.createElement('button')
confirmBtn.innerText = 'Підтвердити'
confirmBtn.disabled = true
document.body.appendChild(confirmBtn)


const notEmptyField = () => {
    if(login.getValue() && password.getValue()){
        confirmBtn.disabled = false
    }
    else{
        confirmBtn.disabled = true
    }
}

login.onChange = () => notEmptyField();
password.onChange = () => notEmptyField();


//LoginForm Constructor

function LoginForm(){
    let login = new Password(document.body, true)
    let password = new Password(document.body, true)

    this.getLogin = () => login.getValue()
    this.getPassword = () => password.getValue()

    this.setLogin = (newLogin) => {
        login.setValue(newLogin)
        return this.getLogin()
    }
    this.setPassword = (newPassword) =>  {
        password.setValue(newPassword)
        return this.getPassword()
    }


    login.setStyle('button', 'display: none')
    document.body.appendChild(document.createElement('br'))

    password.setOpen(false)
    let confirmBtn = document.createElement('button')
    confirmBtn.innerText = 'Підтвердити'
    confirmBtn.disabled = true
    document.body.appendChild(confirmBtn)

    const notEmptyField = () => {
        if(this.getLogin() && this.getPassword()){
            confirmBtn.disabled = false
        }
        else{
            confirmBtn.disabled = true
        }
    }

    login.onChange = () => notEmptyField();
    password.onChange = () => notEmptyField();
}

let form = new LoginForm();



//Password Verify
document.body.appendChild(document.createElement('br'))

let password1 = new Password(document.body, false)
let password2 = new Password(document.body, false)

password1.setOpen(true)
password2.setOpen(true)


const makePasswordError = () => {
    if(password1.getValue() !== password2.getValue()){
        if(password1.getOpen()){
            password1.setStyle('input', 'outline: 2px solid red; border: none')
            password2.setStyle('input', 'outline: 2px solid red; border: none')
        }
    }
    else{
        password1.setStyle('input', 'outline: none; border: 1px solid black')
        password2.setStyle('input', 'outline: none; border: 1px solid black')
    }
}

const hideSecondField = () => {
    if(!password1.getOpen()){
        password2.setStyle('input', 'display: none;')
        password2.setStyle('button', 'display: none;')
    }
    else{
        password2.setStyle('input', 'display: inline;')
        password2.setStyle('button', 'display: inline-block;')
    }
}


password2.onChange = () => makePasswordError();
password1.onChange = () => makePasswordError();

password1.onOpenChange = () => hideSecondField();



