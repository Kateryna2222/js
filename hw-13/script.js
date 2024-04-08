//Person Constructor
{
    function Person(name, surname){
        this.name = name
        this.surname = surname
        this.getFullName = function(){
            return this.fatherName? `${this.name} ${this.surname} ${this.fatherName}` : `${this.name} ${this.surname}`
        }
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' 
    console.log(a.getFullName()) // Василь Іванович Пупкін

    console.log(b.getFullName()) // Ганна Іванова
}

//Person Prototype
{
    function Person(name, surname){
        this.name = name
        this.surname = surname
    }

    Person.prototype.getFullName = function(){
        return this.fatherName? `${this.name} ${this.surname} ${this.fatherName}` : `${this.name} ${this.surname}`
    }

    const a = new Person("Вася", "Пупкін")
    const b = new Person("Ганна", "Іванова")

    console.log(a.getFullName()) // Василь Пупкін
    a.fatherName = 'Іванович' 
    console.log(a.getFullName()) // Василь Іванович Пупкін

    console.log(b.getFullName()) // Ганна Іванова
}

//Store
{
    function Store(reducer){
        let state       = reducer(undefined, {}) 
        let cbs         = []  

        this.getState = function(){
            return state
        }

        this.subscribe = (cb) => {
            cbs.push(cb);
            return () => cbs = cbs.filter(c => c !== cb);
        }

        this.dispatch = (action) => {
            const newState = reducer(state, action)
            if(newState !== state){
                state = newState
                for(let cb of cbs) cb()
            }
        }
    }

    //const store = new Store(reducer)
}