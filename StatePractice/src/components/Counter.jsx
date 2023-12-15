import { useState } from 'react'
import Count from './Count'
const Counter = () => {
  /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     **/
  const [count, setCount] = useState(0)
  function add() {
    setCount(prevCount => ++prevCount)
  }
  function sub() {
    setCount(prevCount => --prevCount)
  }
  console.log("Rendered")
  return (
    <main>
      <div className="counter">
          <button className="counter--minus" onClick={sub}>–</button>
          <Count number={count}/>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
      
    </main>
    
)
}

export default Counter