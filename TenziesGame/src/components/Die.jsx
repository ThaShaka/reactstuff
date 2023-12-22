
function Die({value, holdDice, isHeld}) {
    const styles = {
        backgroundColor : isHeld ? "#59E391" : ""
    }
    return <div className={"dice"} style={styles} onClick={holdDice}>
        <h1>{value}</h1>
    </div>
}

export default Die;