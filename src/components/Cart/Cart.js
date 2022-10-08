import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let quantity=0
    const totalPrice=cart.reduce((initial,current)=>{
        // console.log(current.quantity) 
        quantity += current.quantity
        // console.log(quantity)
        initial+=current.price * quantity 
        return initial
    },0)
    const totalShipping=cart.reduce((initial,current)=>{
        initial+=current.shipping
        return initial
    },0)
    const tax=parseFloat(((totalPrice+totalShipping)*.1).toFixed(3))
    const grandTotal=totalPrice + totalShipping + tax

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item : {quantity} </p>
            <p>Total Price : {totalPrice}$</p>
            <p>Total Shipping : {totalShipping}$</p>
            <p>Tax : {tax}$</p>
            <h4>Grand Total : {grandTotal}$</h4>
        </div>
    );
};

export default Cart;