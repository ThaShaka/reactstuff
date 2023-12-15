import { useState } from "react"
import boxes from "./components/boxes";
import Box from "./components/Box";

function App({darkMode}) {
  const [box, setBox] = useState(boxes);
 
  
  return (
    <main>
        <h1>Boxes will go here</h1>
        {box.map((iBox)=>(<Box key={iBox.id} on={iBox.on} />))}
    </main>
)
}

export default App
