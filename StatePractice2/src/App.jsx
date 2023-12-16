import { useState } from "react"
import boxes from "./components/boxes";
import Box from "./components/Box";

function App() {
  const [box, setBox] = useState(boxes);
  function toggle(id) {
      setBox(prevBox => {
    
        return prevBox.map((square)=>{
          return square.id === id ? {...square, on: !square.on} : square
        })


     } )
  }
  
  return (
    <main>
        <h1>Boxes will go here</h1>
        {box.map((iBox)=>(<Box key={iBox.id} id={iBox.id} on={iBox.on} toggle={toggle} />))}
    </main>
)
}

export default App
