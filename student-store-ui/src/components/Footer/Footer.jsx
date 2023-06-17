import React from 'react'
import "./Footer.css"

//Footer section of the website

function Footer() {
    return (
    <footer className="footer">
       <div className="column">
          <h3>Categories</h3>
          <a href="#">All Categories</a>
          <a href="#">Clothing</a>
          <a href="#">Food</a>
          <a href="#">Accessories</a>
          <a href="#">Tech</a>
        </div>
       <div className="column">
          <h3>Company</h3>
          <a href="#">About Us</a>
          <a href="#">Find a Store</a>
          <a href="#">Terms</a>
          <a href="#">Sitemap</a>
          <a href="#">Careers</a>
        </div>
       <div className="column">
          <h3>Support</h3>
          <a href="#">Contact Us</a>
          <a href="#">Money Refund</a>
          <a href="#">Order Status</a>
          <a href="#">Shipping Info</a>
          <a href="#">Open Dispute</a>
        </div>
       <div className="column">
           <h3>Account</h3>
          <a href="#">Login</a>
          <a href="#">Register</a>
          <a href="#">Account Settings</a>
          <a href="#">My orders</a>
        </div>
       <div className="column">
          <h3>Socials</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Linkedin</a>
          <a href="#">Youtube</a>
       </div>
    </footer>
    )
}

export default Footer