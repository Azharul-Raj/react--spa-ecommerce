import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFromStore, removeFromStore } from '../AddToStore/AddToStore';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import './Orders.css'

const Orders = () => {
    const { products,newStoredCart } = useLoaderData()
    const [cart,setCart]=useState(newStoredCart)
    // handleDelete function
    const handleDelete = (id) => {
        // console.log(id);
        const storedItems = getFromStore()
        const existProduct = cart.filter(product => product.id !== id)
        setCart(existProduct)
        console.log(storedItems)
        // for (const id in storedItems) {
        //     const restExist=cart.filter(product=>product.id!==id)
        //     setCart(restExist)
        // }
        // delete storedItems[`'${id}'`]
        removeFromStore(id)
    }


    return (
        <div className='order-summery'>
            <div className="order-details">
                {
                    cart.map(product => <Order key={product.id} product={ product}  handleDelete={ handleDelete}/>)
                }
            </div>
            <div className="cart-details">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;