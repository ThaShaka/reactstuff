import React from 'react'
import memeData from "./memeData"
import { useState } from 'react';


const Main = () => {

    const [allMemeImages, setAllMemeImages] = useState(memeData);

    const [meme, setMeme] = useState({
        topText: "",
        botttomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url =  `${memesArray[randomNumber].url}`;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
    }
    return <main>
        <div className="inputs">
            <section className="upperText">
                <label htmlFor="topinput">Shut up</label>
                <input type="text" id='topinput'  />
            </section>
            <section className="lowerText">
                <label htmlFor="botinput">Take my money</label>
                <input type="text" id='botinput'  />
            </section>
        </div>
        <button onClick={getMemeImage}>Get a new meme image</button>

        <div className="meme">
        <img src={meme.randomImage} alt="" id='memeImg' />
        </div>
    </main>
}


export default Main