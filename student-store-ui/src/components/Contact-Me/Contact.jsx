import React from 'react'
import "./Contact.css"

//Contact me section of the website
function Contact() {
    return (
       <>
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
        </div>
        <div className="house-img">
          <img src="https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-cartoon-house-illustration-png-image_6434928.png" />
        </div>
      </div>
       </>
    )
}

export default Contact