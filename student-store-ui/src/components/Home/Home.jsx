import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import { useState } from 'react'
import Footer from "../Footer/Footer";
import About from "../About-Me/About-Me";
import Contact from "../Contact-Me/Contact";
import ProdGrid from "../ProductGrid/ProductGrid";


export default function Home({products}) {
  
  //useState for the search and for the category
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  
  //array of the categories
  const categories = [
    "All",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];

  const productFilter = products?.filter((product) => {
    //input form the search and turn it lower case
    const searchTerm = search.toLowerCase();
    //category from buttons
    const SearchCategory = category.toLowerCase();
    //Get the product name
    const productName = product.name.toLowerCase();
    //checks if the products matches the search returns true else returns false
    const matchesSearch = (searchTerm == "" || productName.includes(searchTerm));
    //checks the product to see if it matches what the user is searching for
    const matchesCategory = (SearchCategory == "all" || product.category?.toLowerCase() == SearchCategory);

    //return both filters to combine them into one
    return matchesSearch && matchesCategory;

  });

  return (
  <>
  <Hero />
  {/* SearchBar container */}
  <h1 className="SearchHead">Search Products</h1>
  <div className="search-container">
  <input className="SearchBar" type="text" value={search} onChange = {(event) => setSearch(event.target.value)} placeholder="Search!"/><br/>
    
    {categories.map((cat, index) => (
      <button className="Button" key={index} onClick={() => setCategory(cat)}> {cat} </button>
    ))}

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
