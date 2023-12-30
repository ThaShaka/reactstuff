
function Information({history}) {
    const Income = () => {
        let a=0;
        for (const item of history) {
            if(item.amount>0)a+=item.amount
        }
        return a.toFixed(2);
    }
    const Expense = () => {
        let a=0;
        for (const item of history) {
            if(item.amount<0)a+=item.amount
        }
        return Math.abs(a.toFixed(2));
    }
    return <section className="info">
        <div className="income">
            <h4>INCOME</h4>
            <h4>$<Income /></h4>
        </div>
        <div className="expense">
            <h4>EXPENSE</h4>
            <h4>$<Expense/></h4>
        </div>
    </section>
}

export default Information;