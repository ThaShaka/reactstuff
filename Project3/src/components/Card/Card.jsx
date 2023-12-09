import React from 'react'

import logo from "./../../../public/images/star.png"

const Card = (cards) => {
    return <article className="card">
        <div className="img">
            <img src={`./../../../public/images/${cards.coverImg}`} />
            <span id='status'>
                {cards.spots== 0 ? "Sold out" : "Online" }
            </span>
        </div>
        <div className="info">
            <p><img src={logo}  id='starLogo'/> {cards.stats.rating} <span>({cards.stats.reviewCount}) • {cards.country}</span></p>
            <p>{cards.title}</p>
            <p><span>From {cards.price}$ </span>/ person</p>
        </div>
    </article>
}

export default Card