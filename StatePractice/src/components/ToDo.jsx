import React from 'react'
import { useState } from 'react'

const ToDo = () => {
    const [thing, setThing] = useState(["Thing 1", "Thing 2"]);
    function addItem() {
        setThing(prevThing =>{return [...thing, `Thing ${prevThing.length+1} `]})
    }
    const thingsElements = thing.map(thing => <p key={thing}>{thing}</p> )
    return (
        <div className='todo'>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )

}

export default ToDo