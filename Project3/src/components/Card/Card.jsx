import React from 'react'

import logo from "./../../../public/images/star.png"

const Card = (cards) => {
    return <article className="card">
        <div className="img">
            <img src={`./../../../public/images/${cards.cards.coverImg}`} />
            <span id='status'>
                {cards.cards.openSpots== 0 ? "Sold out" : "Online" }
            </span>
        </div>
        <div className="info">
            <p><img src={logo}  id='starLogo'/> {cards.cards.stats.rating} <span>({cards.cards.stats.reviewCount}) • {cards.cards.country}</span></p>
            <p>{cards.cards.title}</p>
            <p><span>From {cards.cards.price}$ </span>/ person</p>
        </div>
    </article>
}

export default Card