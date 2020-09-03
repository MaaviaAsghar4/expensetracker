import React from "react";

export function Addtransactions() {
    return (
        <div>
            <h3>Add New Transactions</h3>
            <form>
            <label for="transactions">Transactions</label>
            <br></br>
            <input type="text" placeholder="Enter Transaction Type" />
            <br></br>
            <label for="amount">Amount</label>
            <br></br>
            <p>(-ve indicates expense, +ve indicates income)</p>
            <br></br>
            <input type="number" placeholder="Enter amount" />
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}