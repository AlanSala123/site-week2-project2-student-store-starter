import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import { useState } from 'react'
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ProdGrid from "../ProductGrid/ProductGrid";


export default function Home({ products, shoppingList, setShoppingList }) {

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
    //input form the search and category and turn it lower case
    const searchFor = search.toLowerCase();
    const SearchCat = category.toLowerCase();

    //Get the product name
    const prodName = product.name.toLowerCase();

    //bool variables that check to see if the search and category match
    const equalSearch = (searchFor == "" || prodName.includes(searchFor));
    const equalCat = (SearchCat == "all" || SearchCat == product.category?.toLowerCase());

    //return both filters to combine them into one
    return equalSearch && equalCat;

  });

  return (
    <>
      <Hero />
      <h1 className="SearchHead"> Search Products </h1>
      <div className="search-container">
        {/* Search Bar */}
        <input className="SearchBar" type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search!" /><br />
        {/* mapping through categories array and creating each category button*/}
        {categories.map((categories, index) => (
          <button className="Button" key={index} onClick={() => setCategory(categories)}> {categories} </button>
        ))}
      </div>
      {/* Components inside the home section of the website */}
      <div className="home">
        <h1>Purchase</h1>
        <ProdGrid productFilter={productFilter} setShoppingList={setShoppingList} shoppingList={shoppingList} />
        <h1>About Me </h1>
        <About />
        <h1>Contact Me</h1>
        <Contact />
        <Footer />
      </div>
    </>
  )
}
