import react from 'react'
import './ShoppingCart.css'
import { useState, useEffect } from 'react'

function Shopping_cart({ isActive, shoppingList, setShoppingList, total, setTotal }) {

    //useState if there is products in the cart
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        //check to see if we have any items in our cart
        let tempBool = false
        shoppingList?.map(item => {
            if (item?.quantity > 0) {
                tempBool = true
            }
        })
        setIsOpen(tempBool)

        //get the subTotal
        let subTotal = 0
        shoppingList?.map(item => {
            subTotal += item.price * item.quantity;
        })
        setTotal(subTotal);
    })

  
    return (
        <div className="entireShopping">
            <h1>Shopping Cart</h1>

            <div style={{ display: (isOpen ? "none" : "") }}>
                <p>Looks like you have nothing in your cart!</p>
            </div>

            <span className="categories" style={{ display: (isOpen ? "" : "none") }}>
                <p>{"Product Name"}</p>
                <p>{"Quantity"}</p>
                <p>{"Unit Price"}</p>
                <p>{"Cost"}</p>
            </span>

            <div className="shoppingTable" style={{ display: (isOpen ? "" : "none") }}>
                {shoppingList?.map(item => {
                    return (
                        <>
                            {(item.quantity != 0) ?

                                (<span className="shoppingItems">
                                    <p>{item?.name}</p>
                                    <p>{item?.quantity}</p>
                                    <p>{'$'}{item?.price.toFixed(2)}</p>
                                    <p>{'$'}{(item?.price * item?.quantity).toFixed(2)}</p>
                                </span>) : (<></>)
                            }
                        </>
                    )
                })}
                <span className="subTotal" style={{ display: (isOpen ? "" : "none") }}>
                    <p>{"SubTotal : $"}{total.toFixed(2)}</p>
                    <p>{"Taxes and Fees : $"}{(total.toFixed(2) * 0.0875).toFixed(2)}</p>
                    <p>{"Total : $"}{(+total.toFixed(2) + +(total.toFixed(2) * 0.0875).toFixed(2)).toFixed(2)}</p>
                </span>
            </div>
        </div>
    )
}

export default Shopping_cart