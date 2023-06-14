import * as React from "react"
import "./Sidebar.css"
import Button from "../Button/button"
import { useState } from 'react'


export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="sidebar" style={{borderStyle : "solid", width: (isActive ? "30%" : "7.5%")}}>
     
     <img src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" onClick={() => {setIsActive(!isActive)}} style={{height: "30px" }}/>
     
     <div style={{display: isActive ? "" : "none"}}>
        Name
        <input style={{width: "90%"}} type="text"/>
        Email
        <input style={{width: "90%"}} type="text"/>
        <input type="checkbox" name="" id="" />
        I agree to the terms and service <br/>
        <button>
          Checkout
        </button><br/>
        A confirmation email will be sent to you
     </div>
    </section>
  )
}
