import React from 'react';

function Transactions({transaction,setTransaction}) {
      function handleChange(event) {
          const {name,value} = event.target;
          setTransaction(prevTrans => {return {
          ...prevTrans,
           [name]: name==="amount" ? Number(value) : value,
          }})
      }

     return  <section className="transactions">
        <h3>Add new transaction</h3>
        <hr/>
        <label htmlFor="text">Text</label>
        <input type="text" name="text" id="text" placeholder={"Enter text..."}  onChange={handleChange} value={transaction.text}/>
        <label htmlFor="amount">Amount</label>
        <p>[negative-expense, positive-income]</p>
        <input type="text" name="amount" id="amount" onChange={handleChange} placeholder="Enter amount..."/>
    </section>
}

export default Transactions;