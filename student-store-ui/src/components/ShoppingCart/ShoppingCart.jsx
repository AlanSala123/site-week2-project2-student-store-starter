import react from 'react'
import './ShoppingCart.css'
import {useState} from 'react'

function Shopping_cart({ isActive, shoppingList, setShoppingList }) {
    
    
    return (
       <>
        <h1>This is the Shopping Cart</h1>
        <div className="shoppingTable">
            {shoppingList?.map(item => {
                return (
                    <span>
                        <p>{item?.name}</p>
                        <p>{item?.quantity}</p>
                        <p>{item?.price}</p>
                    </span>
                )
            }) }
        </div>
       </> 
    )
}

export default Shopping_cart