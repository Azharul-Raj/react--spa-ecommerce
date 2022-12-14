// set to localStorage function
const addToStorage=(id)=>{
    let items={}
    const storedItem=localStorage.getItem('cart')
    if(storedItem){
        items =JSON.parse(storedItem)
    }
    const quantity=items[id]
    if(quantity){
        items[id]=quantity + 1
    }
     else{
         items[id]=1
    }
    localStorage.setItem('cart',JSON.stringify(items))
}
const getFromStore=()=>{
    let items={}
    const storedItem=localStorage.getItem('cart')
    if(storedItem){
        items =JSON.parse(storedItem)
    }
    return items
}

const removeFromStore = (id) => {
    const storedItem = JSON.parse (localStorage.getItem('cart'))
    if(id in storedItem) {
        delete storedItem[id]
        localStorage.setItem('cart',JSON.stringify(storedItem))
    }
}

export {addToStorage,getFromStore,removeFromStore}