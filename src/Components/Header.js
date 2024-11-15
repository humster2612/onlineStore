import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';

export default function Header() {

        let[cartOpen, setCartOpen]= useState(false)

  return (
    <header>
        <div>
            <span className='logo'>Shop</span>
            <ul className='nav'>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Cabinet</a></li>
            </ul>
            <FaShoppingCart onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'} `}/>

                {cartOpen &&(
                    <div className='shop-cart'></div>
                )}
        </div>

        <div className='presentation'></div>
    </header>
  )
}
