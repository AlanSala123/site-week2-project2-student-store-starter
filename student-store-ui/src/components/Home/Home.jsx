import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"


export default function Home({products}) {
  return (
    <div className="home">
      <Hero />
      <div className="product-container">
      {
        products?.map(product => {
          return (<div className="product">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            </div>)
        })
      }
      </div>
    </div>
  )
}
