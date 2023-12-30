import Item from "./Item.jsx";

function History({history}) {
    return <section className="history">
        <h3>History</h3>
        <hr/>
        {history.map((thing,index)=> ( <Item text={thing.text} amount={thing.amount} key={index} />))}

    </section>
}

export default History;