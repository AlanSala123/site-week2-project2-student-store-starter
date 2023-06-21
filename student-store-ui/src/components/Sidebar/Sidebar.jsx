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
     
     <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" onClick={() => {setIsActive(!isActive)}} style={{height: "30px" }}/> <br/>

     <img src="https://i.pinimg.com/564x/d1/18/24/d1182476f8b002024f8334f8cc904c7b.jpg" onClick = {() => setIsActive(!isActive)} style={{height: "30px" }}/>
     
     <div style={{display: isActive ? "" : "none"}}>
        
        <Shopping_cart isActive={isActive} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
       
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
