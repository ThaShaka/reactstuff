import React from 'react'

const Joke = ({setup, punchline}) => {
  return <div>
    <h1>Setup: {setup}</h1>
    <h2>Punchline :{punchline}</h2>
    <hr />
  </div>
}

export default Joke