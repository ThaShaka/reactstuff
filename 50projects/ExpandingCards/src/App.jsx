import Image from "./components/Image.jsx"
import imageData from "./components/imageData.jsx"
import {useState} from "react";
function App() {
    const [activeIndex, setActiveIndex] = useState(0)

    function handleActive(index) {
        setActiveIndex(index)
    }

    return <main>
        {imageData.map((image,index)=> {return <Image key={image.id} img={image.path} active={index === activeIndex} desc={image.desc} handleClick={()=>handleActive(index)} />})}


    </main>
}

export default App
