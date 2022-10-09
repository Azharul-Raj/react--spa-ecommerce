import React from 'react';
// import styles './Order.module.css'
import './Order.css'

const Order = ({ product,handleDelete }) => {
    const {id,name,price,shipping,img}=product
    return (
        <div className='summery'>
            <img className='order-img' src={img} alt="" />
            <div className="details">
                <div className="info">
                    <h4>{name}</h4>
                    <p>Price : {price}</p>
                    <p><small>Shipping : { shipping}</small></p>
                </div>
                <button onClick={()=>handleDelete(id)}>dlt</button>
            </div>
        </div>
    );
};

export default Order;