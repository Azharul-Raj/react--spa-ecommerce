import React from 'react';
import './Product.css'
import notFount from '../../images/noimg.jpg'

const Product = ({product,handleCart}) => {
    // console.log(handleCart)
    const{img,name,id,ratings,price,quantity,seller,shipping}=product
    return (
        <div className='card'>
            <img className='img' src={img===404?notFount:img} alt="" />
            <div className="info">
                <h4>{name.length>27?name.slice(0,27)+'...':name}</h4>
                <h5>Price : {price}</h5>
                <p>manufacturer : {seller}</p>
                <p>rating: {ratings}</p>
            </div>
            <button onClick={()=>handleCart(id,product)} className='btn'>Add To Cart</button>
        </div>
    );
};

export default Product;