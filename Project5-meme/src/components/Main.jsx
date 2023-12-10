import React from 'react'
import memeData from "./memeData"
function getMeme() {
    document.getElementById("memeImg").src = memeData.data.memes[Math.floor(Math.random()*100 )+1].url
}

const Main = () => {
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
        <button onClick={getMeme}>Get a new meme image</button>

        <div className="meme">
        <img src="" alt="" id='memeImg' />
        </div>
    </main>
}


export default Main