import React from 'react'

const Box = ({key, on}) => {
    const styles = {
        backgroundColor: on ? "#222222" : "none",
    }
  return (
    <div key={key} className="box" style={styles}></div>
  )
}

export default Box