import React, { useState } from "react";
import "../App.css";

function NewTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [creditDebit, setCreditDebit] = useState("");

  const newTransaction = () => {
    if (text && amount && (creditDebit === "Credit" || creditDebit === "Debit")) {
      const transaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
        amount: creditDebit === "Debit" ? +amount * -1 : +amount,
        date: date,
      };

      addTransaction(transaction);
      
      setText("");
      setAmount("");
      setCreditDebit("");
      setDate("");
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="newtransaction">
      <h2  className="transaction-heading">New Transaction</h2>
      <input
        value={text}
        className="floating-label"
        type="text"
        placeholder="Enter Transaction Name"
        onChange={(e) => setText(e.target.value)}
      />

      <input
        value={date}
        className="number-input"
        type="date"
        placeholder="Enter The Date"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        value={amount}
        className="number-input"
        type="number"
        placeholder="Total Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        onChange={(e) => setCreditDebit(e.target.value)}
        value={creditDebit}
        required
      >
        <option value="">Enter Income/Expense</option>
        <option value="Credit">Income</option>
        <option value="Debit">Expense</option>
      </select>
      <input
        className="transaction-button"
        onClick={newTransaction}
        type="submit"
        value="Add New Transaction"
      />
      <button
        className="transaction-button"
        onClick={() => {
          setText("");
          setAmount("");
          setCreditDebit("");
          setDate("");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default NewTransaction;
