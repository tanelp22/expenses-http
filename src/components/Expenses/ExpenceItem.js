import React from "react";
import "./ExpenceItem.css";
import ExpenceDate from "./ExpenceDate.js";

const ExpenceItem = (props) => {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.data.date} />
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">{props.data.price}</div>
      </div>
    </div>
  );
};

export default ExpenceItem;
