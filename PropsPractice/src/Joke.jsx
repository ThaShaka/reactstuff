import React from 'react'
import { useState } from 'react'

const Joke = ({setup, punchline}) => {
  const [show, isShown] = useState(false)
  function toggleShown() {
    isShown(wasShown=> !wasShown)
  }





  return <div>
    {setup && <h3>{setup}</h3>}
    {show && <h2>{punchline}</h2> }
    <button onClick={toggleShown}>{!show ? "Show" : "Hide"}</button>
    <hr />


  </div>
}

export default Joke