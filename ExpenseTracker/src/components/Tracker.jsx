import {useState} from "react";
import Information from "./Information.jsx";
import Transactions from "./Transactions.jsx";
import History from "./History.jsx"

function Tracker() {
    const Money = () => {
        let a=0;
        for (const item of history) {
            a+=item.amount
        }
        return a.toFixed(2);
    }

    const [transaction, setTransaction] = useState(
        {
            text: "",
            amount : ""
        })
    const [history, setHistory] = useState([])
    function handleClick() {
        setHistory(prevState => {
            return [ transaction, ...prevState]

        })
    }
    return <article className="tracker">
        <h3>Expense Tracker</h3>
        <section className="balance">
            <h3>YOUR BALANCE</h3>
            <h1>$<Money/></h1>
        </section>

        <Information history={history}  />

        <History history={history} />

        <Transactions transaction={transaction} setTransaction={setTransaction} />

        <button onClick={handleClick}>Add Transaction</button>


    </article>
}

export default Tracker;