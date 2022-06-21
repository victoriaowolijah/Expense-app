import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./Expenseitem.css";

function Expenseitem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
      </div>
    </div>
  );
}

export default Expenseitem;
