import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Order from '../Order/Order';
import './Orders.css'

const Orders = () => {
    const { products,newStoredCart } = useLoaderData()
    const [cart,setCart]=useState(newStoredCart)
    


    return (
        <div className='order-summery'>
            <div className="order-details">
                {
                    cart.map(product => <Order key={product.id} product={ product} />)
                }
            </div>
            <div className="cart-details">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;