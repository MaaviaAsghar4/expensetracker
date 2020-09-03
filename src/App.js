import React from 'react';
import './App.css';
import {Header} from "./Components/Header"
import {Expensetracking} from "./Components/Expensetracking"
import {IncomeExpense} from "./Components/IncomeExpense"
import {History} from "./Components/History"
import {Addtransactions} from "./Components/Addtransactions"

function App() {

  return (
    <div>
      <Header />
      <Expensetracking />
      <IncomeExpense />
      <History />
      <Addtransactions />
    </div>
  );
}

export default App;
