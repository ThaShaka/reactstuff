import React from 'react'
import logo from "./../../public/images/troll-face.png"
const Header = () => {
    return <header>
    <div className="logo">
        <img src={logo} alt="" /> <span>Meme Generator</span>
    </div>
    <p>React Course - Project 3</p>
    </header>
}

export default Header