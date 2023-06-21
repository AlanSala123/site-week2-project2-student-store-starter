import * as React from "react"
import "./Navbar.css"

//Navigation bar section of the website
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
          <a href="/" className="site-home"><li>Home</li></a>
          <li><a href="/About-Me">About Me</a></li>
          <li><a href="/Contact-Me">Contact Me</a></li>
          <li><a href="/Purchase">Purchase</a></li>
      </ul>
    </nav>
  )
}
