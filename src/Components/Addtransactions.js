import React, {useState} from "react";

export function Addtransactions() {

    const [transactionType, setTransactionType] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transactions</h3>
            <form className="form-transaction">
            <label htmlFor="transactions">Transactions</label>
            <br></br>
            <input type="text" value={transactionType} onChange={(e)=>setTransactionType(e.target.value)} placeholder="Enter Transaction Type" />
            <br></br>
            <label htmlFor="amount">Amount</label>
            <br></br>
            <sub>(-ve indicates expense, +ve indicates income)</sub>
            <br></br>
            <input type="number" value={transactionAmount} onChange={(e)=>setTransactionAmount(e.target.value)} placeholder="Enter amount" />
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}