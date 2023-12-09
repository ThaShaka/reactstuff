import React from 'react'
import logo from "../react-logo.png"

const Header = () => {
  return (
    <header className='header'>
    <nav>
      <img src={logo}  className='reactLogo' />
      <ul className='nav-items'>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header