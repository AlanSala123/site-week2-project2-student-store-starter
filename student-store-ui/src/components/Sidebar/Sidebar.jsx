import * as React from "react"
import "./Sidebar.css"
import { useState } from 'react'
import Shopping_cart from "../ShoppingCart/ShoppingCart";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";


export default function Sidebar({products, shoppingList, setShoppingList}) {


  //useState for activity of the bar
  const [isActive, setIsActive] = useState(false);

  //useState to check if the checkout button is pressed
  const [checkout, setIsCheckout] = useState(true);

  //useState for the total in the shoppingCart table
  const[total, setTotal] = useState(0)

  //useState for the email and the name attributes
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  return (
    
    <section className="sidebar" style={{borderStyle : "solid", width: (isActive ? "35%" : "7.5%")}}>
     
     <img src="https://static.thenounproject.com/png/2113559-200.png" onClick={() => {setIsActive(!isActive)}} style={{height: "100px" }}/> <br/>
     
     <div style={{display: isActive ? "" : "none"}}>
        
        <Shopping_cart isActive={isActive} shoppingList={shoppingList} setShoppingList={setShoppingList} total={total} setTotal={setTotal}/>
       
       <h1>Payment Info</h1>

        Name:
        <input onChange={(event) => {
          setName(event.target.value)
          event.preventDefault()}
          } className="nameSidebar" type="text" placeholder="Add your name!"/><br/>

        Email:
        <input onChange={(event) => {
          setEmail(event.target.value)
          event.preventDefault()}
          } className="nameSidebar" type="text" placeholder="Add your Email!"/><br/>

        I agree to the terms and service
        <input className="check" type="checkbox" name="" id="" /><br/><br/>

        <button onClick={(event) => setIsCheckout(!checkout)} >Checkout</button>

        <CheckoutInfo 
        shoppingList={shoppingList}
         setShoppingList={setShoppingList} 
         checkout={checkout} total={total} 
         setTotal={setTotal} 
         name={name}
         email={email}
         />
      
     </div>
    </section>
  )
}
