import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState} from 'react'
import axios from 'axios'
import ProdDetail from "../ProductDetail/ProductDetail"



export default function App() {
  //url for the API
  const url = "https://codepath-store-api.herokuapp.com/store"

  //useState for the products
  const[products, setProducts] = useState();
  
  //useState for the actual shopping list
  const[shoppingList, setShoppingList] = useState([]);


  
  //fetching the API 
  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
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
            <Sidebar products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} />
            <Home products={products} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
        </main>}/>
          <Route path="products/:id" element={<ProdDetail />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
