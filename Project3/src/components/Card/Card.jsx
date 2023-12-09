import React from 'react'
import img from "./../../../public/images/katie-zaferes.png"
import logo from "./../../../public/images/star.png"

const Card = () => {
    return <article className="card">
        <div className="img">
            <img src={img} />
            <span id='status'>SOLD OUT</span>
        </div>
        <div className="info">
            <p><img src={logo}  id='starLogo'/> 5.0 <span>(6) • USA</span></p>
            <p>Life lesson with Katie Zaferes</p>
            <p><span>From $136 </span>/ person</p>
        </div>
    </article>
}

export default Card