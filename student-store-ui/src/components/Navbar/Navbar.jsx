import * as React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
          <li></li>
          <li><a href="/" className="site-home">Home</a></li>
          <li><a href="/About-Me">About Me</a></li>
          <li><a href="/Contact-Me">Contact Me</a></li>
          <li><a href="/Purchase">Purchase</a></li>
      </ul>
    </nav>
  )
}
