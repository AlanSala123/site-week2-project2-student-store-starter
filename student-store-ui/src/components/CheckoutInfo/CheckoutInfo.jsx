import react from 'react'
import './CheckoutInfo.css'

function CheckoutInfo({shoppingList, setShoppingList, checkout, total, setTotal, name, email}) {
    
    return (
    <>
        <h1>Checkout Info</h1>
        <div className="checkInfo" style={{display: checkout ? "" : "none"}}>
        <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
        </div>
        <div className="checkPressed" style={{display: checkout ? "none" : ""}}>
            <p> Receipt </p>
            <p> Showing receipt for {name} avaiable at {email}:</p>
            {shoppingList?.map(item => {
                    return (
                        <>
                            {(item.quantity != 0) ?
                                (<p> - {item?.quantity} total {item?.name} purchased at a cost of ${(item?.price).toFixed(2)} for a total cost of ${(item?.price * item?.quantity).toFixed(2)}</p>) : (<></>)
                            }
                        </>
                    )
                })}
            <p>Before taxes the subtotal was ${total.toFixed(2)}</p>
            <p>After taxes and fees were applied the total comes out to be ${(+total.toFixed(2) + +(total.toFixed(2) * 0.0875).toFixed(2)).toFixed(2)}</p>
        </div>
    </>   

    )
}

export default CheckoutInfo