import React from 'react';

function Item({text, amount}) {
    const styles = {
        borderRight : amount < 0 ? "3px solid red" : "3px solid green"
    }

    return <div className="item" style={styles}>
        <span>{text}</span>
        <span >{amount}</span>
    </div>
}

export default Item;