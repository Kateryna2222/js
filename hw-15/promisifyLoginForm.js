//конструктор Password
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

//Promisify: LoginForm
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

    this.getSubmitBtn = () => confirmBtn

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


function loginPromise(parent){
    function executor(resolve, reject){
        const form = new LoginForm(parent)

        form.getSubmitBtn().onclick = () => {
            let obj = {
                login: form.getLogin(),
                password: form.getPassword()
            }
            resolve(obj)
        }
    }
    
    return new Promise(executor)
}

loginPromise(document.body).then(({login, password}) => console.log(`Ви ввели ${login} та ${password}`))