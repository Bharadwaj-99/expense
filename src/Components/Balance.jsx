import React from "react";
import "../App.css";


function Balance({ transactions }) {


  let amount = transactions.map((transaction) => {
    return transaction.amount;
  });

  

  let total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <div>
      <h2 className="balance">Balance:₹{total}</h2>
    </div>
  );
}

export default Balance;
