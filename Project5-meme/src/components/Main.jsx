import React from 'react'
import memeData from "./memeData"
import { useState } from 'react';


const Main = () => {

    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText : "",
    })

    function handleText(event) {
        const {name,value} = event.target;
        setMemeText(prevText => {return {
            ...prevText,
            [name]: value,
        }})
    }

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
    return  <main>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
            name='topText'
            onChange={handleText}
            value={memeText.topText}
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name='bottomText'
            onChange={handleText}
            value={memeText.bottomText}
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
    </div>
    <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{memeText.topText}</h2>
        <h2 className="meme--text bottom">{memeText.bottomText}</h2>
    </div>
</main>
}


export default Main