import React from 'react'
import logo from "../assets/react.svg"
const Navbar = () => {
  return <header>
      <div className="logo">
        <img src={logo} />
        <h3>ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
  </header>
}

export default Navbar