import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=''/>
            <div className='nav'>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
            </div>
        </div>
    );
};

export default Header;