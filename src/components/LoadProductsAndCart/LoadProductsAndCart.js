import { getFromStore } from "../AddToStore/AddToStore"


export const LoadProductsAndCart = async() => {
    const res = await fetch('products.json')
    const products = await res.json()
    
    const storedCart = getFromStore()
    const newStoredCart = []
    
    for (const id in storedCart) {
        const addedItems = products.find(product => product.id === id)
        const quantity = storedCart[id]
        addedItems.quantity = quantity
        newStoredCart.push(addedItems) 
    }
    return {products,newStoredCart}
}