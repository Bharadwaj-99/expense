import React from 'react'
import { useState } from 'react'
import './App.css'
import Balance from './Components/Balance'
import ExpenseStatus from './Components/ExpenseStatus'
import NewTransaction from './Components/NewTransaction'
import Transaction from './Components/Transaction'

import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
  const[transactions,setTransactions]=useState([]);

  const deleteTransaction=(id)=>{
console.log(id)
setTransactions(transactions.filter(transaction=> transaction.id !==id))



  }

  const addTransaction=(transaction)=>{
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction)

  }

  
  return (
 

    
   
     
      
<div className="title">
<div className="content-part1">
  <h1 className="heading"> 
Expense Tracker</h1>  
<Balance transactions={transactions}/>
<ExpenseStatus transactions={transactions}/>
<NewTransaction  addTransaction={addTransaction}/></div>

<div className="content-part2" >
  <Transaction transactions={transactions} deleteTransaction={deleteTransaction}/>
</div>
</div>




   
  )
}

export default App