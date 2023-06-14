import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState} from 'react'
import axios from 'axios'
import Button from '../Button/button'
import Hero from "../Hero/Hero"



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
        <main>
          <Navbar />
          <Sidebar />
          <Home products={products}/>
          {/* {products?.map( (product, index) => <h1>{product.name}</h1>)} */}
        </main>
      </BrowserRouter>
    </div>
  )
}
