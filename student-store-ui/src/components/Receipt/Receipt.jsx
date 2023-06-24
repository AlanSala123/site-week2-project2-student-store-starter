import Navbar from '../Navbar/Navbar';
import './Receipt.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Receipt({shoppingList, name, email, TransId}) {
    
    //useState for the receipt total
    const [subTot, setsubTot] = useState(0);

    useEffect(() => {
        //get the subTotal
        let subTotal = 0
        shoppingList?.map(item => {
            subTotal += item.price * item.quantity;
        })
        setsubTot(subTotal);
    })
    
    return(
    <>  
        <div className="receipt">
            <Navbar />
            <div className="receiptInfo">
                <h1>Thank you so much {name} for checking out!</h1>  
                <p>Your transaction ID is: #{TransId} </p>
                <p>Receipt of your order available at {email}: </p>
                {shoppingList?.map(item => {
                    return (
                        <>
                            {(item.quantity != 0) ?
                                (<p> - {item?.quantity} total {item?.name} purchased at a cost of ${(item?.price).toFixed(2)} for a total cost of ${(item?.price * item?.quantity).toFixed(2)}</p>) : (<></>)
                            }
                        </>
                    )
                })}
                <p>Before taxes the subtotal was ${subTot.toFixed(2)}</p>
                <p>After taxes and fees were applied the total comes out to be ${(+subTot.toFixed(2) + +(subTot.toFixed(2) * 0.0875).toFixed(2)).toFixed(2)}</p>
                    <Link to="/">
                        <div className="backButton">
                            <button>Back to home page</button>
                        </div>
                    </Link> 
            </div>
        </div>
    </>
    )
}