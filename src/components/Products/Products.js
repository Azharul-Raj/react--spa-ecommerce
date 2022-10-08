import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToStorage, getFromStore } from '../AddToStore/AddToStore';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const products=useLoaderData()
    // cart setting function here
    const [cart,setCart]=useState([])

    // load data from localStorage
    useEffect(()=>{
        const storedData=getFromStore()
        // console.log(storedData)
        let storedCart=[]
        for(const id in storedData){
            const storedProduct=products.find(product=>product.id===id)
            if(storedProduct){
                const quantity=storedData[id]
                storedProduct.quantity=quantity
                storedCart.push(storedProduct)
            }
            // console.log(storedProduct)
            setCart(storedCart)
            // console.log(cart)
        }
    },[products])

    const handleCart=(id,selectedProduct)=>{
        let newCart;
        // console.log(selectedProduct);
        const exist=cart.find(product=>product.id===id)
        if(!exist){ 
            selectedProduct.quantity=1
            newCart= [...cart,selectedProduct]
        }
        else{
            exist.quantity +=1
            const rest=cart.filter(product=>product.id!==id)
            newCart=[...rest,exist]
        }
        setCart(newCart)
        // const rest=products.filter(product=>product.id!==id)
        // console.log(rest)
        addToStorage(id)
    }
    // console.log(cart);
    return (
        <div className='main'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Products;