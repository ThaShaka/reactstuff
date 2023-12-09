import React from 'react'
import Card from './Card';
import cardsData from './cardsData';


const Cards = () => {
    
    return (<section className='cardCarousel'>
        {cardsData.map((card, index) => (<Card  id={index} {...card}/>))}
    </section>)
}

export default Cards