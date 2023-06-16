import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState} from 'react'
import axios from 'axios'
import Hero from "../Hero/Hero"
import ProdDetail from "../ProductDetail/ProductDetail"



export default function App() {
//url for the API
  const url = "https://codepath-store-api.herokuapp.com/store"

  //useState
  const[products, setProducts] = useState();
  
  useEffect(() => {
    axios.get(url).then((response) => {
      //do stuff with the data
      setProducts(response.data.products)
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
          <Route path="" element={<main>
          <Navbar />
          <Sidebar />
          <Home products={products}/>
        </main>}/>
          <Route path="products/:id" element={<ProdDetail />}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  )
}
