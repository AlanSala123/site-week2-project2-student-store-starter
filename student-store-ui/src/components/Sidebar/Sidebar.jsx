import * as React from "react"
import "./Sidebar.css"
import { useState } from 'react'
import Shopping_cart from "../ShoppingCart/ShoppingCart";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";


export default function Sidebar({products, shoppingList, setShoppingList}) {


  //useState for activity of the bar
  const [isActive, setIsActive] = useState(false);


  return (
    
    <section className="sidebar" style={{borderStyle : "solid", width: (isActive ? "30%" : "7.5%")}}>
     
     <img src="https://static.thenounproject.com/png/2113559-200.png" onClick={() => {setIsActive(!isActive)}} style={{height: "100px" }}/> <br/>
     
     <div style={{display: isActive ? "" : "none"}}>
        
        <Shopping_cart isActive={isActive} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
       
       <h1>Payment Info</h1>

        Name:
        <input className="nameSidebar" type="text" placeholder="Add your name!"/><br/>
        Email:
        <input className="nameSidebar" type="text" placeholder="Add your Email!"/><br/>

        I agree to the terms and service

        <input className="check" type="checkbox" name="" id="" /><br/><br/>

        <CheckoutInfo />
      
     </div>
    </section>
  )
}
