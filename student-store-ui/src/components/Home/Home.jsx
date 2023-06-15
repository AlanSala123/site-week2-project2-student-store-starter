import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import { useState } from 'react'


export default function Home({products}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  
  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

  const productFilter = products?.filter((product) => {
    const searchTerm = search.toLowerCase();
    const productCategory = category.toLowerCase() == "all categories" ? "" : category.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = searchTerm === "" || productName.includes(searchTerm);
    const matchesCategory = productCategory === "" || product.category?.toLowerCase() === productCategory;

    return matchesSearch && matchesCategory;

  });

  return (
  <>
  <Hero />
  <div className="search-container">
  <h1>Search for Products</h1>
  <input
      type="text"
      value={search}
      onChange = {(e) => setSearch(e.target.value)}
      placeholder="Search!"
      />
      {categories.map((cat, index) => (
        <button key={index} onClick={() => setCategory(cat)}> {cat} </button>
      ))}
  </div>
    <div className="home">
      <h1>Purchase</h1>
      <div className="product-container">
      {
        productFilter?.map(product => {
          return (<div className="product">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{"$"}{product.price}</p>
            </div>)
        })
      }
      </div>
      <h1>About Me</h1>
      <div className="About-Me">
        <p>Hello My name is foo bar I am an employee at Salesforce who is looking to create better opportunities for students</p>
        <p>everytime something is sold from this store we are helping pay for someone's tuition! </p>
        <p>Come and help us help students go to college</p>
        <img src="data:image/jpeg;base64,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" />
      </div>
      <h1>Contact Me</h1>
      <div className="Contact-Me">
        <div className="Contact-Text">
          <span>
          <p>Email:</p>
          <p>foobar@salesforce.com</p>
          </span>
          <span>
          <p>Phone:</p>
          <p>1-800-BUYNOW</p>
          </span>
          <span>
          <p>Address:</p>
          <p>415 Mission Street</p>
          </span>
          <span>
          <p>Socials:</p>
          </span>
        </div>
        <div className="house-img">
          <img src="https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-house-illustration-png-image_6434928.png" />
        </div>

      </div>

      <footer className="footer">
       <nav className="list">
        <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
        </nav> 
      </footer>
    </div>
  </>
  )
}
