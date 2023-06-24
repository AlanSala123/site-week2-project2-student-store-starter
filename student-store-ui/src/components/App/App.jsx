import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProdDetail from "../ProductDetail/ProductDetail"
import Receipt from "../Receipt/Receipt"



export default function App() {

  //API link
  const internalUrl = "http://localhost:3001"

  //useState for the products
  const [products, setProducts] = useState();

  //useState for the actual shopping list
  const [shoppingList, setShoppingList] = useState([]);

  //useState for the email and the name attributes
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


    //useState for the transaction ID
    const [TransId, setTransId] = useState(100)

  //fetching the API 
  useEffect(() => {
    axios.get(internalUrl).then((response) => {
      setProducts(response.data)
    });
  }, []);


  //creates the routes 
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={
            <main>
              <Navbar />
              <Sidebar shoppingList={shoppingList} setShoppingList={setShoppingList} name={name} email={email} setEmail={setEmail} setName={setName} TransId={TransId} setTransId={setTransId} />
              <Home products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} />
            </main>} />
          <Route path="products/:id" element={<ProdDetail />} />
          <Route path="receipt" element={<Receipt shoppingList={shoppingList} name={name} email={email} TransId={TransId}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
