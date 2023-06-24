import * as React from "react"
import "./Sidebar.css"
import { useState } from 'react'
import Shopping_cart from "../ShoppingCart/ShoppingCart";
import CheckoutInfo from "../CheckoutInfo/CheckoutInfo";
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Sidebar({shoppingList, setShoppingList, name, email, setEmail, setName, TransId, setTransId}) {

  //Last receipt
  const [lastR, setLastR] = useState([]);

  //send the shoppingList order to the endpoint
  async function sendCheckout() {
    try {
      const data = { shoppingList: shoppingList, name: name, email: email }
      const response = await axios.post("http://localhost:3001/products", data);
      console.log(response.data)
      setLastR(shoppingList);
    } catch {

    }
  }
  //useState for activity of the bar
  const [isActive, setIsActive] = useState(false);

  //useState to check if the checkout button is pressed
  const [checkout, setIsCheckout] = useState(true);

  //useState for the total in the shoppingCart table
  const [total, setTotal] = useState(0)

  return (

    <section className="sidebar" style={{ borderStyle: "solid", width: (isActive ? "35%" : "7.5%") }}>

      <img src="https://static.thenounproject.com/png/2113559-200.png" onClick={() => { setIsActive(!isActive) }} style={{ height: "100px" }} /> <br />

      <div style={{ display: isActive ? "" : "none" }}>

        <Shopping_cart isActive={isActive} shoppingList={shoppingList} setShoppingList={setShoppingList} total={total} setTotal={setTotal} />
        <div className="clearCart">
          <button onClick={() => setShoppingList([])}>Clear Cart</button>
        </div>
        <div className="payment">
          <h1>Payment Info</h1>
          Name:
          <input onChange={(event) => {
            setName(event.target.value)
            event.preventDefault()
          }
          } className="nameSidebar" type="text" placeholder="Add your name!" /><br />
          Email:
          <input onChange={(event) => {
            setEmail(event.target.value)
            event.preventDefault()
          }
          } className="nameSidebar" type="text" placeholder="Add your Email!" /><br />
          <Link to="receipt">
          <div className="checkoutCart">
            <button onClick={(event) => {
              setIsCheckout(!checkout)
              sendCheckout()
              setTransId(TransId + 1);
            }} >Checkout</button>
          </div>
          </Link>

        </div>

        <CheckoutInfo
          checkout={checkout}
          setIsCheckout={setIsCheckout}
          total={total}
          name={name}
          email={email}
          lastR={lastR}
        />

      </div>
    </section>
  )
}
