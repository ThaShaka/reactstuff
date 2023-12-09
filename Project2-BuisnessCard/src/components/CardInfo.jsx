import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const CardInfo = () => {
     return <section className='cardInfo'>
        <h1>John Doe</h1>
        <h3 className='role'>Frontend Developer</h3>
        <div className="buttons">
            <a><MdEmail /> Email</a>
            <a><FaLinkedin/> LinekdIn </a>
        </div>
        <h3 className='subtitle'>About</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus aliquid numquam beatae veritatis eius voluptate quod esse exercitationem qui.</p>
        <h3 className='subtitle sub2'>Interests</h3>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad recusandae reiciendis officiis eum! Placeat veniam accusamus natus maxime impedit!</p>
    </section>
}

export default CardInfo