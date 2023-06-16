import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import { useState } from 'react'
import Footer from "../Footer/Footer";
import About from "../About-Me/About-Me";
import Contact from "../Contact-Me/Contact";
import ProdGrid from "../ProductGrid/ProductGrid";


export default function Home({products}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  
  const categories = [
    "All",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

  const productFilter = products?.filter((product) => {
    const searchTerm = search.toLowerCase();
    const productCategory = category.toLowerCase() == "all" ? "" : category.toLowerCase();
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
      className="SearchBar"
      type="text"
      value={search}
      onChange = {(e) => setSearch(e.target.value)}
      placeholder="Search!"
      /><br/>
      <div className="searchButtons">
      {categories.map((cat, index) => (
        <button className="Button"key={index} onClick={() => setCategory(cat)}> {cat} </button>
      ))}</div>
  </div>
    <div className="home">
      <h1>Purchase</h1>
      <ProdGrid productFilter={productFilter} />
      <h1>About Me </h1>
      <About />
      <h1>Contact Me</h1>
      <Contact />
      <Footer />
    </div>
  </>
  )
}
