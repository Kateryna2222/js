let moneyNow = balance.innerText;

//createStore
function createStore(reducer){
    let state       = reducer(undefined, {}) 
    let cbs         = []                    
    
    const getState  = () => state            
    const subscribe = cb => (cbs.push(cb),   
                             () => cbs = cbs.filter(c => c !== cb))
                             
    const dispatch  = action => { 
        const newState = reducer(state, action) 
        if (newState !== state){ 
            state = newState 
            for (let cb of cbs)  cb() 
        }
    }
    
    return {
        getState, 
        dispatch,
        subscribe
    }
}

//reducer
function reducer(state, {type, what, amount, money}){ 
    if (!state){ 
        return {
            milk:{
                count: 100,
                price: 5
            },
            chocolate:{
                count: 40,
                price: 10
            },
            oreo:{
                count: 80,
                price: 20
            },
            kasa: 0
        }
    }
    if (type === 'toBuy'){ 
         return {
             ...state, 
             [what]: {
                 ...state[what],
                  count: money>0 && amount > 0 && state[what].count > 0 &&
                         amount <= state[what].count && amount > 0? state[what].count - amount: state[what].count
             },
             kasa: (state[what].price * amount) > 0 && (state[what].price * amount <= money) && 
                   (state.kasa + (state[what].price * amount) <= moneyNow) && state[what].count > 0?
                   state.kasa + (state[what].price * amount) : state.kasa
         }
    }
    return state 
}

const store = createStore(reducer);

//select, input, button 
const container = document.createElement('div');

const select = document.createElement('select');
for(let item in store.getState()){
    if(item !== 'kasa'){
        const option = document.createElement('option');
        option.value = item;
        option.innerText = item;
        select.append(option)
    }
}

const input = document.createElement('input');
input.type = 'number';

const btn = document.createElement('button');
btn.innerText = 'купити';

container.append(select, document.createElement('br'), input, document.createElement('br'), btn);
userForm.append(container)



//subscribe
store.subscribe(()=>{
    const {milk, chocolate, oreo} = store.getState();
    milkCount.innerText = milk.count;
    chocolateCount.innerText = chocolate.count;
    oreoCount.innerText = oreo.count;

    kasa.innerText = store.getState().kasa;
    balance.innerText = (moneyNow- store.getState().kasa);
    title.innerText = 'Каса: ' + kasa.innerText;

    milk.count === 0? milkCard.classList.add('disable') : milk.count;
    chocolate.count === 0? chocolateCard.classList.add('disable') : chocolate.count;
    oreo.count === 0? oreoCard.classList.add('disable') : oreo.count;
})


//action
const buySomething = (what, amount) => ({type: 'toBuy', what, amount, money: moneyNow});
btn.onclick = () => store.dispatch(buySomething(select.value, input.value))


//price for one
milkCount.innerText = store.getState().milk.count;
chocolateCount.innerText = store.getState().chocolate.count;
oreoCount.innerText = store.getState().oreo.count;

milkPrice.innerText = store.getState().milk.price;
chocolatePrice.innerText = store.getState().chocolate.price;
oreoPrice.innerText = store.getState().oreo.price;






